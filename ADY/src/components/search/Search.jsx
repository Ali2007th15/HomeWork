import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTrip } from "../../context/TripContext";

const Search = ({ tripType }) => {
  const { t } = useTranslation();
  const { trip, updateTrip, resetTrip } = useTrip();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    resetTrip();
    setFrom("");
    setTo("");
    setDate("");
    setTime("");
  }, [tripType]);

  const absheronLocations = [
    { value: "Baku", label: t("baku") },
    { value: "Sumqayit", label: t("sumqayit") },
    { value: "Novxani", label: t("novxani") },
    { value: "Goredil", label: t("goredil") },
    { value: "Pirsagi", label: t("pirsagi") },
    { value: "Koroglu", label: t("koroglu") },
  ];

  const intercityLocations = [
    { value: "BakuDYV", label: t("bakudyv") },
    { value: "Ucar", label: t("ucar") },
    { value: "Agdas", label: t("agdas") },
    { value: "Gence", label: t("gence") },
    { value: "Tovuz", label: t("tovuz") },
    { value: "Agstafa", label: t("agstafa") },
  ];

  const locations =
    tripType === "absheron" ? absheronLocations : intercityLocations;

  const schedule = {
    absheron: {
      Baku: ["07:50", "12:30", "18:00"],
      Sumqayit: ["08:30", "14:00", "19:00"],
      Novxani: ["08:50", "14:30", "19:30"],
      Goredil: ["09:10", "15:00", "20:00"],
      Pirsagi: ["09:40", "15:30", "20:30"],
      Koroglu: ["10:00", "16:00", "21:00"],
    },
    intercity: {
      BakuDYV: ["08:00", "12:00", "16:00"],
      Ucar: ["09:00", "13:00", "17:00"],
      Agdas: ["09:30", "13:30", "17:30"],
      Gence: ["10:00", "14:00", "18:00"],
      Tovuz: ["10:30", "14:30", "18:30"],
      Agstafa: ["11:00", "15:00", "19:00"],
    },
  };

  const handleFromChange = (e) => {
    const value = e.target.value;
    setFrom(value);
    updateTrip("from", value);

    if (schedule[tripType]?.[value]) {
      const defaultTime = schedule[tripType][value][0];
      setTime(defaultTime);
      updateTrip("time", defaultTime);
    } else {
      setTime("");
      updateTrip("time", "");
    }

    if (value === to) {
      setTo("");
      updateTrip("to", "");
    }
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setTo(value);
    updateTrip("to", value);

    if (value === from) {
      setFrom("");
      updateTrip("from", "");
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    updateTrip("date", e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    updateTrip("time", e.target.value);
  };

  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!date) {
      setDate(currentDate);
      updateTrip("date", currentDate);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-[8ch]">
      <div className="w-full max-w-4xl bg-neutral-100 rounded-md dark:bg-neutral-800/30 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 items-end">
          <div>
            <label className="block mb-2 font-semibold">{t("from")}</label>
            <select
              value={from}
              onChange={handleFromChange}
              className="w-full h-12 bg-neutral-200/60 dark:bg-neutral-800/50 rounded-md px-3"
            >
              <option value="">{t("select location")}</option>
              {locations
                .filter((l) => l.value !== to)
                .map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">{t("to")}</label>
            <select
              value={to}
              onChange={handleToChange}
              className="w-full h-12 bg-neutral-200/60 dark:bg-neutral-800/50 rounded-md px-3"
            >
              <option value="">{t("select location")}</option>
              {locations
                .filter((l) => l.value !== from)
                .map((l) => (
                  <option key={l.value} value={l.value}>
                    {l.label}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">{t("choose date")}</label>
            <input
              type="date"
              value={date}
              min={currentDate}
              onChange={handleDateChange}
              className="w-full h-12 bg-neutral-200/60 dark:bg-neutral-800/50 rounded-md px-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">{t("choose time")}</label>
            <select
              value={time}
              onChange={handleTimeChange}
              className="w-full h-12 bg-neutral-200/60 dark:bg-neutral-800/50 rounded-md px-3"
            >
              <option value="">{t("select time")}</option>
              {schedule[tripType]?.[from]?.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
