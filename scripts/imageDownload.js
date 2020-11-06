const https = require('https');
const fs = require('fs');
const FileType = require('file-type');
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

const { weeklyData } = require("../content/weekly")


const getImagesAndUpdate = async () => {
    for (const item of weeklyData) {
        const id = item.id
        const data = JSON.parse(fs.readFileSync(`../public/weekly/data/${id}.json`, 'utf8'))

        if (!fs.existsSync(`./weekly/${id}`)){
            fs.mkdirSync(`./weekly/${id}`);
        }

        for (const weeklyItem of data.items) {
            if (!weeklyItem.image.startsWith('https://wwebdev-images.s3.')) {
                const imageLink = weeklyItem.image.startsWith('/weekly/')
                    ? `https://wweb.dev${weeklyItem.image}`
                    : weeklyItem.image

                try {
                    // DOWNLOAD
                    https.get(imageLink, async (response) => {
                        const type = await FileType.fromStream(response)
                            || weeklyItem.image.endsWith('.png') && { ext: 'png '}
                            || weeklyItem.image.endsWith('.jpg') && { ext: 'jpg '}

                        if (!type) {
                            console.log('MANUAL:', id, weeklyItem.title, weeklyItem.image)
                        } else {
                            const filename = weeklyItem.title.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").join("-").toLowerCase()
                            + `.${type.ext}`

                            if (fs.existsSync(`./weekly/${id}/${filename}`)) {
                                // console.log('EXISTS')
                            } else {
                                console.log('!!!!')
                                // do something
                                const path = Path.resolve(__dirname, `weekly/${id}`, filename)
                                const writer = fs.createWriteStream(path)

                                try {
                                    const response = await Axios({
                                        url: imageLink,
                                        method: 'GET',
                                        responseType: 'stream'
                                    })

                                    response.data.pipe(writer)
                                } catch (e) {
                                    console.log('eee', e.message)
                                }
                            }


                            // const filename = weeklyItem.title.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").join("-").toLowerCase()
                            //     + `.${type.ext}`
                            // const file = await fs.createWriteStream(`./weekly/${id}/${filename}`);
                            // // weeklyItem.image = `https://wwebdev-images.s3.eu-central-1.amazonaws.com/content/weekly/${id}/${filename}`
                            // response.pipe(file);

                            // UPDATE JSON
                            // const jsonData = JSON.stringify(data)
                            // fs.writeFileSync(`../public/weekly/data/${id}.json`, jsonData);
                        }
                    }).on('error', (e) => {
                        console.error('E2', e, imageLink);
                    });;
                    // DOWNLOAD
                } catch(e) {
                    console.log('ERROR:', e)
                }
            }
        }
    }
}

getImagesAndUpdate()
