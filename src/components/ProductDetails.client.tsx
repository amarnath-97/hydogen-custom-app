import {
  AddToCartButton,
  Image,
  ProductOptionsProvider,
  ProductPrice,
  useProductOptions,
} from "@shopify/hydrogen";

const ProductDetails = ({ product }) => {
  return (
    <ProductOptionsProvider data={product}>
        <div className="details w-full flex h-[95vh] ">
          <div className="images border border-black border-t-transparent h-full w-[50%] overflow-x-auto scrollbar-hide ">
            {product?.media?.nodes?.map((variant) => (
              <div className="image__wrapper w-full h-full">
                <Image
                  data={variant?.image}
                  alt={`Product Image`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="name__desc w-[50%] flex flex-col border-b border-black">
            <div className="name p-5 text-xl">
              <span>{product.title}</span>
              <span className="text-sm text-gray-500 block mt-2">
                Vendor: {product.vendor}
              </span>
            </div>

            <div className="description border-t border-black flex flex-col h-full">
              <div className="desc h-[50%] p-5">
                <div
                  className="prose sm:text-sm lg:text-lg h-[45%] overflow-x-auto scrollbar-hide"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                ></div>
              </div>
              <ProductForm product={product} />
              {/* <button className="add__to__cart bg-black w-full text-white uppercase h-[10%]">
                add to cart
              </button> */}
            </div>
          </div>
        </div>
    </ProductOptionsProvider>
  );
};

function ProductForm({ product }: { product: {} }) {
  const { options, selectedVariant } = useProductOptions();

  return (
    <form className="grid h-[40%]">
      {
        <div className="grid gap-4 p-5">
          {options?.map(({ name, values }) => {
            if (values.length === 1) {
              return null;
            }
            return (
              <div
                key={name}
                className="flex flex-wrap items-baseline justify-start gap-6"
              >
                <legend className="whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]">
                  {name}
                </legend>
                <div className="flex flex-wrap items-baseline gap-4">
                  <OptionRadio name={name} values={values} />
                </div>
              </div>
            );
          })}
        </div>
      }
      <div>
        <div className="p-5">
          <ProductPrice
            className="text-gray-500 line-through text-lg font-semibold"
            priceType="compareAt"
            variantId={selectedVariant?.id}
            data={product}
          />
          <ProductPrice
            className="text-gray-900 text-lg font-semibold"
            variantId={selectedVariant?.id}
            data={product}
          />
        </div>
      </div>
      <div className="flex items-center w-full">
        <PurchaseMarkup />
      </div>
    </form>
  );
}

function OptionRadio({ values, name }: any) {
  const { selectedOptions, setSelectedOption } = useProductOptions();

  return (
    <>
      {values.map((value: any) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;

        return (
          <label key={id} htmlFor={id}>
            <input
              className="sr-only"
              type="radio"
              id={id}
              name={`option[${name}]`}
              value={value}
              checked={checked}
              onChange={() => setSelectedOption(name, value)}
            />
            <div
              className={`leading-none border-b-[2px] py-1 cursor-pointer transition-all duration-200 ${
                checked ? "border-gray-500" : "border-neutral-50"
              }`}
            >
              {value}
            </div>
          </label>
        );
      })}
    </>
  );
}

function PurchaseMarkup() {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  return (
    <div className="w-full h-full">
      <AddToCartButton
        type="button"
        variantId={selectedVariant?.id}
        quantity={1}
        accessibleAddingToCartLabel="Adding item to your cart"
        disabled={isOutOfStock}
        style={{width: "100%"}}
      >
        <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full">
          {isOutOfStock ? "Sold out" : "Add to cart"}
        </span>
      </AddToCartButton>
      {/* {isOutOfStock ? (
          <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">
            Available in 2-3 weeks
          </span>
        ) : (
          <BuyNowButton variantId={selectedVariant.id}>
            <span className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none border w-full">
              Buy it now
            </span>
          </BuyNowButton>
        )} */}
    </div>
  );
}
export default ProductDetails;
