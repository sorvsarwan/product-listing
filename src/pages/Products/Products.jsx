import React, { Suspense } from "react";
import Header from "../../components/Header";
const ProductListing = React.lazy(() => import("./components/ProductListing"));

const Products = () => {
  return (
    <div>
      <Header />
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductListing />
        </Suspense>
      </>
    </div>
  );
};

export default Products;
