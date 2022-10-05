import { Schema } from 'dynamoose';

export const GramaticTypeSchema = new Schema(
    {
        name: {
            type: String,
            hashKey: true,
            required: true
        },
        root: {
            type: String,
            default: '',
            required: true
        },
        description: {
            type: String
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
