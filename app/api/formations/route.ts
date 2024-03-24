import { OpenSeaURL, collectionEndpoints } from "@/constants";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const cursor = searchParams.get("cursor");
  let queryParams = "event_type=sale&event_type=transfer";
  if (cursor) queryParams += `&next=${cursor}`;
  const res = await fetch(
    `${OpenSeaURL}/events/collection/${collectionEndpoints.formations}?${queryParams}`,
    {
      headers: {
        Accept: "application/json",
        "x-api-key": process.env.OPENSEA_API_KEY!,
      },
    },
  );
  const data = await res.json();
  return Response.json(data);
};
