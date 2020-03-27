import { unsortedObjectModel } from './UnsortedModel';
import * as mongoose from 'mongoose';

class UnsortedRepo {
    private unsortedModel = unsortedObjectModel;

    generateId = () => {
        return mongoose.Types.ObjectId();
    }

    public create = async (data) => {
        data._id = this.generateId();
        console.log('---------------data', data);
        return this.unsortedModel.create(data);
    }

    public get = async(_id: any) => {
        return this.unsortedModel.findOne({ _id });
    }
}

export default UnsortedRepo;