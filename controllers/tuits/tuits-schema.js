
import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  image: String,
  handle: String,
  topic: String,
  userName: String,
  time: String,
  replies: Number,
  retuits: Number
}, {collection: 'tuits'});
export default schema;