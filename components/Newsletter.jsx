"use client";
import axiosClient from "@/utils/axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
  });
  useEffect(() => {
    const canceled = localStorage.getItem("popupCanceled");
    if (canceled) {
      setShowPopup(false);
    }
  }, []);

  const donotShowAgain = (event) => {
    const canceled = event.target.checked;
    setShowPopup(!canceled);
    localStorage.setItem("popupCanceled", canceled ? "true" : "");
  };
  if (!showPopup) {
    return null;
  }

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
      <div className="popup_wrapper">
        <div className="test">
          <span className="popup_off">
            <i className="ion-android-close" />
          </span>
          <div className="subscribe_area">
            <h2>Sign Up Newsletter</h2>
            <p>
              Subscribe to the our store mailing list to receive updates on new
              arrivals, special offers and other discount information.
            </p>
            <div className="subscribe-form-group">
              <form onSubmit={handleSubmit} className="subscribe-form">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">subscribe</button>
              </form>
            </div>
            <div className="subscribe-bottom">
              <input
                type="checkbox"
                id="newsletter-permission"
                onChange={donotShowAgain}
              />
              <label htmlFor="newsletter-permission">
                Don't show this popup again
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
