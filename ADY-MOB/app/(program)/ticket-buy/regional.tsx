import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Animated,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { useTrip } from "../../context/TripContext"; // Adjust the import path as needed


const regionalLocations = ["BakuDYV", "Ucar", "Agdas", "Gence", "Tovuz", "Agstafa"] as const;
type Location = typeof regionalLocations[number];
const schedule: Record<Location, string[]> = {
  BakuDYV: ["08:00", "12:00", "16:00"],
  Ucar: ["09:00", "13:00", "17:00"],
  Agdas: ["09:30", "13:30", "17:30"],
  Gence: ["10:00", "14:00", "18:00"],
  Tovuz: ["10:30", "14:30", "18:30"],
  Agstafa: ["11:00", "15:00", "19:00"],
};


export default function Regional() {
  const { t } = useTranslation();
  const { getBookedSeats, loading: tripLoading } = useTrip();
  const totalSeats = 40;
  const seatPrice = 15;

  const [from, setFrom] = useState<Location | "">("");
  const [to, setTo] = useState<Location | "">("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [bookedSeats, setBookedSeats] = useState<number[]>([]);
  const [loadingSeats, setLoadingSeats] = useState(false);

  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showSeats, setShowSeats] = useState(false);
  const seatsAnim = useState(new Animated.Value(0))[0];

  // Format date to YYYY-MM-DD
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Fetch booked seats when trip details change
  useEffect(() => {
    const fetchBookedSeats = async () => {
      if (from && to && date && time) {
        setLoadingSeats(true);
        const formattedDate = formatDate(date);
        
        try {
          const result = await getBookedSeats(from, to, formattedDate, time);
          if (result.success && result.bookedSeats) {
            setBookedSeats(result.bookedSeats);
            // Remove any selected seats that are now booked
            setSelectedSeats(prev => prev.filter(seat => !result.bookedSeats?.includes(seat)));
          } else {
            setBookedSeats([]);
          }
        } catch (error) {
          console.error('Error fetching booked seats:', error);
          setBookedSeats([]);
        } finally {
          setLoadingSeats(false);
        }
      }
    };

    fetchBookedSeats();
  }, [from, to, date, time]);

  const toggleSeats = () => {
    Animated.timing(seatsAnim, {
      toValue: showSeats ? 0 : 1,
      duration: 350,
      useNativeDriver: false,
    }).start(() => setShowSeats(!showSeats));
  };

  const seatRows = [];
  for (let i = 1; i <= totalSeats; i += 4) {
    seatRows.push([i, i + 1, i + 2, i + 3]);
  }

  const toggleSeat = (seat: number) => {
    // Don't allow selecting booked seats
    if (bookedSeats.includes(seat)) {
      Alert.alert(t("error"), t("seatAlreadyBooked") || "This seat is already booked");
      return;
    }
    
    setSelectedSeats(prev => 
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const Seat = ({ n }: { n: number }) => {
    const isSelected = selectedSeats.includes(n);
    const isBooked = bookedSeats.includes(n);
    const animated = new Animated.Value(isSelected ? 1 : 0.9);
    Animated.spring(animated, { toValue: isSelected ? 1 : 0.9, useNativeDriver: true }).start();

    return (
      <Animated.View style={{ transform: [{ scale: animated }] }}>
        <TouchableOpacity
          onPress={() => toggleSeat(n)}
          disabled={isBooked}
          style={{
            width: 48, 
            height: 48, 
            marginHorizontal: 8, 
            borderRadius: 12,
            backgroundColor: isBooked ? "#ef4444" : isSelected ? "#1d5c87" : "#e5e7eb",
            justifyContent: "center", 
            alignItems: "center",
            opacity: isBooked ? 0.7 : 1,
          }}
        >
          <Text style={{ 
            color: isBooked || isSelected ? "#fff" : "#333", 
            fontWeight: "bold" 
          }}>
            {n}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const Card: React.FC<{ text: string; selected?: boolean; onPress: () => void }> = ({ text, selected = false, onPress }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 12, paddingHorizontal: 18, marginVertical: 4, borderRadius: 12,
        backgroundColor: selected ? "#1d5c87" : "#fff",
        borderWidth: 1, borderColor: selected ? "#1d5c87" : "#ccc"
      }}
    >
      <Text style={{ color: selected ? "#fff" : "#333", fontWeight: "bold" }}>{text}</Text>
    </TouchableOpacity>
  );

  const onChangeDate = (_: any, selected?: Date) => {
    const currentDate = selected ?? date;
    setDate(currentDate);
  };

  const validateBooking = () => {
    if (!from || !to || !time || selectedSeats.length === 0) {
      Alert.alert(t("error"), t("errorFillAll"));
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (from && schedule[from]) setTime(schedule[from][0]);
    if (from === to) setTo("");
  }, [from]);

  const Header = () => (
    <View style={{
      flexDirection: "row", alignItems: "center", paddingVertical: 16,
      paddingHorizontal: 20, backgroundColor: "#1d5c87",
    }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 16 }}>
        <Text style={{ color: "#fff", fontSize: 18 }}>←</Text>
      </TouchableOpacity>
      <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>{t("regional")}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* From */}
        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>{t("from")}</Text>
        <TouchableOpacity onPress={() => setShowFromDropdown(!showFromDropdown)}
          style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 10 }}>
          <Text>{from ? t(from.toLowerCase()) : t("selectCity")}</Text>
        </TouchableOpacity>
        {showFromDropdown && (
          <View style={{ marginBottom: 10 }}>
            {regionalLocations.filter(l => l !== to).map(l => (
              <Card key={l} text={t(l.toLowerCase())} selected={from === l}
                onPress={() => { setFrom(l); setShowFromDropdown(false); }} />
            ))}
          </View>
        )}

        {/* To */}
        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>{t("to")}</Text>
        <TouchableOpacity onPress={() => setShowToDropdown(!showToDropdown)}
          style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 10 }}>
          <Text>{to ? t(to.toLowerCase()) : t("selectCity")}</Text>
        </TouchableOpacity>
        {showToDropdown && (
          <View style={{ marginBottom: 10 }}>
            {regionalLocations.filter(l => l !== from).map(l => (
              <Card key={l} text={t(l.toLowerCase())} selected={to === l}
                onPress={() => { setTo(l); setShowToDropdown(false); }} />
            ))}
          </View>
        )}

        {/* Date */}
        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>{t("date")}</Text>
        <View style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 20 }}>
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={(e, d) => d && setDate(d)}
            minimumDate={new Date()}
            style={{ width: "100%", marginLeft: -10 }}
          />
        </View>

        {/* Time */}
        {from && (
          <>
            <Text style={{ fontWeight: "bold", marginBottom: 8 }}>{t("time")}</Text>
            <TouchableOpacity onPress={() => setShowTimeDropdown(!showTimeDropdown)}
              style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 10 }}>
              <Text>{time || t("selectTime")}</Text>
            </TouchableOpacity>
            {showTimeDropdown && (
              <View style={{ marginBottom: 20 }}>
                {schedule[from].map(ti => (
                  <Card key={ti} text={ti} selected={time === ti} onPress={() => { setTime(ti); setShowTimeDropdown(false); }} />
                ))}
              </View>
            )}
          </>
        )}

        {/* Seat Selection */}
        <TouchableOpacity onPress={toggleSeats} style={{ flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{t("selectSeats")}</Text>
          <Svg width={16} height={16} viewBox="0 0 24 24" style={{ marginLeft: 6, transform: [{ rotate: showSeats ? "180deg" : "0deg" }] }}>
            <Path d="M12 16l-6-6h12l-6 6z" />
          </Svg>
        </TouchableOpacity>

        {/* Legend */}
        {showSeats && (
          <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 15, gap: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 20, height: 20, backgroundColor: "#e5e7eb", borderRadius: 4, marginRight: 6 }} />
              <Text style={{ fontSize: 12 }}>{t("available") || "Available"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 20, height: 20, backgroundColor: "#1d5c87", borderRadius: 4, marginRight: 6 }} />
              <Text style={{ fontSize: 12 }}>{t("selected") || "Selected"}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ width: 20, height: 20, backgroundColor: "#ef4444", borderRadius: 4, marginRight: 6 }} />
              <Text style={{ fontSize: 12 }}>{t("booked") || "Booked"}</Text>
            </View>
          </View>
        )}

        {loadingSeats && showSeats && (
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <ActivityIndicator size="large" color="#1d5c87" />
            <Text style={{ marginTop: 10, color: "#666" }}>{t("loadingSeats") || "Loading seats..."}</Text>
          </View>
        )}

        <Animated.View style={{ 
          overflow: "hidden", 
          height: seatsAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 600] }), 
          opacity: seatsAnim, 
          alignItems: "center", 
          marginBottom: 30 
        }}>
          {seatRows.map((row, i) => (
            <View key={i} style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
              <Seat n={row[0]} />
              <Seat n={row[1]} />
              <View style={{ width: 28 }} />
              <Seat n={row[2]} />
              <Seat n={row[3]} />
            </View>
          ))}
        </Animated.View>

        {/* Summary */}
        {selectedSeats.length > 0 && (
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>{t("youSelected")}</Text>
            <Text style={{ marginTop: 6, fontWeight: "bold", fontSize: 16, color: "#1d5c87" }}>
              {selectedSeats.join(", ")}
            </Text>
            <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
              {t("total")}: {selectedSeats.length * seatPrice} ₼
            </Text>
          </View>
        )}

        {/* Buy Button */}
        <TouchableOpacity
          onPress={() => {
            if (!validateBooking()) return;
            router.push({
              pathname: "/(auth)/ticket-success",
              params: { 
                from, 
                to, 
                date: formatDate(date), 
                time, 
                seats: selectedSeats.join(","), 
                total: selectedSeats.length * seatPrice 
              },
            });
          }}
          style={{
            backgroundColor: !from || !to || !time || selectedSeats.length === 0 ? "#94a3b8" : "#1d5c87",
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: "center",
            marginBottom: 30,
          }}
          disabled={!from || !to || !time || selectedSeats.length === 0}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>{t("buy")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}