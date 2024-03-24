"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  capitalize,
  shortFormatAddress,
  shortFormatTransaction,
} from "@/helpers";
import { MovementResponse, SaleEvent, TransferEvent } from "@/types";
import { formatDistanceToNow, fromUnixTime } from "date-fns";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { formatEther } from "viem";
import { Button } from "./ui/button";

interface Props {
  data: MovementResponse;
  collection: string;
}

const MovementsTable = ({ data, collection }: Props) => {
  const { asset_events: initialData, next: initialCursor } = data;
  const [tableData, setTableData] = useState(initialData);
  const [cursor, setCursor] = useState<string>(initialCursor);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  const loadData = useCallback(async () => {
    if (!cursor) return;
    setLoading(true);
    const response = await fetch(`/api/${collection}?cursor=${cursor}`);
    const result = await response.json();
    const { asset_events, next } = result;
    setCursor(next);
    setTableData((prev) => [...prev, ...asset_events]);
    setLoading(false);
  }, [collection, cursor]);

  useEffect(() => {
    const target = observerTarget.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadData();
        }
      },
      { threshold: 1 },
    );

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [observerTarget, loadData, loading]);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Type</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Seller</TableHead>
            <TableHead className="text-center">Buyer</TableHead>
            <TableHead className="text-center">Transaction</TableHead>
            <TableHead className="text-center">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((event: SaleEvent | TransferEvent) => (
            <TableRow
              key={
                event.nft.identifier + event.event_type + event.event_timestamp
              }
              className=""
            >
              <TableCell className="w-[130px]">
                <Image
                  src={event.nft.image_url}
                  alt={event.nft.description}
                  width={100}
                  height={100}
                />
              </TableCell>
              <TableCell className="text-center">{event.nft.name}</TableCell>
              <TableCell className="text-center">
                {capitalize(event.event_type)}
              </TableCell>
              <TableCell className="text-center">
                {"payment" in event
                  ? `${formatEther(BigInt(event.payment.quantity))} ${
                      event.payment.symbol
                    }`
                  : " "}
              </TableCell>
              <TableCell className="text-center">
                {"payment" in event
                  ? shortFormatAddress(event.seller)
                  : shortFormatAddress(event.from_address)}
              </TableCell>
              <TableCell className="text-center">
                {"payment" in event
                  ? shortFormatAddress(event.buyer)
                  : shortFormatAddress(event.to_address)}
              </TableCell>
              <TableCell className="text-center">
                <a
                  href={`https://etherscan.io/tx/${event.transaction}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  {shortFormatTransaction(event.transaction)}
                </a>
              </TableCell>
              <TableCell className="text-center">
                {formatDistanceToNow(fromUnixTime(event.event_timestamp))} ago
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {loading && <div className="flex justify-center py-4">Loading...</div>}
      <div ref={observerTarget}></div>
    </>
  );
};

export default MovementsTable;
