import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function Product() {
  return (
    <>
      <h1>My Product Page</h1>
      <p>
        Go to <Link to="/About">click about page</Link>.
      </p>
      <ul>
        {PRODUCTS.map((pro) => (
          <li key={pro.id}>
            <Link to={pro.id}>{pro.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
