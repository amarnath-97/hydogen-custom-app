import { Image } from "@shopify/hydrogen";
import CartDetails from "../CartDetails.client";

interface CollectionType {
  collection: {
    image: { url: string };
    title: string;
  };
}

const CollectionCard = ({ collection }: CollectionType) => {
  return (
    <div className="collection flex justify-between items-center flex-col border border-black border-t-transparent border-l-transparent lg:h-96 md:h-72 pt-3">
      <div className="col__img__wrapper w-full h-[240px] flex items-center justify-center">
        <Image
          data={collection.image}
          className="w-full h-full object-contain"
          alt={`image of ${collection.title}`}
        />
      </div>

      <div className=" w-full info flex justify-center items-center border border-black h-11 border-l-transparent border-b-transparent border-r-transparent">
        <span>{collection.title}</span>
      </div>
    </div>
  );
};

export default CollectionCard;
