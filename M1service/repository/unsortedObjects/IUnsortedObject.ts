import * as mongoose from 'mongoose';

interface IUnsortedObjets extends mongoose.Document {
    _id: any;
    object: object;
    rootkeyCount: number;
    depth: number;
    size: number;
    generationTime: number;
}

export default IUnsortedObjets;