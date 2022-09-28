import { Schema } from 'dynamoose';

export const SymbolSchema = new Schema({
    id: {
        type: String,
        hashKey: true
    },
    symbol: {
        type: String
    },
    description: {
        type: String
    },
    language: {
        type: String
    },
    types: {
        type: Array
    },
    translations: {
        type: Object
    },
    createdAt: {
        type: String
    },
    updatedAt: {
        type: String
    },
    active: {
        type: Boolean
    },
    deletedAt: {
        type: String
    }
});
