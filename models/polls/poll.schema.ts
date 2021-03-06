import { Document, Schema, Types } from 'mongoose';

export interface ImageDataSchema {
  url: string;
}

export interface PollSchema extends Document {
  contents: {
    left: ImageDataSchema;
    right: ImageDataSchema;
  };
  createdAt: Date;
  authorId: string;
  description: string;
  vote: (userId: string, which: 'left' | 'right') => PollSchema;
}

export const imageDataSchema = {
  url: String
};

export const pollSchema = new Schema({
  contents: {
    left: imageDataSchema,
    right: imageDataSchema
  },
  authorId: {
    type: Types.ObjectId,
    ref: 'User'
  },
  description: String
}, { timestamps: true });

