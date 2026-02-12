import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/AuthContext';

export default function Login({ onClose, openRegister }) {
  const { t } = useTranslation();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = t('emailRequired');
      toast.error(t('emailRequired'));
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('emailInvalid');
      toast.error(t('emailInvalid'));
    }

    if (!formData.password) {
      newErrors.password = t('passwordRequired');
      toast.error(t('passwordRequired'));
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = t('passwordWeak');
      toast.error(t('passwordWeak'));
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:7261/api/Users/Login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include',
        });

        setIsLoading(false);

        if (response.ok) {
          const userData = await response.json();
          toast.success(t('loginSuccess'));
          const role = userData.email === 'ady-admin@gmail.com' ? 'admin' : 'user';
          login(userData, role);
          onClose();
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || t('loginError'));
        }
      } catch (error) {
        setIsLoading(false);
        toast.error(t('invalidAccount'));
      }
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-window'>
        <div className='modal-window-container'>
          <h1 className='head2'>{t('login')}</h1>

          <input
            className='modal-input'
            type='email'
            name='email'
            value={formData.email}
            placeholder='Email'
            onChange={handleInputChange}
          />

          <input
            className='modal-input'
            type='password'
            name='password'
            value={formData.password}
            placeholder={t('password')}
            onChange={handleInputChange}
          />

          <button
            className='to-register-button'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {t('log')}
          </button>

          <button
            className='to-register-button'
            onClick={() => {
              onClose();
              openRegister();
            }}
          >
            {t("don't have")}
          </button>
        </div>
      </div>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar
        closeOnClick
      />
    </div>
  );
}
