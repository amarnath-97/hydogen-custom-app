import { Link, useCart } from "@shopify/hydrogen";
import Timer from "./Timer";

const Header = ({ shop, isHome }: { shop: string; isHome: string }) => {
  const {totalQuantity} = useCart();
  // console.log(data);
  return (
    <>
      <div className="w-full bg-white z-10 flex justify-between p-3 items-center border-b border-black gap-2 min-h-[5vh]">
        <div className="left__nav flex w-1/3 justify-start uppercase font-thin text-sm items-center">
          <ul className="flex gap-5 justify-around uppercase font-thin text-sm">
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>news</li>
            <li>info</li>
            <Link to="/shop">
              <li>shop</li>
            </Link>
          </ul>
        </div>

        <h1 className="logo font-semibold uppercase text-2xl w-1/3 flex justify-center items-center">
          {shop}
        </h1>

        <div className="time font-thin text-sm w-1/3 flex justify-end">
          <Timer />
        </div>
      </div>

      <div className="sub__header flex justify-between p-3 text-sm border-b border-black">
        
          <Link to="/" className={isHome ? "v-hidden": ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
        </Link>

        <Link to="/cart">
          <div className="cart">CART ({totalQuantity})</div>
        </Link>
      </div>
    </>
  );
};

export default Header;
