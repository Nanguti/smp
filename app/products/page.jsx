"use client";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import axiosClient from "@/utils/axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import parse from "html-react-parser";
import BeautifulModal from "@/components/BeautifulModal";
import FramerMotion from "@/components/FramerMotion";
export const revalidate = 0;
const Products = () => {
  const file_url = process.env.NEXT_PUBLIC_STORAGE_URL;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParam = useSearchParams();
  const query = searchParam.get("query");
  const [products, setProducts] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (query && query !== null) {
      fetchProducts(`/products/search?query=${encodeURIComponent(query)}`);
    } else {
      fetchProducts("/products?page=1");
    }
  }, [query]);

  const fetchProducts = async (url) => {
    try {
      const response = await axiosClient.get(url);
      const fetchedProducts = response.data.products.data;
      setProducts(fetchedProducts);
      setLinks(response.data.products.links);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handlePagination = async (label) => {
    const response = await axiosClient.get(`/products?page=${label}`);
    console.log("response here " + response);
    setProducts(response.data.products.data);
    setLinks(response.data.products.links);
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
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
              <li className="active">Products</li>
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
              {query && query !== null ? (
                <div className="section-title_area">
                  <div className="search-result-title">
                    Search results for: {query}
                  </div>
                </div>
              ) : null}

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
                      <option value={5}>Model (A - Z)</option>
                      <option value={5}>Model (Z - A)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="shop-product-wrap grid gridview-3 img-hover-effect_area row">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div className="col-lg-3" key={product.id}>
                      <ProductCard
                        product={product}
                        file_url={file_url}
                        type="normal"
                        onQuickView={handleQuickView}
                      />
                      <BeautifulModal
                        product={selectedProduct}
                        closeModal={closeModal}
                        isModalOpen={isModalOpen}
                      />
                    </div>
                  ))
                ) : (
                  <span className="search-messge">
                    No results found for "{query}". Please try again!
                  </span>
                )}
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
                                  <a
                                    onClick={() => handlePagination(link.label)}
                                  >
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

export default Products;
