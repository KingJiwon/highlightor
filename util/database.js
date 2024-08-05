/* eslint-disable no-underscore-dangle */
import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI;
const options = { useNewUrlParser: true };
// eslint-disable-next-line import/no-mutable-exports
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
// eslint-disable-next-line import/prefer-default-export
export { connectDB };
