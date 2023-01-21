import Layout from "../components/Layout.server";
import CollectionCard from "../components/cards/CollectionCard";
import { CacheLong, gql, Link, useShopQuery } from "@shopify/hydrogen";
import Banner from "../components/Banner.client";

interface CollectionType {
  title: string;
  handle: string;
  image: { url: string };
}

const Home = () => {
  const {
    data: { collections },
  }: { data: { collections: { nodes: [] } } } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <>
    
      <Layout>
        <div className="banner w-full h-full">
          <Banner />
        </div>
        <div className="collection_heading w-full h-12 border border-black flex items-center justify-center font-semibold text-xl">
          Collections
        </div>
        <div className="feat__collections grid lg:grid-cols-3 sm:grid-cols-2">
          {collections?.nodes.map((collection: CollectionType) => (
            <Link to={`/collection/${collection.handle}`} className="">
              <CollectionCard collection={collection} />
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
};

const QUERY = gql`
  query FeaturedCollections {
    collections(first: 10, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

export default Home;
