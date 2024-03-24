import { getPolMovement } from "@/endpoints";
import MovementsTable from "@/components/movements-table";
import { collections } from "@/constants";

const PolMovement = async () => {
  const polData = await getPolMovement();

  return (
    <div className="flex flex-col">
      <MovementsTable data={polData} collection={collections.pol} />
    </div>
  );
};

export default PolMovement;
