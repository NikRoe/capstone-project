import { getSession } from "next-auth/react";
import { connectDb } from "../../../lib/db";
import User from "../../../schema/User";

export default async function handler(request, response) {
  try {
    connectDb();

    const session = await getSession({ req: request });

    switch (request.method) {
      case "PATCH":
        const updatedSeries = await User.updateOne({
          $push: { watchedSeries: request.body },
        }).where({ userId: session.user.id });

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
        const deletedSeries = await User.updateOne({
          $pull: { watchedSeries: request.body },
        }).where({ userId: session.user.id });

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
