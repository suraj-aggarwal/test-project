import * as mongoose from 'mongoose';
import ISortStats from './ISortStats';
import { SortStats } from './sortStats';

const sortStats = new SortStats({
    colleciton: 'sortStats',
});

export const unsortedObjectModel: mongoose.Model<ISortStats> =
    mongoose.model<ISortStats>('sortStats', sortStats, 'sortStats', true);
