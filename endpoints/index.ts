import { OpenSeaURL, collectionEndpoints } from "@/constants";
import { MovementResponse } from "@/types";

export const getPolMovement = async (): Promise<MovementResponse> => {
  const res = await fetch(
    `${OpenSeaURL}/events/collection/${collectionEndpoints.pol}?event_type=sale&event_type=transfer`,
    {
      headers: {
        Accept: "application/json",
        "x-api-key": process.env.OPENSEA_API_KEY!,
      },
      next: {
        revalidate: 60,
      },
    },
  );
  return res.json();
};

export const getBlocksMovement = async (): Promise<MovementResponse> => {
  const res = await fetch(
    `${OpenSeaURL}/events/collection/${collectionEndpoints.blocks}?event_type=sale&event_type=transfer`,
    {
      headers: {
        Accept: "application/json",
        "x-api-key": process.env.OPENSEA_API_KEY!,
      },
      next: {
        revalidate: 60,
      },
    },
  );
  return res.json();
};

export const getFormationsMovement = async (): Promise<MovementResponse> => {
  const res = await fetch(
    `${OpenSeaURL}/events/collection/${collectionEndpoints.formations}?event_type=sale&event_type=transfer`,
    {
      headers: {
        Accept: "application/json",
        "x-api-key": process.env.OPENSEA_API_KEY!,
      },
      next: {
        revalidate: 60,
      },
    },
  );
  return res.json();
};
