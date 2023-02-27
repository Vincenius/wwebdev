import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'
import CodeBlock from '../../components/CodeBlock'

const ExternalLink = ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

const code1 =
`# import libraries | imports will be available in all following cells as well
from fastcore.all import *
from fastai.vision.all import *
import time
import json

def search_images(term, max_images=100): # define search_images function
    url = 'https://duckduckgo.com/'
    res = urlread(url,data={'q':term})
    time.sleep(2)
    searchObj = re.search(r'vqd=([\d-]+)\&', res)
    requestUrl = url + 'i.js' # the duckduck go api url
    params = dict(l='us-en', o='json', q=term, vqd=searchObj.group(1), f=',,,', p='1', v7exp='a')
    headers = dict( referer='https://duckduckgo.com/' )
    urls,data = set(),{'next':1}
    # loop through pages until we have enough images
    while len(urls)<max_images and 'next' in data:
        res = urlread(requestUrl, data=params, headers=headers)
        data = json.loads(res) if res else {}
        urls.update(L(data['results']).itemgot('image'))
        requestUrl = url + data['next']
        time.sleep(4)
    return L(urls)[:max_images]`

const code2 =
`# "search_images" depends on duckduckgo.com, which doesn't always return correct responses.
#  If you get a JSON error, just try running it again (it may take a couple of tries).
urls = search_images('t-rex', max_images=1)
urls[0] # 'https://preview.redd.it/dwthh8wdl9k21.jpg?auto=webp&s=e0af431550ed710c2ffb11eae6ca325806c9f46b'`

const code3 =
`from fastdownload import download_url
dest = 't-rex.jpg'
download_url(urls[0], dest, show_progress=False)

im = Image.open(dest) # open the downloaded image
im.to_thumb(256,256) # display the image in a 256x256 thumbnail`

const code4 =
`download_url(search_images('triceratops', max_images=1)[0], 'triceratops.jpg', show_progress=False)
Image.open('triceratops.jpg').to_thumb(256,256)`

const code5 =
`searches = 't-rex','triceratops' # define search terms
path = Path('images')

for o in searches:
    dest = (path/o)
    dest.mkdir(exist_ok=True, parents=True) # create folder for categories
    download_images(dest, urls=search_images(f'{o}'))
    time.sleep(5)
    resize_images(path/o, max_size=400, dest=path/o) # resize to save time training the AI`

const code6 =
`failed = verify_images(get_image_files(path))
failed.map(Path.unlink)
len(failed)`

const code7 =
`dls = DataBlock(
  blocks=(ImageBlock, CategoryBlock), # input = images, output = categories
  get_items=get_image_files, # Get image files in path recursive
  splitter=RandomSplitter(valid_pct=0.2, seed=42), # split data into training / validation set randomly
  get_y=parent_label, # label the items - in this case take the parent (folder) as label
  item_tfms=[Resize(192, method='squish')] # method to transform the items - in this case resize
).dataloaders(path, bs=32) # bs = size of batch

# show an example batch of the items we loaded
dls.show_batch(max_n=6)`

const code75 =
`learn = vision_learner(dls, resnet18, metrics=error_rate)
learn.fine_tune(3)`

const code8 =
`prediction,_,probs = learn.predict('t-rex.jpg') # run a prediction
print(f"This is a: {prediction}.")
print(f"Probability it's a t-rex: {probs[0]:.4f}")
print(f"Probability it's a triceratops: {probs[1]:.4f}")`

const code9 =
`path = Path()
path.ls(file_exts='.pkl') # double check if model exists

learn_inf = load_learner('model.pkl')
learn_inf.predict('t-rex.jpg')`

const code10 =
`labels = learn.dls.vocab # read labels from Data Loader
def predict(img):
    pred,pred_idx,probs = learn.predict(img) # use passed image for prediction
    return {labels[i]: float(probs[i]) for i in range(len(labels))} # return all results`

const code11 =
`import gradio as gr
gradio_interface = gr.Interface(fn=predict, inputs=gr.inputs.Image(shape=(512, 512)), outputs=gr.outputs.Label(num_top_classes=3))
gradio_interface.launch(share=True)`

const code12 =
`import gradio as gr
import skimage
from fastai.vision.all import *

path = Path()
learn = load_learner('model.pkl')

labels = learn.dls.vocab # read labels from Data Loader
def predict(img):
    pred,pred_idx,probs = learn.predict(img) # use passed image for prediction
    return {labels[i]: float(probs[i]) for i in range(len(labels))} # return all results

gradio_interface = gr.Interface(fn=predict, inputs=gr.inputs.Image(shape=(512, 512)), outputs=gr.outputs.Label(num_top_classes=3))
gradio_interface.launch()`

const code13 =
`fastai
scikit-image`

const code14 =
`git lfs install
git lfs track "*.pkl"`

const code15 =
`git add .
git commit -m "initial commit"
git push`

const Post = () => (
  <ArticleLayout id={13}>
    <p>
      Recently I've started the course <ExternalLink href="https://course.fast.ai/">Practical Deep Learning for Coders</ExternalLink>.
      This course is great and I'd recommend it if you'd like to get deeper into the topic. But it's also quite time consuming
      as every lesson in this course is an 1h+ long video.
    </p>
    <p>
      This is why I've decided to create this guide, which focuses on the critical parts of the course. I'll cover how to
      <ul>
        <li>Set up the ecosystem for developing an AI</li>
        <li>Create and train an AI model with <ExternalLink href="https://docs.fast.ai/">fastai</ExternalLink></li>
        <li>Deploy the model and use it in your project</li>
      </ul>
    </p>

    <h2>Create a Jupyter Notebook</h2>
    <p>
      To create the AI we will use <ExternalLink href="https://docs.fast.ai/">fastai</ExternalLink>. This is a python library,
      which is build on top of <ExternalLink href="https://pytorch.org/get-started/locally/">pytorch</ExternalLink>. No worries,
      you don't need to know how to code python. We will learn how this stuff works along the way :)
    </p>
    <p>
      You could install and set up all the libraries yourself to run the code in a python file. But usually AIs will be coded
      in things called <ExternalLink href="https://docs.jupyter.org/en/latest/">Jupyter Notebooks</ExternalLink>.
    </p>
    <p>
      There are two options for using a Jupyter Notebook.
      <ol>
        <li>Use a free hosted service like <ExternalLink href="https://www.kaggle.com/">Kaggle</ExternalLink></li>
        <li> Run a notebook locally. You can find a guide on how to set up Jupyter on their <ExternalLink href="https://docs.jupyter.org/en/latest/">documentation</ExternalLink></li>
      </ol>
    </p>
    <p>
      Jupyter Notebooks have cells of either python code or markdown.
      You can run the code directly in your browser by pressing the "Run" button in the top navigation or next to the cell.
      It will give you the output of your code underneath the code cell.
    </p>

    <img src="/blog/ai-guide/01-jupyter-screenshot.png" alt="screenshot of a demo notebook" />

    <p>
      Now let's jump right into the code. The rest of this guide will also be available in
      this Kaggle notebook: <br/>

      <ExternalLink href="https://www.kaggle.com/vincentwill/fastai-tutorial">https://www.kaggle.com/vincentwill/fastai-tutorial</ExternalLink>
    </p>

    <p>
      On Kaggle, for the code to work you must activate the "Internet" switch in the sidebar menu first.
      To open the sidebar, click the small arrow on the bottom right.
      The Internet switch is only available if you've verified your phone number.
    </p>

    <h2>Preparing the data to train the AI</h2>

    <p>
      In this tutorial we will write an AI that will be able to recognize what's in a picture.
    </p>
    <p>
      For that we need some pictures to train the AI with first.
    </p>
    <p>
      The following function is a helper to quickly download pictures from duckduckgo.
      I won't go into detail here, because it's not crucial for training our AI.
      You could also download the pictures manually or use any other scraper to get the data.
    </p>
    <CodeBlock
      language="python"
      value={code1}
    />
    <p>
      I'd recommend to follow this guide first and then trying to train the AI with different images.
      We will start by testing our <code>search_images</code> function. The output will show a link.
    </p>
    <p>For this tutorial, I will create an AI that recognizes different types of dinosaurs.</p>
    <CodeBlock
      language="python"
      value={code2}
    />
    <p>
      Now that we verified that the function is working correctly, we can use it to download and display the pictures.
    </p>
    <CodeBlock
      language="python"
      value={code3}
    />
    <p>
      Now we need to fetch pictures of something different to let the AI know what's not a t-rex.
      We'll use the same function to fetch an image of a triceratops.
    </p>
    <CodeBlock
      language="python"
      value={code4}
    />
    <p>
      Now that we ensured that the search and save are working properly we can use them to download our dataset.
      The next function will loop through our categories and download 100 pictures of each.
    </p>
    <CodeBlock
      language="python"
      value={code5}
    />
    <p>
      It might happen that downloads fail. That's why we need to verify the images and delete the invalid ones.
    </p>
    <CodeBlock
      language="python"
      value={code6}
    />

    <h2>Train the AI</h2>
    <p>
      To train the AI we first need a <ExternalLink href="https://docs.fast.ai/data.block.html">Data block</ExternalLink>. It is like a blueprint on how to assemble your data.
      With this DataBlock we can then create a <ExternalLink href="https://docs.fast.ai/data.core.html#dataloaders">Data loader</ExternalLink> by calling its <code>.dataloader</code> function.
      I'll explain the different parameters in the code below. You can find a more detailed explanation of everything <ExternalLink href="https://docs.fast.ai/data.transforms.html">here</ExternalLink>.
    </p>
    <CodeBlock
      language="python"
      value={code7}
    />
    <p>
      Now we're already ready to train our AI with this data.
      First, we load a pre-trained model. In this case, the pre-trained model was trained to recognize photos. Afterward, we fine-tune this model on our dataset.
      We pass our Data Loader to the vision learner and then the pre-trained model, which we will use. In this case, it's <code>resnet18</code>.
    </p>
    <CodeBlock
      language="python"
      value={code75}
    />

    <h2>Test and deploy the AI</h2>
    <p>
      Now our AI is ready to be tested.
      For that, we can use the photos we downloaded initially to test our download function.
    </p>
    <CodeBlock
      language="python"
      value={code8}
    />
    <p>
      If we're happy with the result and the accuracy we can deploy the model.
      We do that by simply calling the <code>export</code> function of the learner.
    </p>
    <CodeBlock
      language="python"
      value="learn.export('model.pkl')"
    />
    <p>
      You are now able to load and use the exported model.
      That means you can import it into any python application and use the <code>.predict</code> function.
    </p>
    <CodeBlock
      language="python"
      value={code9}
    />
    <p>
      But there is an even easier way to use your model than to implement your own Python API.
      We can use <ExternalLink href="https://gradio.app/">Gradio</ExternalLink> and <ExternalLink href="https://huggingface.co/spaces">Hugging Face</ExternalLink> to easily create an API and use our model.
      For that, we need to write a function that will tell Gradio how to use our model.
    </p>
    <CodeBlock
      language="python"
      value={code10}
    />
    <p>
      Now we need to install gradio. Then we can already launch it by defining an Interface.
      To this interface, we pass our predict function and the input and output definitions.
      Then we can call the launch function, which will launch an interface to interact with our model.
    </p>
    <CodeBlock
      language="python"
      value="!pip install -Uqq gradio"
    />
    <CodeBlock
      language="python"
      value={code11}
    />

    <p>This will create a UI to easily interact with our model</p>
    <img src="/blog/ai-guide/02-gradio-screenshot.png" alt="screenshot of a gradio UI" />

    <p>
      At the bottom, you can see the text Use via API.<br/>
      If you click that, it will show you how to interact with your AI via API. You can create your own python microservice with Gradio. But the easiest way to host it is by using Hugging Face. So head over there and create an account. After confirming your email you are able to create a "Space".
    </p>
    <p>
      Click on the top right menu and then on "New Space". Enter the name of your project and select Gradio as SDK. Then choose a License and keep the other options as they are. Now you can create the Space.
    </p>
    <img src="/blog/ai-guide/03-hugging-face-screenshot.png" alt="screenshot of a hugging face new space creation" />
    <p>
      Afterward, we need to add our model and our code to the Hugging Face repository. If you are running your notebook locally you should have the exported model in your working directory. If you are on Kaggle, you have to click the small arrow on the bottom right. There you should see a "Data" tab with your exported model.pkl file.
    </p>
    <p>
      Now clone the repository of your Hugging Face Space. Then add the model.pkl file to the repository and create a file <code>app.py</code>. There we add the code we already used above to load the model and create a gradio interface.
    </p>
    <CodeBlock
      language="python"
      value={code12}
    />
    <p>And lastly add a requirements.txt file to provide the libraries needed to run our model.</p>
    <CodeBlock
      value={code13}
    />
    <p>
      Before commit we need to install <ExternalLink href="https://git-lfs.github.com/">git-lfs</ExternalLink> first, because our model.pkl file is too big.
      Follow the link and the instructions to install it for your operating system.<br/>
      Now we are able to use git-lfs for our model.pkl:
    </p>
    <CodeBlock
      value={code14}
    />
    <p>Afterward, we are ready to commit and deploy our model.</p>
    <CodeBlock
      value={code15}
    />
    <p>
      If you head back to your Hugging Face Space, you should see that your application is building. After a while, you should be able to see the same interface as in your jupyter notebook.
    </p>
    <p>
      Congrats! You successfully created and deployed your AI. You are now able to use the API of your Hugging Face Space in your applications.
    </p>
    <h2>Whats's next?</h2>
    <ul>
      <li>First I'd recommend to you to alternate the code in the jupyter notebook. Play around to get a better understanding how this stuff works.</li>
      <li>
        Check the docs of fastai to understand how to:
        <ul>
          <li><ExternalLink href="https://docs.fast.ai/tutorial.text.html">load .csv files and create an AI that analyses text</ExternalLink></li>
          <li><ExternalLink href="https://docs.fast.ai/tutorial.tabular.html">train an AI with tabluar training for categorization</ExternalLink></li>
        </ul>
      </li>
      <li>Let me know how you liked this guide and how I can improve it on <ExternalLink href="twitter.com/wweb_dev">Twitter</ExternalLink> or via Email: <a href="mailto:info@wweb.dev">info@wweb.dev</a></li>
    </ul>
  </ArticleLayout>
)

export default Post
