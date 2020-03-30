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

    public get = async (objectId: any) => {
        return this.unsortedModel.find({ objectId });
    }
}

export default UnsortedRepo;