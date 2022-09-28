import { Schema } from 'dynamoose';

export const SymbolSchema = new Schema(
    {
        id: {
            type: String,
            hashKey: true
        },
        symbol: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        language: {
            type: String,
            required: true
        },
        types: {
            type: Array,
            required: true,
            default: []
        },
        translations: {
            type: Object,
            required: true,
            default: {
                pt_br: [],
                es: [],
                ja: [],
                kr: [],
                fr: [],
                it: [],
                de: []
            }
        },
        active: {
            type: Boolean,
            required: true,
            default: true
        },
        deletedAt: {
            type: Date
        }
    },
    { timestamps: true }
);
