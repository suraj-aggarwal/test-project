import { sortStatsModel } from './UnsortedModel';
import * as mongoose from 'mongoose';

class UnsortedRepo {
    private sortStat = sortStatsModel;

    generateId = () => {
        return mongoose.Types.ObjectId();
    }

    public create = async (data) => {
        data._id = this.generateId();
        console.log('---------------data', data);
        return this.sortStat.create(data);
    }

    public get = async (objectId: any) => {
        return this.sortStat.find({ objectId });
    }
}

export default UnsortedRepo;