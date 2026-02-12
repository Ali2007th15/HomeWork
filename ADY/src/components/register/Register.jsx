import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';
import { useTranslation } from 'react-i18next';

export default function Register({ onClose, openLogin }) {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let valid = true;

    if (!formData.firstName) {
      toast.error(t('firstNameRequired'));
      valid = false;
    } else if (!nameRegex.test(formData.firstName)) {
      toast.error(t('firstNameInvalid'));
      valid = false;
    }

    if (!formData.lastName) {
      toast.error(t('lastNameRequired'));
      valid = false;
    } else if (!nameRegex.test(formData.lastName)) {
      toast.error(t('lastNameInvalid'));
      valid = false;
    }

    if (!formData.email) {
      toast.error(t('emailRequired'));
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      toast.error(t('emailInvalid'));
      valid = false;
    }

    if (!formData.password) {
      toast.error(t('passwordRequired'));
      valid = false;
    } else if (!passwordRegex.test(formData.password)) {
      toast.error(t('passwordWeak'));
      valid = false;
    }

    if (!formData.confirmPassword) {
      toast.error(t('confirmPasswordRequired'));
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      toast.error(t('passwordsNotMatch'));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegisterError('');

    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:7261/api/Users/Registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include',
        });

        setIsLoading(false);

        if (response.ok) {
          toast.success(t('registrationSuccess'));
          onClose();
          openLogin();
        } else {
          const errorData = await response.json();
          setRegisterError(errorData.message || t('registrationError'));
          toast.error(errorData.message || t('registrationError'));
        }
      } catch (error) {
        setIsLoading(false);
        setRegisterError(t('connectionError'));
        toast.error(t('connectionError'));
      }
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal-window'>
        <div className='modal-window-container'>
          <h1 className='head1'>{t('registration')}</h1>

          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            placeholder={t('first name')}
            onChange={handleInputChange}
            className='input-field'
          />

          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            placeholder={t('last name')}
            onChange={handleInputChange}
            className='input-field'
          />

          <input
            type='email'
            name='email'
            value={formData.email}
            placeholder='Email'
            onChange={handleInputChange}
            className='input-field'
          />

          <input
            type='password'
            name='password'
            value={formData.password}
            placeholder={t('password')}
            onChange={handleInputChange}
            className='input-field'
          />

          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            placeholder={t('confirm')}
            onChange={handleInputChange}
            className='input-field'
          />

          {registerError && <span className='error'>{registerError}</span>}

          <button
            className='register-button'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {t('register')}
          </button>

          <button
            className='to-login-button'
            onClick={() => {
              onClose();
              openLogin();
            }}
          >
            {t('already have')}
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
