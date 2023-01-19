import Layout from "../components/Layout.server";
import CartPage from "../components/CartPage.client";


const Cart = () => {
  // const { lines } = useCart();
  return (
    <Layout>
      {/* <div className="container w-[100%]"> */}
        <CartPage/>
      {/* </div> */}
    </Layout>
  );
};

export default Cart;
