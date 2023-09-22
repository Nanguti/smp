"use client";
import axiosClient from "@/utils/axios";
import Newsletter from "./Newsletter";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import { map } from "jquery";

const Header = () => {
  // const response = await axiosClient.get('/menu-items')
  // const {brands, catageories} = response.data
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchMenuItems("/menu-items");
  }, []);

  const fetchMenuItems = async (url) => {
    try {
      const response = await axiosClient.get(url);
      setBrands(response.data.brands);
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleProductsCategory = (slug) => {
    router.push(`/category/${slug}`);
  };

  const handleProductsByBrand = (slug) => {
    router.push(`/brand/${slug}`);
  };
  return (
    <div>
      <Newsletter />
      <header className="header-main_area bg--sapphire">
        <div className="header-middle_area">
          <div className="container-fluid">
            <div className="row">
              <div className="custom-logo_col col-12">
                <div className="header-logo_area">
                  <Link href="/">
                    <img
                      src="/assets/images/menu/logo/1.png"
                      alt="Simplifi Network's Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="custom-category_col col-12">
                <div className="category-menu category-menu-hidden">
                  <div className="category-heading">
                    <h2 className="categories-toggle">
                      <span>Browse By</span>
                      <span>Catalogue</span>
                    </h2>
                  </div>
                  <div class="category-menu-list">
                    <ul>
                      <li className="right-menu">
                        <Link href="#">Browse by Manufacturer</Link>
                        <ul className="cat-mega-menu">
                          <li className="right-menu cat-mega-title">
                            <ul>
                              {brands.slice(0, 5).map((brand) => (
                                <li key={brand.id}>
                                  <a
                                    className="cursor-pointer"
                                    onClick={() =>
                                      handleProductsByBrand(brand.slug)
                                    }
                                  >
                                    {brand.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="right-menu cat-mega-title">
                            <ul>
                              {brands.slice(5, 10).map((brand) => (
                                <li key={brand.id}>
                                  <a
                                    className="cursor-pointer"
                                    onClick={() =>
                                      handleProductsByBrand(brand.slug)
                                    }
                                  >
                                    {brand.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="right-menu cat-mega-title">
                            <ul>
                              {brands.slice(10, 15).map((brand) => (
                                <li key={brand.id}>
                                  <a
                                    className="cursor-pointer"
                                    onClick={() =>
                                      handleProductsByBrand(brand.slug)
                                    }
                                  >
                                    {brand.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </li>

                      {categories.map((category) => {
                        if (category.slug === "wireless-access-points") {
                          return (
                            <li key={category.id} className="right-menu">
                              <a
                                className="cursor-pointer"
                                onClick={() =>
                                  handleProductsCategory(category.slug)
                                }
                              >
                                {category.title}
                              </a>
                              <ul className="cat-mega-menu cat-mega-menu-2">
                                {category.sub_categories.map((subCat) => {
                                  return (
                                    <li
                                      key={subCat.id}
                                      className="right-menu cat-mega-title"
                                    >
                                      <a
                                        className="cursor-pointer"
                                        onClick={() =>
                                          handleProductsCategory(subCat.slug)
                                        }
                                      >
                                        {subCat.title}
                                      </a>

                                      <ul>
                                        {subCat.sub_categories.map(
                                          (subSubCat) => {
                                            return (
                                              <li key={subSubCat.id}>
                                                <a
                                                  className="cursor-pointer"
                                                  onClick={() =>
                                                    handleProductsCategory(
                                                      subSubCat.slug
                                                    )
                                                  }
                                                >
                                                  {subSubCat.title}
                                                </a>
                                              </li>
                                            );
                                          }
                                        )}
                                      </ul>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        } else if (
                          category.sub_categories &&
                          category.sub_categories.length > 0
                        ) {
                          return (
                            <li className="right-menu">
                              <a
                                className="cursor-pointer"
                                onClick={() =>
                                  handleProductsCategory(category.slug)
                                }
                              >
                                {category.title}
                              </a>
                              <ul className="cat-dropdown cat-dropdown-2">
                                {category.sub_categories.map((child) => {
                                  if (
                                    child.sub_categories &&
                                    child.sub_categories.length > 0
                                  ) {
                                    return (
                                      <li className="right-menu">
                                        <Link href="#">
                                          Browse by Manufacturer
                                        </Link>
                                        <ul className="cat-mega-menu">
                                          <li className="right-menu cat-mega-title">
                                            <ul>
                                              {brands
                                                .slice(0, 5)
                                                .map((brand) => (
                                                  <li key={brand.id}>
                                                    <a
                                                      className="cursor-pointer"
                                                      onClick={() =>
                                                        handleProductsByBrand(
                                                          brand.slug
                                                        )
                                                      }
                                                    >
                                                      {brand.title}
                                                    </a>
                                                  </li>
                                                ))}
                                            </ul>
                                          </li>
                                          <li className="right-menu cat-mega-title">
                                            <ul>
                                              {brands
                                                .slice(5, 10)
                                                .map((brand) => (
                                                  <li key={brand.id}>
                                                    <a
                                                      className="cursor-pointer"
                                                      onClick={() =>
                                                        handleProductsByBrand(
                                                          brand.slug
                                                        )
                                                      }
                                                    >
                                                      {brand.title}
                                                    </a>
                                                  </li>
                                                ))}
                                            </ul>
                                          </li>
                                          <li className="right-menu cat-mega-title">
                                            <ul>
                                              {brands
                                                .slice(10, 15)
                                                .map((brand) => (
                                                  <li key={brand.id}>
                                                    <a
                                                      className="cursor-pointer"
                                                      onClick={() =>
                                                        handleProductsByBrand(
                                                          brand.slug
                                                        )
                                                      }
                                                    >
                                                      {brand.title}
                                                    </a>
                                                  </li>
                                                ))}
                                            </ul>
                                          </li>
                                        </ul>
                                      </li>
                                    );
                                  } else {
                                    return (
                                      <li>
                                        <a
                                          className="cursor-pointer"
                                          onClick={() =>
                                            handleProductsCategory(child.slug)
                                          }
                                        >
                                          {child.title}
                                        </a>
                                      </li>
                                    );
                                  }
                                })}
                              </ul>
                            </li>
                          );
                        } else {
                          return (
                            <li>
                              <a
                                className="cursor-pointer"
                                onClick={() =>
                                  handleProductsCategory(category.slug)
                                }
                              >
                                {category.title}
                              </a>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <SearchBar />
              <div className="custom-cart_col col-12">
                <div className="header-right_area">
                  <ul>
                    <li className="mobile-menu_wrap d-flex d-lg-none">
                      <Link
                        href="#mobileMenu"
                        className="mobile-menu_btn toolbar-btn color--white"
                      >
                        <i className="ion-navicon" />
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://+254727401262">
                        <i className="ion-android-call" />
                        Kenya: +254 727 401 262
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://+256758937003">
                        <i className="ion-android-call" />
                        Uganda: +256 758 937 003
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-top_area d-lg-block d-none">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <div className="main-menu_area position-relative">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/products">Products</Link>
                      </li>
                      <li className="">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="">
                        <Link href="/services">Services</Link>
                      </li>
                      <li className="dropdown-holder ">
                        <Link href="#">
                          Support <i className="ion-ios-arrow-down" />
                        </Link>
                        {/* <ul className="hm-dropdown">
                          {brands.map((brand) => (
                            <li key={brand.id}>
                              <Link href={`${brand.brand_url}`} target="_blank">
                                {brand.title}
                              </Link>
                            </li>
                          ))}
                        </ul> */}

                        <ul className="hm-dropdown">
                          <li>
                            <Link
                              href="https://techspecs.ui.com/"
                              target="_blank"
                            >
                              Ubiquiti Tech Specs
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://community.ui.com/"
                              target="_blank"
                            >
                              Ubiquiti Community
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://community.ui.com/"
                              target="_blank"
                            >
                              Ubiquiti Support Forums
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://docs.google.com/document/d/1p-z6f6MMBIbKl35v4EwRgKx5YRUyui0iOpzDnq4ZIgc/edit"
                              target="_blank"
                            >
                              MikroTik Quick Guide
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://forum.mikrotik.com/"
                              target="_blank"
                            >
                              MikroTik Support Forum
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://simplifinetworks.com/v4/SimplifiApp/SimplifiApp.zip"
                              target="_blank"
                            >
                              SimplifApp For MiktroTik
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://rfelements.com/support"
                              target="_blank"
                            >
                              RF Elements Support
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://www.netstar.in/customer-care/"
                              target="_blank"
                            >
                              Netstar Support
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://www.siklu.com/support/"
                              target="_blank"
                            >
                              Siklu Support
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://community.teltonika-networks.com/"
                              target="_blank"
                            >
                              Teltonika Community
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://wiki.teltonika-networks.com/view/Main_Page"
                              target="_blank"
                            >
                              Teltonika Knowledge Base
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="https://www.tyconsystems.com/crm.asp?action=contactus"
                              target="_blank"
                            >
                              Tycon Systems Support
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-holder">
                        <Link href="#">
                          Resources <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul className="hm-dropdown">
                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>

                          <li>
                            <Link href="/products-catalogs">
                              Products Catelogs
                            </Link>
                          </li>
                          <li>
                            <Link href="/news-articles">News and Articles</Link>
                          </li>
                          <li>
                            <Link href="/tech-talks">Tech Talks</Link>
                          </li>
                          <li>
                            <Link href="/webinars">Webinars</Link>
                          </li>
                          <li>
                            <Link href="/newletters">Newsletter</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4">
                <div className="ht-right_area">
                  <div className="ht-menu">
                    <ul>
                      <li>
                        <Link href="/login">My Account</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-top_area header-sticky bg--sapphire">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 col-lg-7 d-lg-block d-none">
                <div className="main-menu_area position-relative">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/products">Products</Link>
                      </li>
                      <li className="">
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="">
                        <Link href="/services">Services</Link>
                      </li>
                      <li className="dropdown-holder ">
                        <Link href="#">
                          Support <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul className="hm-dropdown">
                          {brands.map((brand) => (
                            <li key={brand.id}>
                              <Link href={`${brand.brand_url}`} target="_blank">
                                {brand.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="dropdown-holder">
                        <Link href="#">
                          Resources <i className="ion-ios-arrow-down" />
                        </Link>
                        <ul className="hm-dropdown">
                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="#">News and Articles</Link>
                          </li>
                          <li>
                            <Link href="#">Tech Talks</Link>
                          </li>
                          <li>
                            <Link href="#">Webinars</Link>
                          </li>
                          <li>
                            <Link href="#">Newsletter</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-3 d-block d-lg-none">
                <div className="header-logo_area header-sticky_logo">
                  <Link href="/index">
                    <img
                      src="/assets/images/menu/logo/1.png"
                      alt="Simplifi Networks Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-sm-9">
                <div className="header-right_area">
                  <ul>
                    <li className="mobile-menu_wrap d-flex d-lg-none">
                      <Link
                        href="#mobileMenu"
                        className="mobile-menu_btn toolbar-btn color--white"
                      >
                        <i className="ion-navicon" />
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://254727401262">
                        <i className="ion-android-call" />
                        Kenya: +254 727 401 262
                      </Link>
                    </li>
                    <li className="contact-us_wrap">
                      <Link href="tel://+256758937003">
                        <i className="ion-android-call" />
                        Uganda: +256 758 937 003
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu_wrapper" id="mobileMenu">
          <div className="offcanvas-menu-inner">
            <div className="container">
              <Link href="#" className="btn-close">
                <i className="ion-android-close" />
              </Link>
              <div className="offcanvas-inner_search">
                <form action="#" className="inner-searchbox">
                  <input type="text" placeholder="Search for item..." />
                  <button className="search_btn" type="submit">
                    <i className="ion-ios-search-strong" />
                  </button>
                </form>
              </div>
              <nav className="offcanvas-navigation">
                <ul className="mobile-menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/products">Products</Link>
                  </li>
                  <li className="">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="">
                    <Link href="/services">Services</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="/blog">
                      <span className="mm-text">Blog</span>
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/">
                      <span className="mm-text">Page 2</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="signup">
                          <span className="mm-text">My Account</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <nav className="offcanvas-navigation user-setting_area">
                <ul className="mobile-menu">
                  <li className="menu-item-has-children active">
                    <Link href="#">
                      <span className="mm-text">User Setting</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link href="login">
                          <span className="mm-text">My Account</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="signup">
                          <span className="mm-text">Login | Register</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
