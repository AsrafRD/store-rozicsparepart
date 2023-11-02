import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  if (!data || data.label == null) {
    return null;
  }
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-none overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-[2.5/1] md:aspect-[2.4/1] overflow-hidden bg-cover shadow-6xl">
        <div className="h-full w-70px flex flex-col text-left ml-4 mt-4">
          <div className="font-bold text-white text-md md:text-4xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div> 
   );
};

export default Billboard;