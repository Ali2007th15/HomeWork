import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoard.css';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/AuthContext';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const { userData, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (!isAuthenticated || !userData) {
    toast.error('Please log in to access the dashboard.');
    navigate('/login');
    return null;
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-content'>
        <h1 className='dash'>{t('dashboard')}</h1>
        <p>{t('first name')}: {userData.firstName}</p>
        <p>{t('last name')}: {userData.lastName}</p>
        <p>Email: {userData.email}</p>
      </div>
    </div>
  );
}