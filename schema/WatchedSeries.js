import { Schema, model } from "mongoose";
import "./User";

const watchedSeriesSchema = new Schema(
  {
    series: { type: Number },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default model("WatchedSeries", watchedSeriesSchema, "watchedSeries", {
  overwriteModels: true,
});
