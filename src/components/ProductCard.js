import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {

  const navigate = useNavigate();

  return (

    <div
      className="card mb-3"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/product/${item.id}`)}
    >

      <div className="row g-0 align-items-center">

        {/* Image */}
        <div className="col-md-4 text-center">
          <img
            src={item.image}
            alt=""
            style={{
              height: "120px",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Text */}
        <div className="col-md-8">

          <div className="card-body">

            <h6 className="card-title">
              {item.title}
            </h6>

            <p className="text-success fw-bold">
              ₹ {Math.round(item.price * 83)}
            </p>

            <p className="text-muted">
              {item.category}
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default ProductCard;