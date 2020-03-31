import * as mongoose from 'mongoose';

interface ISortStats extends mongoose.Document {
    _id: any;
    objectId: any;
    sortDuration: number;
    sortAlgorithm: string;
}

export default ISortStats;