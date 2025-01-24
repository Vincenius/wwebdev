import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.asl8a.mongodb.net/weekly?retryWrites=true&w=majority`

const connectDb = () => {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
  return client.connect()
}

export const getByQuery = async ({ query, limit = 48, page = 0 }) => {
  let result = []
  const dbClient = await connectDb()

  try {
    const db = dbClient.db('weekly')
    const collection = db.collection('weekly')

    result = await collection
      .find(query)
      .sort({ created_at: -1 })
      .limit(limit)
      .skip(limit * page)
      .toArray()
  } catch (e) {
    console.log('error', e)
  }

  await dbClient.close()

  return result
}

export const getByAggregation = async ({ aggregation, limit = 48, page = 0 }) => {
  let result = []
  const dbClient = await connectDb()

  try {
    const db = dbClient.db('weekly')
    const collection = db.collection('weekly')

    result = await collection
      .aggregate(aggregation)
      .toArray()
  } catch (e) {
    console.log('error', e)
  }

  await dbClient.close()

  return result
}

export const getCount = async (additionalQuery = {}) => {
  let result = 0
  const dbClient = await connectDb()

  try {
    const db = dbClient.db('weekly')
    const collection = db.collection('weekly')

    const today = new Date();
    const query = {
      sponsored: { $ne: true },
      created_at: {
        $lte: today.toISOString(),
      },
      ...additionalQuery,
    };
    result = await collection.countDocuments(query)
  } catch (e) {
    console.log('error', e)
  }

  await dbClient.close()

  return result
}

const getElements = async () => {
  let result = []

  try {
    const today = new Date();
    const query = {
      created_at: {
        $lte: today.toISOString(),
      },
    };
    const latest = await getByQuery({ query, limit: 6 })

    const aggregation = [
      {
        $match: {
          created_at: {
            $lte: today.toISOString(),
          },
          _id: {
            $nin: latest.map(item => item._id),
          }
        }
      },
      {
        $sort: { created_at: -1 }
      },
      {
        $unwind: "$tags"
      },
      {
        $group: {
          _id: "$tags",
          elements: { $push: "$$ROOT" }
        }
      },
      {
        $project: {
          _id: 0,
          tag: "$_id",
          elements: {
            $slice: ["$elements", 6]  // Get the first three elements for each tag
          }
        }
      },
    ]

    const [data, count] = await Promise.all([
      getByAggregation({ aggregation }),
      getCount(),
    ])

    const elemResult = [
      {
        tag: 'Latest',
        elements: latest,
      },
      ...data,
    ]

    result = { data: elemResult, count }
  } catch (e) {
    console.log('error', e)
  }

  return result
}

async function getData(tag) {
  const today = new Date();

  const query = {
    created_at: {
      $lte: today.toISOString(),
    },
    sponsored: { $ne: true },
    ...(tag && { tags: tag })
  };

  const [data, count] = await Promise.all([
    getByQuery({ query, limit: Infinity }), // page
    getCount({ tags: tag }),
  ])

  return { data, count }
}

const mapTag = {
  "latest": null,
  "javascript": "JavaScript",
  "css": "CSS",
  "tool": "Tools",
  "react": "React",
  "article": "Articles",
  "design": "Design",
  "library": "Libraries",
  "other": "Other"
}

async function libraryRoute(req, res) {
  if (req.method === 'GET') {
    const { tag } = req.query || null
    let result = []

    if (!tag) {
      result = await getElements()
    } else {
      result = await getData(mapTag[tag])
    }
    
    return res.status(200).json(result)
  } else {
    return res.status(404).send()
  }
}

export default libraryRoute
