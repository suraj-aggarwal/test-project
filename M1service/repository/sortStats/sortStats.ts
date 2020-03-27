import * as mongoose from 'mongoose';
export class SortStats extends mongoose.Schema {
    constructor(options) {
        const Schema = new mongoose.Schema({
            _id: {
                type: Object,
                required: true
            },
            objectId: {
                type: Object,
                required: true,
            },
            sortDuration: {
                type:  Number,
                required: true
            },
            sortAlgorithm: {
                type:  String,
                required: true
            }
        });
        super(Schema, options);
    }
}