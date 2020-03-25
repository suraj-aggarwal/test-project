import * as mongoose from 'mongoose';
import IUnsortedObject from './IUnsortedObject';
import { UnsortedObject } from './unsortedObjectsSchema';

const unsortedObject = new UnsortedObject({
    colleciton: 'unsortedObject',
});

export const unsortedObjectModel: mongoose.Model<IUnsortedObject> =
    mongoose.model<IUnsortedObject>('unsortedObject', unsortedObject, 'unsortedObject', true);
