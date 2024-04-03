import { Schema, model, Document } from 'mongoose';

export interface Word extends Document {
  title: string;
  word: string;
  description?: string;
  synonyms?: string[];
  antonyms?: string[];
  image?: string;
}

// Define the Mongoose schema
const wordSchema = new Schema<Word>(
  {
    word: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },
    synonyms: {
      type: [String],
      default: [],
    },
    antonyms: {
      type: [String],
      default: [],
    },
    image: {type: String, default: ""},
  },
  {
    timestamps: true,
    autoCreate: true,
    strict: true,
  }
);

// Create the Word model
export const WordModel = model<Word>('words', wordSchema);
