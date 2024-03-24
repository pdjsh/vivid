import { getFormationsMovement } from "@/endpoints";
import MovementsTable from "@/components/movements-table";
import { collections } from "@/constants";

const FormationsMovement = async () => {
  const formationsData = await getFormationsMovement();

  return (
    <div className="flex flex-col">
      <MovementsTable
        data={formationsData}
        collection={collections.formations}
      />
    </div>
  );
};

export default FormationsMovement;
