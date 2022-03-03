// import { MongoClient } from 'mongodb';

// const MONGODB_URI = process.env.DB_URL;
// const MONGODB_DB = process.env.DB_NAME;

// // check the MongoDB URI
// if (!MONGODB_URI) {
//     throw new Error('Define the MONGODB_URI environmental variable');
// }

// // check the MongoDB DB
// if (!MONGODB_DB) {
//     throw new Error('Define the MONGODB_DB environmental variable');
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//     // check the cached.
//     if (cachedClient && cachedDb) {
//         // load from cache
//         return {
//             client: cachedClient,
//             db: cachedDb,
//         };
//     }

//     // set the connection options
//     const opts = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     };

//     // Connect to cluster
//     let client = new MongoClient(MONGODB_URI, opts);
//     await client.connect();
//     console.log(client)
//     let db = client.db(MONGODB_DB);

//     // set cache
//     cachedClient = client;
//     cachedDb = db;

//     return {
//         client: cachedClient,
//         db: cachedDb,
//     };
// }


import { MongoClient } from "mongodb";


if (!process.env.DB_URL) {
	throw new Error(
		"Please define the process.env.DB_URL environment variable inside .env.local"
	)
}
  
if (!process.env.DB_NAME) {
	throw new Error(
		"Please define the process.env.DB_NAME environment variable inside .env.local"
	)
}
		
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
cached = global.mongo = { conn: null, promise: null }
}
  
export async function connectToDatabase() {
	if (cached.conn) {
		return cached.conn
	}
  
	if (!cached.promise) {
		const opts = {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
		cached.promise = MongoClient.connect(process.env.DB_URL, opts).then(client => {
			return {
				client,
				db: client.db(process.env.DB_NAME),
			}
		})
	}
	cached.conn = await cached.promise
	return cached.conn
}