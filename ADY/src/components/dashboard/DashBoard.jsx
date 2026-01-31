import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoard.css';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/AuthContext';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { userData, isAuthenticated, setUserData } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [avatarColor, setAvatarColor] = useState('#153f5c');
  const [avatarSymbol, setAvatarSymbol] = useState('');
  const [avatarPhoto, setAvatarPhoto] = useState(null);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [photoPickerOpen, setPhotoPickerOpen] = useState(false);
  const fileInputRef = useRef(null);

  const colorOptions = ['#000000ff', '#930093ff', '#1E88E5', '#ff0000ff'];

  const userKey = userData?.email ? `avatarData_${userData.email}` : null;

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return t('Good morning');
    if (hour < 18) return t('Good afternoon');
    return t('Good evening');
  };

  useEffect(() => {
    if (!isAuthenticated || !userData) {
      toast.error('Please log in to access the dashboard.');
      navigate('/login');
      return;
    }
  }, [isAuthenticated, userData, navigate]);

  useEffect(() => {
    if (!userData || !userKey) return;

    const savedData = localStorage.getItem(userKey);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        if (parsed.color) setAvatarColor(parsed.color);
        if (parsed.photo) setAvatarPhoto(parsed.photo);
        if (parsed.symbol) {
          setAvatarSymbol(parsed.symbol);
        } else if (userData.firstName) {
          setAvatarSymbol(userData.firstName[0].toUpperCase());
        }
      } catch (e) {
        console.error('Error reading avatar data:', e);
      }
    } else if (userData.firstName) {
      setAvatarSymbol(userData.firstName[0].toUpperCase());
    }
  }, [userKey, userData]);

  useEffect(() => {
    if (!userKey) return;
    const data = { color: avatarColor, photo: avatarPhoto, symbol: avatarSymbol };
    localStorage.setItem(userKey, JSON.stringify(data));
  }, [userKey, avatarColor, avatarPhoto, avatarSymbol]);

  const handleColorChange = (color) => {
    setAvatarColor(color);
    if (setUserData) setUserData((prev) => ({ ...prev, avatarColor: color }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const photoData = reader.result;
      setAvatarPhoto(photoData);

      if (userKey) {
        const saved = JSON.parse(localStorage.getItem(userKey)) || {};
        saved.photo = photoData;
        saved.color = avatarColor;
        saved.symbol = avatarSymbol || userData?.firstName?.[0]?.toUpperCase() || 'U';
        localStorage.setItem(userKey, JSON.stringify(saved));
      }

      if (setUserData) setUserData((prev) => ({ ...prev, avatarPhoto: photoData }));
    };
    reader.readAsDataURL(file);
  };

  const openFileDialog = () => fileInputRef.current?.click();

  const removePhoto = () => {
    setAvatarPhoto(null);

    if (userKey) {
      const saved = JSON.parse(localStorage.getItem(userKey)) || {};
      saved.photo = null;
      localStorage.setItem(userKey, JSON.stringify(saved));
    }

    if (setUserData) setUserData((prev) => ({ ...prev, avatarPhoto: null }));
  };

  return (
    <div className='dashboard-container'>
      <motion.div
        className='dashboard-content'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className='dash'>{t('dashboard')}</h1>

        <div className="user-info">
          <div className="avatar" style={{ backgroundColor: avatarColor }}>
            {avatarPhoto ? (
              <img src={avatarPhoto} alt="Avatar" className="avatar-img" />
            ) : (
              <span className="avatar-symbol">
                {avatarSymbol || (userData?.firstName?.[0]?.toUpperCase() ?? '?')}
              </span>
            )}
          </div>

          <div className="user-details">
            <p className="greeting">
              {getTimeOfDay()},{' '}
              <span className="user-name">
                {userData?.firstName?.charAt(0).toUpperCase() + userData?.firstName?.slice(1)}
              </span>!
            </p>
            <p><strong>{t('first name')}:</strong> {userData?.firstName?.charAt(0).toUpperCase() + userData?.firstName?.slice(1)}</p>
            <p><strong>{t('last name')}:</strong> {userData?.lastName?.charAt(0).toUpperCase() + userData?.lastName?.slice(1)}</p>
            <p><strong>Email:</strong> {userData?.email}</p>

            <div className="avatar-picker">
             
              {colorPickerOpen && (
                <div className="color-options">
                  {colorOptions.map((color) => (
                    <div
                      key={color}
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    />
                  ))}
                </div>
              )}

              <button className="picker-btn" onClick={() => setPhotoPickerOpen(!photoPickerOpen)}>
                {t('Upload photo')}
              </button>
              {photoPickerOpen && (
                <div className="photo-options">
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handlePhotoUpload}
                  />
                  <button className="picker-btn small" onClick={openFileDialog}>
                    {t('Choose file')}
                  </button>
                  {avatarPhoto && (
                    <button className="picker-btn small remove" onClick={removePhoto}>
                      {t('Remove photo')}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
