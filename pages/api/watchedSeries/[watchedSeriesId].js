import { getSession } from "next-auth/react";
import WatchedSeries from "../../../schema/WatchedSeries";
import { connectDb } from "../../../lib/db";

export default async function handler(request, response) {
  const { watchedSeriesId } = request.query;
  console.log(watchedSeriesId);

  try {
    connectDb();

    const session = await getSession({ req: request });

    switch (request.method) {
      case "PATCH":
        // patch the correct joke
        const updatedSeries = await WatchedSeries.findByIdAndUpdate(
          watchedSeriesId,
          {
            $push: request.body,
          },
          { returnDocument: "after", runValidators: true }
        ).where({ userId: session.user.id });

        if (updatedSeries) {
          response.status(200).json({
            success: true,
            data: updatedSeries,
          });
        } else {
          response.status(404).json({ error: "Not found" });
        }

        break;

      case "DELETE":
        const deletedSeries = await WatchedSeries.deleteMany({
          userId: session.user.id,
          series: watchedSeriesId,
        });

        if (deletedSeries) {
          response.status(200).json({
            success: true,
            data: deletedSeries,
          });
        } else {
          response.status(404).json({ error: "Not found" });
        }
        break;

      default:
        console.log("request method was neither PATCH or DELETE");
        response.status(405).json({ error: "Method not allowed" });
        break;
    }
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
}
