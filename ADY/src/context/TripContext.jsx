import React, { createContext, useContext, useState } from "react";

const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trip, setTrip] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: [],
    totalPrice: 0,
    bookedSeats: [], // Уже купленные места
  });

  const updateTrip = (key, value) => {
    setTrip((prev) => {
      let updated = { ...prev, [key]: value };

      // Пересчёт totalPrice при выборе мест
      if (key === "seats") {
        updated.totalPrice = value.length * 15; // цена за одно место = 15₼
      }

      return updated;
    });
  };

  return (
    <TripContext.Provider value={{ trip, updateTrip }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => useContext(TripContext);
