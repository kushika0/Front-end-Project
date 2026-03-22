import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error loading products");
        setLoading(false);
      });

  }, []);


  // categories
  const categories = [
    ...new Set(products.map((item) => item.category))
  ];


  // correct search + filter
  const filteredProducts = products.filter((item) => {

    const matchSearch =
      item.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchCategory =
      category === "" ||
      item.category === category;

    return matchSearch && matchCategory;
  });


  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-danger text-center">{error}</h2>;
  }


  return (

    <div className="container mt-4">

      <h2 className="mb-3">Product List</h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filter
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <div className="row">

        {filteredProducts.map((item) => (

          <div
            className="col-md-3 mb-4"
            key={item.id}
          >
            <ProductCard item={item} />
          </div>

        ))}

      </div>

    </div>

  );
}

export default ProductList;