import React, { createContext, useContext, useState, useEffect } from "react";

const TripContext = createContext();

const initialTrip = {
  from: "",
  to: "",
  date: "",
  time: "",
  seats: [],
  totalPrice: 0,
  bookedSeats: [],
};

export const TripProvider = ({ children }) => {
  const [trip, setTrip] = useState(() => {
    try {
      const saved = sessionStorage.getItem("trip-data");
      return saved ? JSON.parse(saved) : initialTrip;
    } catch {
      return initialTrip;
    }
  });

  useEffect(() => {
    sessionStorage.setItem("trip-data", JSON.stringify(trip));
  }, [trip]);

  const updateTrip = (key, value) => {
    setTrip((prev) => {
      const updated = { ...prev, [key]: value };

      if (key === "seats") {
        updated.totalPrice = value.length * 15;
      }

      return updated;
    });
  };

  const resetTrip = () => {
    setTrip(initialTrip);
    sessionStorage.removeItem("trip-data");
  };

  return (
    <TripContext.Provider value={{ trip, updateTrip, resetTrip }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => useContext(TripContext);
