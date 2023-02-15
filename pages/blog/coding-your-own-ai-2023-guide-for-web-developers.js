import React from 'react'
import ArticleLayout from '../../components/ArticleLayout'

const ExternalLink = ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>

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
      You can run the code directly in your browser by pressing the "Run" button in the top navigation.
      It will give you the output of your code underneath the code cell.
    </p>

    <img src="/blog/ai-guide/01-jupyter-screenshot.png" alt="screenshot of a demo notebook" />

    <p>
      Now let's jump right into the code. The rest of this guide will also be available in
      this Kaggle notebook: <br/>

      <ExternalLink href="hhttps://www.kaggle.com/vincentwill/fastai-tutorial">https://www.kaggle.com/vincentwill/fastai-tutorial</ExternalLink>
    </p>

    <p>
      On Kaggle, for the code to work you must activate the "Internet" switch in the sidebar menu first.
      This is only available if you've verified your phone number.
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
  </ArticleLayout>
)

export default Post
