import { Schema } from 'dynamoose';

export const LanguageSchema = new Schema(
    {
        reference: {
            type: String,
            hashKey: true,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        placesId: {
            type: Number,
            required: true
        },
        root: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true,
            default: true
        },
        deletedAt: {
            type: String,
            default: ''
        }
    },
    { timestamps: true, saveUnknown: true }
);
