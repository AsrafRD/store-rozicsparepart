import { VehicleBrand } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/vehicleBrands`;

const getVehicleBrands = async (): Promise<VehicleBrand[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getVehicleBrands;