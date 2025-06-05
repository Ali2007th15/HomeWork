import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../App'; // Import useAuth hook

export default function Login({ onClose, openRegister }) {
  const { t } = useTranslation();
  const auth = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Please enter your email";
      toast.error("Please enter your email");
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password";
      toast.error("Please enter your password");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch("https://localhost:7261/api/Users/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        });

        const responseData = await response.json();
        setIsLoading(false);

        if (response.ok) {
          toast.success("Login successful!");
          
          // Extract user data
          const userData = {
            firstName: responseData.user.firstName,
            lastName: responseData.user.lastName,
            email: responseData.user.email,
            role: responseData.user.role
          };
          
          // Update global auth state
          auth.login(userData);
          
          // Close login modal
          onClose();
        } else if (response.status === 401) {
          toast.error("Invalid email or password");
        } else {
          toast.error(responseData.message || "Login error. Please try again later.");
        }
      } catch (error) {
        setIsLoading(false);
        toast.error("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className="modal-window-container">
          <h1 className="head2">{t("login")}</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder={t("password")}
            onChange={handleInputChange}
          />

          <button className="to-register-button" onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Loading..." : t("log")}
          </button>

          <button
            className="to-register-button"
            onClick={() => {
              onClose();
              openRegister();
            }}
          >
            {t("don't have")}
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar closeOnClick />
    </div>
  );
}