import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }) {

  const navigate = useNavigate();

  return (

    <div
      className="card h-100"
      style={{
        cursor: "pointer",
        height: "100%"
      }}
      onClick={() => navigate(`/product/${item.id}`)}
    >

      <div
        style={{
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={item.image}
          alt=""
          style={{
            maxHeight: "180px",
            objectFit: "contain"
          }}
        />
      </div>

      <div className="card-body">

        <h6
          className="card-title"
          style={{
            height: "50px",
            overflow: "hidden"
          }}
        >
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

  );
}

export default ProductCard;