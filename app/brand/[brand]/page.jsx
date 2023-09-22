"use client";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import axiosClient from "@/utils/axios";
import Link from "next/link";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import FramerMotion from "@/components/FramerMotion";

const ProductsByBrand = ({ params }) => {
  const slug = params.brand;
  const [links, setLinks] = useState([]);
  const file_url = process.env.NEXT_PUBLIC_STORAGE_URL;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getBrandProducts();
  }, []);
  const getBrandProducts = async () => {
    const response = await axiosClient.post("/brand/products", { slug });
    setProducts(response.data.results.data);
    setLinks(response.data.results.links);
    // window.scrollTo({
    //   top: 520,
    //   behavior: "smooth",
    // });
  };

  const handlePagination = async (url) => {
    const response = await axiosClient.post(`${url}&slug=${slug}`);
    setProducts(response.data.results.data);
    setLinks(response.data.results.links);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };
  return (
    <FramerMotion>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Products</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active"></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="shop-content_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-5 order-2 order-lg-1 order-md-1">
              <Sidebar />
            </div>
            <div className="col-lg-9 col-md-7 order-1 order-lg-2 order-md-2">
              <div className="shop-toolbar">
                <div className="product-view-mode">
                  <a
                    className="grid-1"
                    data-target="gridview-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={1}
                  >
                    1
                  </a>
                  <a
                    className="grid-2"
                    data-target="gridview-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={2}
                  >
                    2
                  </a>
                  <a
                    className="active grid-3"
                    data-target="gridview-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={3}
                  >
                    3
                  </a>
                  <a
                    className="grid-4"
                    data-target="gridview-4"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={4}
                  >
                    4
                  </a>
                  <a
                    className="grid-5"
                    data-target="gridview-5"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={5}
                  >
                    5
                  </a>
                  <a
                    className="list"
                    data-target="listview"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="List"
                  >
                    <i className="fa fa-th-list" />
                  </a>
                </div>
                <div className="product-item-selection_area">
                  <div className="product-short">
                    <label className="select-label">Sort By:</label>
                    <select className="myniceselect nice-select">
                      <option value={1}>Default</option>
                      <option value={2}>Name, A to Z</option>
                      <option value={3}>Name, Z to A</option>
                      <option value={4}>Price, low to high</option>
                      <option value={5}>Price, high to low</option>
                      <option value={5}>Rating (Highest)</option>
                      <option value={5}>Rating (Lowest)</option>
                      <option value={5}>Model (A - Z)</option>
                      <option value={5}>Model (Z - A)</option>
                    </select>
                  </div>
                  <div className="product-showing">
                    <label className="select-label">Show:</label>
                    <select className="myniceselect short-select nice-select">
                      <option value={1}>15</option>
                      <option value={1}>1</option>
                      <option value={1}>2</option>
                      <option value={1}>3</option>
                      <option value={1}>4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="shop-product-wrap grid gridview-3 img-hover-effect_area row">
                {products.map((product) => (
                  <div className="col-lg-4" key={product.id}>
                    <ProductCard
                      product={product}
                      file_url={file_url}
                      type="normal"
                    />
                  </div>
                ))}
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="uren-paginatoin-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="uren-pagination-box primary-color">
                          {links.map((link) => {
                            return (
                              <>
                                <li
                                  key={link.label}
                                  className={`cursor-pointer ${
                                    link.active ? "active" : ""
                                  }`}
                                >
                                  <a onClick={() => handlePagination(link.url)}>
                                    {" "}
                                    {parse(link.label)}{" "}
                                  </a>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FramerMotion>
  );
};

export default ProductsByBrand;
