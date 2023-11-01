import { VehicleType } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/vehicleTypes`;

const getVehicleTypes = async (): Promise<VehicleType[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getVehicleTypes;