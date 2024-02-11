import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();

  return (
    <>
      <h1>Product details</h1>
      <p>{params.id}</p>
      <Link to=".." relative="path">
        back
      </Link>
    </>
  );
}

export default ProductDetails;
