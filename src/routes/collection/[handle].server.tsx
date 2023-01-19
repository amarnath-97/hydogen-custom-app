import { gql, Link, useRouteParams, useShopQuery } from "@shopify/hydrogen";
import Layout from "../../components/Layout.server";
import ProductCard from "../../components/cards/ProductCard";

const Collection = () => {
  const { handle } = useRouteParams();

  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    variables: {
      handle,
    },
  });
  return (
    <Layout>
      <div className="heading w-full h-12 border border-black border-t-transparent flex justify-start items-center uppercase p-3">
        {collection.title} Collection 
      </div>
      <div className="products grid lg:grid-cols-3 sm:grid-cols-2">
        {collection?.products?.nodes.map((product) => (
          <Link to={`/product/${product.handle}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

const QUERY = gql`
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      seo {
        description
        title
      }
      image {
        id
        url
        width
        height
        altText
      }
      products(first: 8) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              priceV2 {
                amount
                currencyCode
              }
              compareAtPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;

export default Collection;
