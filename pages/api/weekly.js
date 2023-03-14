import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.asl8a.mongodb.net/weekly?retryWrites=true&w=majority`

const connectDb = () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  return client.connect()
}

const getByQuery = async query => {
  let result = []

  try {
    const dbClient = await connectDb()
    const db = dbClient.db('weekly')
    const collection = db.collection('weekly')

    result = await collection.find(query).toArray()
    await dbClient.close()
  } catch (e) {
    console.log('error', e)
  }

  return result
}

async function weeklyRoute(req, res) {
  if (req.method === 'GET' && req.query.id) {
    const result = await getByQuery({ weekly: req.query.id })
    return res.status(200).json(result)
  } else {
    return res.status(404).send()
  }
}

export default weeklyRoute
