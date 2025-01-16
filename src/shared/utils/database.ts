import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URL;

if (!url) {
  throw new Error('The MONGODB_URL environment variable is not defined');
}
let connectDB: Promise<MongoClient>;
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}

// global에 타입 정의를 추가하여 에러를 해결
declare global {
  // global 객체에 _mongo 프로퍼티가 있는지 확인
  var _mongo: Promise<MongoClient> | undefined;
}

export { connectDB };
