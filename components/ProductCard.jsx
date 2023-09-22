"use client";
import { useRouter } from "next/navigation";
import BeautifulModal from "./BeautifulModal";
const ProductCard = ({ product, file_url, type, onQuickView }) => {
  const router = useRouter();

  const handleProductDetail = (slug) => {
    router.push(`/products/${slug}`);
  };
  const handleQuickView = () => {
    onQuickView(product);
  };
  if (type === "normal") {
    return (
      <>
        <div className="product-slide_item">
          <div className="inner-slide">
            <div className="single-product">
              <div className="product-img">
                <a
                  onClick={() => handleProductDetail(product.slug)}
                  className="cursor-pointer product-tittle-image"
                >
                  <img
                    className="primary-img"
                    src={`${file_url}/${product.photo}`}
                    alt={product.title}
                  />
                  <img
                    className="secondary-img"
                    src={`${file_url}/${product.photo}`}
                    alt={product.title}
                  />
                </a>
                <div className="add-actions">
                  <ul>
                    <li onClick={handleQuickView} className="cursor-pointer">
                      <a
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <button
                          onClick={handleQuickView}
                          className="cursor-pointer"
                        >
                          {" "}
                          <i className="ion-android-open" />
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-content">
                <div className="product-desc_info">
                  <h6>
                    <a
                      className="product-name cursor-pointer"
                      onClick={() => handleProductDetail(product.slug)}
                    >
                      <span className="product-title">{product.title}</span>
                    </a>
                  </h6>
                  <div className="price-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="list-slide_item">
          <div className="single-product">
            <div className="product-img">
              <a
                onClick={() => handleProductDetail(product.slug)}
                className="cursor-pointer"
              >
                <img
                  className="primary-img"
                  src={`${file_url}/${product.photo}`}
                  alt={product.title}
                />
                <img
                  className="secondary-img"
                  src={`${file_url}/${product.photo}`}
                  alt={product.title}
                />
              </a>
            </div>
            <div className="product-content">
              <div className="product-desc_info">
                <h6>
                  <a
                    className="product-name cursor-pointer"
                    onClick={() => handleProductDetail(product.slug)}
                  >
                    {product.title}
                  </a>
                </h6>
                <div className="product-short_desc">
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="add-actions">
                <ul>
                  <li
                    className="quick-view-btn"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    data-product-id="12345"
                  >
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Quick View"
                    >
                      <i className="ion-android-open" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ProductCard;
