"use client";
import { useState } from "react";
import Link from "next/link";
import axiosClient from "@/utils/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: formData.email,
    };
    try {
      await axiosClient.post("/newsletter/subscribe", data);
      toast.success("You have successfully subscribed to our newsletter!");
    } catch (errors) {
      toast.error(`Subscription failed. ${errors.response.data.errors.email}`);
    }
  };
  return (
    <div>
      {" "}
      {/* Begin Simplifi Networks Footer Area */}
      <div className="uren-footer_area">
        <div className="footer-top_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="newsletter-area">
                  <h3 className="title">Join Our Newsletter Now</h3>
                  <p className="short-desc">
                    Get E-mail updates about our latest productsand special
                    offers.
                  </p>
                  <div className="newsletter-form_wrap">
                    <form onSubmit={handleSubmit}>
                      <div id="mc_embed_signup_scroll">
                        <div id="mc-form" className="mc-form subscribe-form">
                          <input
                            className="newsletter-input"
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />

                          <button className="newsletter-btn" id="mc-submit">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle_area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widgets_info">
                  <div className="footer-widgets_logo">
                    <Link href="#">
                      <img
                        src="/assets/images/menu/logo/1.png"
                        alt="Simplifi Networks Footer Logo"
                      />
                    </Link>
                  </div>
                  <div className="widget-short_desc">
                    <p>
                      Simplifi Networks is a leading supplier of cutting-edge
                      technologies like Wireless Broadband, Wi-Fi, Networking,
                      VoIP, Fibre, and IP Video. We provide top-quality
                      products, extensive support, and financing solutions. Our
                      East African partners in Kenya, Uganda, Tanzania,
                      Ethiopia, Congo, DRC, Sudan, and Rwanda trust us for
                      exceptional service. Our brands include Ubiquiti,
                      MikroTik, RUIJIE, and more.
                    </p>
                  </div>
                  <div className="widgets-essential_stuff">
                    <ul>
                      <li className="uren-address">
                        <span>Address:</span> The Barn, Ullenhall, Henley in
                        Arden B578 5CC, England
                      </li>
                      <li className="uren-phone">
                        <span>Call Us:</span>{" "}
                        <Link href="tel://+123123321345">+123 321 345</Link>
                      </li>
                      <li className="uren-email">
                        <span>Email:</span>{" "}
                        <Link href="mailto:simplifinetworks.com/v4/">
                          Simplifinetworks
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="uren-social_link">
                    <ul>
                      <li className="facebook">
                        <Link
                          href="https://www.facebook.com/"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Facebook"
                        >
                          <i className="fab fa-facebook" />
                        </Link>
                      </li>
                      <li className="twitter">
                        <Link
                          href="https://twitter.com/"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Twitter"
                        >
                          <i className="fab fa-twitter-square" />
                        </Link>
                      </li>
                      <li className="google-plus">
                        <Link
                          href="https://www.plus.google.com/discover"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Google Plus"
                        >
                          <i className="fab fa-google-plus" />
                        </Link>
                      </li>
                      <li className="instagram">
                        <Link
                          href="https://rss.com/"
                          data-toggle="tooltip"
                          target="_blank"
                          title="Instagram"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="footer-widgets_area">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>Information</h3>
                      </div>
                      <div className="footer-widgets">
                        <ul>
                          <li>
                            <Link href="/about">About Us</Link>
                          </li>
                          <li>
                            <Link href="/services">Services</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact US</Link>
                          </li>
                          <li>
                            <Link href="/term-conditions">
                              Terms and Condtions
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>Resources</h3>
                      </div>
                      <div className="footer-widgets">
                        <ul>
                          <li>
                            <Link href="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="/webinars">Webinars</Link>
                          </li>
                          <li>
                            <Link href="/newletters">Newsletters</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>Support</h3>
                      </div>
                      <div className="footer-widgets">
                        <ul>
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
                              href="https://community.ubnt.com/t5/custom/page/page-id/Forums"
                              target="_blank"
                            >
                              Ubiquiti Support Forums
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.rfelements.com/support/"
                              target="_blank"
                            >
                              RF Elements Support
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://rfelements.com/support"
                              target="_blank"
                            >
                              Teltonika Community
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widgets_title">
                        <h3>Contact US</h3>
                      </div>
                      <div className="footer-widgets">
                        <b>Uganda</b>
                        <br></br>
                        <a href="mailto:uganda@simplifinetworks.com">
                          uganda@simplifinetworks.com
                        </a>
                        <br></br>
                        <a href="tel:+256758937003">+256 758 937 003</a>
                        <br></br>
                        <b>International</b>
                        <br></br>
                        <a href="mailto:info@simplifinetworks.com">
                          info@simplifinetworks.com
                        </a>
                        <br></br>

                        <b>Kenya</b>
                        <br></br>
                        <a href="mailto:kenya@simplifinetworks.com">
                          kenya@simplifinetworks.com
                        </a>
                        <br></br>
                        <a href="tel:+254727401262">+254 727 401 262</a>
                        <br></br>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom_area">
          <div className="container-fluid">
            <div className="footer-bottom_nav">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="copyright">
                    <span>
                      <Link href="Simplifinetworks.com">Simplifinetworks</Link>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="payment">
                    <Link href="#">
                      <img
                        src="assets/images/footer/payment/1.png"
                        alt="Simplifi Networks Payment Method"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
