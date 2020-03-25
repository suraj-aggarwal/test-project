import * as mongoose from 'mongoose';

class Database {

    static open = (uri: string) => new Promise<string>((resolve, reject) => {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                return reject('database connnection failed');
            }
            return resolve('connection is successfull');
        });
    });

    static disconnect = () => {
        mongoose.disconnect();
    }
}

export default Database;