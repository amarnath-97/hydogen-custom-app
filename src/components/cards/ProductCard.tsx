import { Image } from "@shopify/hydrogen";
const ProductCard = ({ product }) => {

    console.log(product.variants.nodes[0].image.url)

  return (
    <div className="product border border-black border-t-transparent border-r-transparent h-[500px]">
      <div className="image__wrapper grid place-items-center w-full h-[85%]">
        <Image data={product.variants.nodes[0].image} alt={`Product Image`} className="w-64 h-[60%] object-contain"/>
      </div>
      <div className="info flex items-center justify-start w-full h-[15%] p-4 border-t border-black">
        <div className="flex justify-between w-full items-center">
          <span>{product.title.substring(0, 25)}...</span>
          <span>₹ {product.variants.nodes[0].priceV2.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
