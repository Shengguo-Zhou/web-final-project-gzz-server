import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
    {
      username: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      firstName: String,
      lastName: String,
      email: { type: String, unique: true },
      age: Number,
      phone: Number,
      role: { type: String, default: "BRONZE", enum: ["BRONZE", "SILVER", "GOLD", "ADMIN"] },
      avatar: {type: String, default: "doge.jpg"}
    },
    {
      collection: "users",
    }
);
export default usersSchema;