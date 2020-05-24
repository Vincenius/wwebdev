import React from 'react'
import { SubscribeForm, Layout, LinkBox, RelatedArticle } from '../../components'
import meta from '../../content/resources'
import * as ui from '../../ui'

const postId = 2
const postMeta = meta.find(m => m.id === postId)

const Post = () => (
    <Layout
        isArticle={true}
        title={postMeta.headline}
        date={postMeta.date}
        updatedAt={postMeta.updatedAt}
        link={`https://wweb.dev${postMeta.link}`}
        description={postMeta.description}
        image={postMeta.previewImage}
    >
        <ui.GridContainer>
            <LinkBox
                title="unDraw Illustrations"
                description="An open-source illustrations website, where you can change the colors of the illustrations online before downloading."
                link="https://undraw.co/illustrations"
                image="/resources/free-svg-illustrations/undraw.jpg"
            />

            <LinkBox
                image="/resources/free-svg-illustrations/manypixels.jpg"
                title="ManyPixels"
                link="https://www.manypixels.co/gallery/"
                description="ManyPixels offer free svg illustrations with the possibility to customize the color as well."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/illlustrations.jpg"
                title="illlustrations"
                link="https://illlustrations.co/"
                description="100 beautiful illustrations, designed by Vijay Verma during a 100 days of illustrations challenge."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/isometric.jpg"
                title="Isometric"
                link="https://isometric.online/"
                description="This website offers a searchable list of nice and free isometric illustrations."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/glaze.jpg"
                title="Glaze"
                link="https://www.glazestock.com/"
                description="Glaze offers a lot of royalty-free high quality illustrations."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/lukaszadam.jpg"
                title="Lukasz Adam"
                link="https://lukaszadam.com/illustrations"
                description="Lukasz Adam is an independent web designer and offers a lot of free svg icon sets on his website."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/blush.jpg"
                title="Blush"
                link="https://blush.design/"
                description="A website to create, mix, and customize illustrations made by artists around the world."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/delesign.jpg"
                title="Delesign"
                link="https://delesign.com/free-designs/graphics"
                description="Royalty-free illustrations, which are customizable by color."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/openpeeps.png"
                title="Open Peeps"
                link="https://www.openpeeps.com/"
                description="A hand-drawn illustration library made of building blocks to create your own illustrations."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/pixeltrue.jpg"
                title="Pixeltrue"
                link="https://www.pixeltrue.com/free-illustrations"
                description="A bunch of cool vector illustrations & animations under the MIT License."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/blackillustrations.png"
                title="Black Illustrations"
                link="https://www.blackillustrations.com/"
                description="A website that focuses on illustrations of black people."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/humaaans.jpg"
                title="Humaaans"
                link="https://www.humaaans.com"
                description="Humaaans have a variety of different svgs of people. They also offer each element of the humans separately to be able to create your own."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/woobro.jpg"
                title="Woobro"
                link="https://woobro.design/"
                description="Woobro has some very detailed high-quality svgs for some specific use cases."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/ouch.png"
                title="Ouch!"
                link="https://icons8.com/ouch"
                description="25 packs of illustrations in various styles, which are free with a credit link."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/freshfolk.jpg"
                title="Fresh Folk"
                link="https://fresh-folk.com/"
                description="Similar to Humaaans, Fresh Folk offers people for self composing with a different style."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/opendoodles.jpg"
                title="Open Doodles"
                link="https://www.opendoodles.com/"
                description="Open Doodles provide a bunch of illustrations in a sketchy style."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/getillustrations.jpg"
                title="Getillustrations"
                link="https://getillustrations.com/illustration-packs/freebie"
                description="Free packs of high quality Royalty free vector illustrations."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/uistore.jpg"
                title="UI Store Design"
                link="https://www.uistore.design/categories/illustrations/"
                description="43 illustrations resources, which are accumulated from different websites."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/ira-design.png"
                title="IRA Design"
                link="https://iradesign.io/"
                description="A lot of cool illustrations with customizable gradients for the separate parts of the illustration."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/personas.png"
                title="Personas"
                link="https://personas.draftbit.com/"
                description="A generator for playful avatars, which is also open source."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/flaticon.jpg"
                title="Flaticon"
                link="https://www.flaticon.com/"
                description="A huge database of vector icons and illustrations."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/drawkit.png"
                title="DrawKit"
                link="https://www.drawkit.io/"
                description="MIT-licensed, hand-drawn vector illustrations for free usage."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/mega-doodles-pack.png"
                title="Mega Doodles Pack"
                link="https://github.com/MariaLetta/mega-doodles-pack"
                description="A collection of over 160 hand-drawn doodle elemens as vector illustrations."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/flaticon.jpg"
                title="Scribbbles"
                link="https://www.scribbbles.design/"
                description="100+ vectorized scribbbles, which can be added to existing images and illustrations."
            />

            <LinkBox
                image="/resources/free-svg-illustrations/karthik-srinivas.png"
                title="Karthik Srinivas"
                link="https://www.karthiksrinivas.in/illustrations"
                description='Multiple sets of illustrations for common use cases like emty and success states.'
            />

            <LinkBox
                image="/resources/free-svg-illustrations/smashillustrations.png"
                title="Smash Illustrations"
                link="https://usesmash.com/"
                description='An illustration constructor with colorful and trendy characters.'
            />

            <LinkBox
                image="/resources/free-svg-illustrations/avataaars.png"
                title="Avataaars Generator"
                link="https://getavataaars.com/"
                description='Another generator for svg avatars in a different style.'
            />

            <LinkBox
                image="/resources/free-svg-illustrations/creative-veila.png"
                title="Scandinavian Houses"
                link="https://www.veila.me/freebies/scandinavian-houses-free-vector-images"
                description='A vector set 30 building illustrations inspired by the scandinavian architecture.'
            />

            <LinkBox
                image="/resources/free-svg-illustrations/joe-schmoe.png"
                title="Joe Schmoe"
                link="https://joeschmoe.io/"
                description='Generate an illustrated avatar based on a string. Great for profile picture placeholders.'
            />

            <SubscribeForm />

        </ui.GridContainer>

        <RelatedArticle id={4} type="resource" />
    </Layout>
)

export default Post
