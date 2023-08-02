// import { MongoClient, ServerApiVersion } from 'mongodb'
// import { weeklyData } from '../../content/weekly'

// const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.asl8a.mongodb.net/weekly?retryWrites=true&w=majority`

// const connectDb = () => {
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
//   return client.connect()
// }

// const getByQuery = async query => {
//   let result = []

//   try {
//     const dbClient = await connectDb()
//     const db = dbClient.db('weekly')
//     const collection = db.collection('weekly')

//     result = await collection.find(query).toArray()
//     await dbClient.close()
//   } catch (e) {
//     console.log('error', e)
//   }

//   return result
// }

// function addDays(date, days) {
//   const newDate = new Date(date);
//   newDate.setDate(newDate.getDate() + days);
//   return newDate;
// }


// async function weeklyRoute(req, res) {
//   const dbClient = await connectDb()
//   const db = dbClient.db('weekly')
//   const collection = db.collection('weekly')

//   for (let i = 0; i < weeklyData.length; i++) {
//     const filter = { weekly: weeklyData[i].id };

//     const weeklies = await collection.find(filter).toArray()

//     for (let y = 0; y < weeklies.length; y++) {
//       const createdAt = new Date(weeklyData[i].date)
//       const randomMilliseconds = Math.floor(Math.random() * 1000);

//       // Set the random milliseconds to the Date object
//       createdAt.setMilliseconds(randomMilliseconds);
//       const randomDay = Math.floor(Math.random() * 7);
//       const newDate = addDays(createdAt, randomDay);

//       const updateDoc = {
//         $set: {
//           created_at: newDate.toISOString()
//         },
//       };

//       console.log(`update ${y}/${weeklies.length} of ${i} to ${newDate.toISOString()}`)

//       const result = await collection.updateOne({ _id: weeklies[y]._id}, updateDoc);
//     }
//   }

//   await dbClient.close()

//   res.json({ })
// }

// export default weeklyRoute
