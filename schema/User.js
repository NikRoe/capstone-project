import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    email: { type: String },
    watchedEpisodes: [],
    watchedSeries: [],
  },
  { timestamps: true }
);

export default model("User", userSchema, "users", { overwriteModels: true });
