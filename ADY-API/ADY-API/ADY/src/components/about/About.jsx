import React, { useState } from 'react';
import './About.css'; // стили для анимации текста

const About = ({ theme }) => {
  const isDarkTheme = theme === 'dark';

  const styles = {
    container: {
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'transparent',
      
      marginTop: '70px',
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
      minHeight: 'calc(100vh - 70px)',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#6a0dad',
      animation: 'fadeIn 1.5s ease-in-out', // добавление анимации
    },
    section: {
      margin: '20px 0',
      lineHeight: '1.6',
      background: '',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 1)',
    },
    advantageContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
    },
    advantage: {
      padding: '20px',
      borderRadius: '8px',
      boxShadow:  '0 2px 8px rgba(0, 0, 0, 1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    },
    advantageHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 1)',
    },
    advantageTitle: {
      fontSize: '1.5rem',
      margin: '0 0 10px 0',
      color: '#6a0dad',
    },
    advantageText: {
      margin: '0',
      lineHeight: '1.4',
    },
    trainTypeContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
    },
    trainTypeCard: {
      padding: '20px',
      borderRadius: '8px',
      
      boxShadow: '0 2px 8px rgba(0, 0, 0, 1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    },
    trainTypeHover: {
      transform: 'scale(1.05)',
      boxShadow:'0 4px 16px rgba(0, 0, 0, 1)',
    },
    trainTypeTitle: {
      fontSize: '1.5rem',
      margin: '10px 0',
      color: '#6a0dad'
    },
    trainTypeDescription: {
      marginTop: '10px',
    },
  };

  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);
  const [hoveredTrainType, setHoveredTrainType] = useState(null);

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Meet the Trains</h1>
      <div style={styles.section}>
        <p>
          Traveling by train is not just a means to reach your destination; it’s an experience in itself. Imagine 
          gliding through picturesque landscapes, feeling the gentle sway of the carriage, and enjoying the freedom 
          to move around as you please. With trains, you can escape the hustle of city traffic and immerse yourself 
          in the journey.
        </p>
        <p>
          Our extensive train network offers a wide range of routes, from local services to long-distance journeys, 
          ensuring a comfortable and safe travel experience for everyone. Discover why trains are becoming an increasingly 
          popular choice for modern travelers.
        </p>
      </div>
      <h2 style={styles.title}>Why Choose Trains?</h2>
      <div style={styles.advantageContainer}>
        {['Eco-Friendliness', 'Comfort', 'Safety'].map((title, index) => (
          <div
            key={index}
            style={{
              ...styles.advantage,
              ...(hoveredAdvantage === index ? styles.advantageHover : {}),
            }}
            onMouseEnter={() => setHoveredAdvantage(index)}
            onMouseLeave={() => setHoveredAdvantage(null)}
          >
            <h3 style={styles.advantageTitle}>{title}</h3>
            <p style={styles.advantageText}>
              {title === 'Eco-Friendliness' && 'Trains emit less carbon per passenger, making them one of the most eco-friendly modes of transport.'}
              {title === 'Comfort' && 'Modern trains offer comfortable seating, the ability to move around the carriage, and even onboard restaurants.'}
              {title === 'Safety' && 'Trains are among the safest forms of transport due to strict safety standards.'}
            </p>
          </div>
        ))}
      </div>
      <h2 style={styles.title}>Types of Trains</h2>
      <div style={styles.trainTypeContainer}>
        {[
          {
            title: 'Apsheronskaya Ring',
            description: 'A local service connecting various cities around the Apsheron Peninsula.',
          },
          {
            title: 'Intercity Trains',
            description: 'Long-distance services connecting major cities for comfortable travel.',
          },
          {
            title: 'High-Speed Trains',
            description: 'Offering fast and convenient travel between major urban centers.',
          },
        ].map((trainType, index) => (
          <div
            key={index}
            style={{
              ...styles.trainTypeCard,
              ...(hoveredTrainType === index ? styles.trainTypeHover : {}),
            }}
            onMouseEnter={() => setHoveredTrainType(index)}
            onMouseLeave={() => setHoveredTrainType(null)}
          >
            <h3 style={styles.trainTypeTitle}>{trainType.title}</h3>
            <p style={styles.trainTypeDescription}>{trainType.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
