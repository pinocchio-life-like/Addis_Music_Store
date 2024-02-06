import mongoose from "mongoose";
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
  },
  genre: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  length: {
    type: Number, // Length of the song in seconds
  },
  coverImage: {
    type: String, // URL of the cover image
  },
  audioFile: {
    type: String, // URL of the audio file
    required: true,
  },
});

export default mongoose.model("Music", musicSchema);
