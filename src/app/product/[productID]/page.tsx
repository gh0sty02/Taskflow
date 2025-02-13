import React from "react";

const ProductPage = async ({ params }) => {
  console.log({ params });
  const { productID } = params;
  return <div>ProductPage : {productID}</div>;
};

export default ProductPage;
