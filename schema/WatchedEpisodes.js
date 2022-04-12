import { Schema, model } from "mongoose";
import "./User";

const watchedEpisodesSchema = new Schema(
  {
    episodes: [Number],
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default model(
  "WatchedEpisode",
  watchedEpisodesSchema,
  "watchedEpisodes",
  { overwriteModels: true }
);
