import MovementsTable from "@/components/movements-table";
import { collections } from "@/constants";
import { getBlocksMovement } from "@/endpoints";

const BlocksMovement = async () => {
  const blocksData = await getBlocksMovement();

  return (
    <div className="flex flex-col">
      <MovementsTable data={blocksData} collection={collections.blocks} />
    </div>
  );
};

export default BlocksMovement;
