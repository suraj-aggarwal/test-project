import * as mongoose from 'mongoose';
export class UnsortedObject extends mongoose.Schema {
    constructor(options) {
        const Schema = new mongoose.Schema({
            _id: {
                type: Object,
                required: true
            },
            object: {
                type: Object,
                required: true,
            },
            rootkeyCount: {
                type:  Number,
                required: true
            },
            depth: {
                type:  Number,
                required: true
            },
            size: {
                type: Number,
                required: true,
            },
        });
        super(Schema, options);
    }
}