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
        console.log('rootKeyCount', typeof data.rootkeyCount);
        return this.unsortedModel.create(data);
    }

    public get = async (_id: any): Promise<mongoose.Document> => {
        const id = mongoose.Types.ObjectId(_id);
        const result = await this.unsortedModel.findOne({_id: id});
        return result;
    }
}

export default UnsortedRepo;