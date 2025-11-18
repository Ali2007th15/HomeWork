import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Train from "../../assets/train.png";
import Search from "../search/Search";
import TrainSeatLayout from "../seat/Seat";

const Detail = () => {
  const { t } = useTranslation();
  const { tripType } = useParams();  
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seats) => {
    setSelectedSeats(seats);
  };

  return (
    <div className="w-full lg:px-26 md:px-16 sm:px-7 px-4 mt-12 mb-[10ch]">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 items-start">

        {/* --- Left side: Train info --- */}
        <div className="col-span-1 flex flex-col justify-start gap-4">
          <img 
            src={Train} 
            alt="train detail" 
            className="w-full rounded-md object-contain"
          />
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 text-left">
              {t("fast train")}
              <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                1518
              </span>
            </h1>

            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">(5.0)</p>
            </div>

            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              {t("text16")}
            </p>
          </div>
        </div>

        {/* --- Right side: Search + Seats --- */}
        <div className="col-span-1 space-y-10">
          <div className="space-y-6">
            <Search tripType={tripType} />
            <TrainSeatLayout onSeatSelection={handleSeatSelection} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Detail;
