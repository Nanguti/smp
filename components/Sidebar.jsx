"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axiosClient from "@/utils/axios";

const Sidebar = () => {
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [brandCategories, setBrandCategories] = useState([]);
  const path = usePathname();

  useEffect(() => {
    fetchMenuItems("/menu-items");
  }, []);
  const fetchMenuItems = async (url) => {
    try {
      const response = await axiosClient.get(url);
      setBrands(response.data.brands);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleProductsByBrand = async (slug) => {
    router.push(`/brand/${slug}`);
  };

  const handleBrandCategories = async (slug) => {
    try {
      const response = await axiosClient.post(`/category/sub-categories`, {
        slug,
      });
      const category = response.data.category;
      setBrandCategories(category.sub_categories);

      const storedCategories =
        JSON.parse(localStorage.getItem("brandSubCategories")) || {};
      storedCategories[slug] = category.sub_categories;
      localStorage.setItem(
        "brandSubCategories",
        JSON.stringify(storedCategories)
      );
    } catch (error) {
      console.error(
        "An error occurred. Could not fetch sub categories!",
        error
      );
    }
  };
  return (
    <>
      <div className="uren-sidebar-catagories_area">
        <div className="uren-sidebar_categories">
          <div className="uren-categories_title">
            <h5>Top Manufacturers</h5>
          </div>
          <ul className="sidebar-checkbox_list">
            {brands.map((brand) => (
              <li key={brand.id}>
                <a
                  className={`cursor-pointer ${
                    path === brand.slug ? "text-yellow-600" : ""
                  }`}
                  onClick={() => {
                    handleProductsByBrand(brand.slug);
                  }}
                >
                  <span
                    className={`cursor-pointer font-semibold ${
                      path === "/brand/" + brand.slug ? "active-link  " : ""
                    }`}
                  >
                    {brand.title}{" "}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
