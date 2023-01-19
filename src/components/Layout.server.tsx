import {
  CacheLong,
  gql,
  useShopQuery,
  UseShopQueryResponse,
  useUrl,
} from "@shopify/hydrogen";
import { ReactNode } from "react";
import Header from "./Header.client";

const Layout = ({children}: {children: ReactNode}) => {
  const { data }: UseShopQueryResponse<{ shop: { name: string } }> =
    useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
      preload: true,
    });

  // console.log(data);

  const {pathname} = useUrl();
  const isHome = pathname === "/";
  // console.log(pathname);

  // console.log(process.env.MSG);

  return (
      <div className="w-full h-screen">
        <Header shop={data.shop.name} isHome={isHome}/>

        <main className="min-h-[80vh]">
          {children}
        </main>

        <div className="bottom__text w-full h-48 flex items-center justify-center mt-5 border-t border-black">
          <div className="content text-center w-3/6 h-auto text-center">
            {data.shop.name} is an independent agency creating meaningful
            connections between the world’s best brands & the cultures they
            participate in.
          </div>
        </div>
        <footer className="w-full border-t border-black h-12 grid place-items-center">
            <span>copyright © test-for-qa all rights reserved.</span>
        </footer>
      </div>
  );
};

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
export default Layout;
