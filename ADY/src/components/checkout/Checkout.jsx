import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useTrip } from "../../context/TripContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const distances = {
  absheron: {
    Baku: { Sumqayit: 30, Novxani: 25, Goredil: 35, Pirsagi: 40, Koroglu: 10 },
    Sumqayit: { Baku: 30, Novxani: 10, Goredil: 15, Pirsagi: 20, Koroglu: 25 },
    Novxani: { Baku: 25, Sumqayit: 10 },
    Goredil: { Baku: 35 },
    Pirsagi: { Baku: 40 },
    Koroglu: { Baku: 10 },
  },
  intercity: {
    BakuDYV: { Ucar: 230, Agdas: 240, Gence: 365, Tovuz: 460, Agstafa: 480 },
    Gence: { BakuDYV: 365, Tovuz: 95, Agstafa: 115 },
    Tovuz: { BakuDYV: 460 },
  },
};

const PRICE_PER_KM = { absheron: 0.05, intercity: 0.05 };


const calculateSeatPrice = (trip) => {
  if (!trip.from || !trip.to || !trip.tripType) return 0;
  const distance =
    distances[trip.tripType]?.[trip.from]?.[trip.to] ||
    distances[trip.tripType]?.[trip.to]?.[trip.from] ||
    0;
  if (!distance) return 0;
  return Math.round(distance * PRICE_PER_KM[trip.tripType]);
};

const Checkout = () => {
  const { trip } = useTrip();
  const { t } = useTranslation();
  const [emailSentMessage, setEmailSentMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const seatPrice = calculateSeatPrice(trip);
  const totalPrice = seatPrice * (trip.seats?.length || 0);

  const sendEmailAndSaveTicket = async (fullname, email, phone) => {
    try {
      const ticketResponse = await axios.post(
        "http://localhost:7261/api/Tickets/Create",
        {
          fullName: fullname,
          email: email,
          from: trip.from,
          to: trip.to,
          date: trip.date,
          time: trip.time,
          seats: trip.seats.join(", "),
          totalPrice: totalPrice,
          userId: 1,
        }
      );

      console.log("Ticket saved:", ticketResponse.data);

      await axios.post("http://localhost:5000/send-email", {
        fullname,
        email,
        phone,
        trip,
        totalPrice,
      });

      setEmailSentMessage(t("Email sent and ticket saved successfully!"));

      setTimeout(() => {
        setEmailSentMessage("");
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error saving ticket or sending email:", error);
      setErrorMessage(t("Failed to save ticket or send email"));
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    if (!trip.from || !trip.to || !trip.time || trip.seats.length === 0) {
      setErrorMessage(t("Please select route, time, and seats"));
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    sendEmailAndSaveTicket(fullname, email, phone);
  };

  if (!trip.from || !trip.to || !trip.date || !trip.time) {
    return <div>{t("Loading...")}</div>;
  }

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[13ch] space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-7 lg:pr-20">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
            {t("passenger information")}
          </h2>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="fullname" className="block mb-2 font-semibold">
                {t("fullname")}
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="w-full px-4 py-3 bg-neutral-200/60 dark:bg-neutral-900/60  border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d5c87] transition-all duration-200"
                placeholder={t("Enter Full Name")}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                {t("email address")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e.g. example@gmail.com"
                className="w-full px-4 py-3 bg-neutral-200/60 dark:bg-neutral-900/60  border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d5c87] transition-all duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold">
                {t("phone number")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="e.g. 0999077707"
                className="w-full px-3 h-12  rounded-md bg-neutral-200/60 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#1d5c87]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 h-12 bg-[#1d5c87] text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2 transform transition-all duration-300 hover:scale-105 hover:bg-[#1d5c87]"
            >
              {t("buy ticket")}
              <FaArrowRight />
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 lg:sticky lg:top-28 space-y-8 lg:mt-0 mt-10">
          <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7 space-y-6">
            <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
              {t("your booking status")}
            </h2>

            <div className="space-y-8 pb-3">
              <div className="space-y-4">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  {t("your destination")}
                </h6>

                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    {t("from")}:- <span className="ml-1.5">{trip.from}</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                  </div>
                  <div className="w-fit text-base font-medium">
                    {t("to")}:- <span className="ml-1.5">{trip.to}</span>
                  </div>
                </div>

                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    {t("date")}:- <span className="ml-1.5">{trip.date}</span>
                  </div>
                </div>

                <div className="w-full flex items-center gap-x-3">
                  <div className="w-fit text-base font-medium">
                    {t("time")}:- <span className="ml-1.5">{trip.time}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                    {t("selected seats")}
                  </h6>
                  {trip.seats?.length > 0 ? (
                    <div className="flex items-center gap-2 flex-wrap">
                      {trip.seats.map((seat, index) => (
                        <span
                          key={index}
                          className="bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 px-3 py-1.5 rounded-full text-sm font-medium"
                        >
                          {seat}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="text-neutral-400">
                      {t("No seats selected.")}
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full flex items-center gap-x-3">
                <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                  {t("total price:")}
                </h6>
                <div className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                  {totalPrice} AZN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {emailSentMessage && (
        <div className="fixed bottom-10 left-10 bg-green-600 text-white py-2 px-4 rounded-md">
          {emailSentMessage}
        </div>
      )}

      {errorMessage && (
        <div className="fixed bottom-10 left-10 bg-red-600 text-white py-2 px-4 rounded-md">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Checkout;
