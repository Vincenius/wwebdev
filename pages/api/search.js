import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.asl8a.mongodb.net/weekly?retryWrites=true&w=majority`

const connectDb = () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  return client.connect()
}

const getByQuery = async ({ q, p }) => {
  let result = []

  try {
    const dbClient = await connectDb()
    const db = dbClient.db('weekly')
    const collection = db.collection('weekly')
    const search = q
    const page = p ? parseInt(p) : 1

    const query = [
      search && {
        $search: {
          "text": {
            "query": search,
            "path": ["description", "title"]
          }
        }
      },
      {
        $limit: page * 20
      },
      {
        $skip: (page - 1) * 20
      }
    ].filter(Boolean)
    // https://docs.atlas.mongodb.com/reference/atlas-search/tutorial/#std-label-fts-tutorial-ref
    result = await collection.aggregate(query).toArray()
    await dbClient.close()
  } catch (e) {
    console.log('error', e)
  }

  return result
}

async function searchRoute(req, res) {
  if (req.method === 'GET') {
    const result = await getByQuery(req.query)
    return res.status(200).json(result)
  } else {
    return res.status(404).send()
  }
}

export default searchRoute
