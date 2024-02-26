import mongoose, { Mongoose } from "mongoose";


const InitDatabaseConnection = (): Promise<Mongoose> => {
    return new Promise(async (resolve, reject) => {
        try {
            if(!process.env.MONGO_URL) throw new Error(`MONGO_URL environment variable is missing`);
            const mongo_url: string = process.env.MONGO_URL;
            const connection: Mongoose = await mongoose.connect(mongo_url);
            resolve(connection);
        } catch (error) {
            reject(error);
        }
    });
}

export default InitDatabaseConnection;
