import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const mongod = new MongoMemoryServer();

export const connect = async () => {
  const uri = await mongod.getConnectionString();

  const mongooseOpts = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
  };

  await mongoose.connect(uri, mongooseOpts);
};

/**
 * Drop database, close the connection and stop mongod.
 */
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

/**
 * Remove all the data for all db collections.
 */
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    // @ts-ignore
    await collection.deleteMany();
  }
};

export const setupDatabase = () => {
  beforeAll(async () => await connect());
  afterEach(async () => await clearDatabase());
  afterAll(async () => await closeDatabase());
};
