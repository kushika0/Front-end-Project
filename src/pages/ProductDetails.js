import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      });

  }, [id]);

  if (!product) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (

    <div className="container mt-5">

      <div className="row">

        <div className="col-md-5 text-center">

          <img
            src={product.image}
            alt=""
            style={{ height: "300px", objectFit: "contain" }}
          />

        </div>

        <div className="col-md-7">

          <h3>{product.title}</h3>

          <p className="text-muted">
            {product.category}
          </p>

          <h4 className="text-success">
            ₹ {Math.round(product.price * 83)}
          </h4>

          <p className="mt-3">
            {product.description}
          </p>

        </div>

      </div>

    </div>

  );
}

export default ProductDetails;