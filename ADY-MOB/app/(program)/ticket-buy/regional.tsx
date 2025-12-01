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
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

const regionalLocations = ["Baku", "Ucar", "Agdas", "Gence", "Tovuz", "Agstafa"] as const;
type Location = typeof regionalLocations[number];
const schedule: Record<Location, string[]> = {
  Baku: ["08:00", "12:00", "16:00"],
  Ucar: ["09:00", "13:00", "17:00"],
  Agdas: ["09:30", "13:30", "17:30"],
  Gence: ["10:00", "14:00", "18:00"],
  Tovuz: ["10:30", "14:30", "18:30"],
  Agstafa: ["11:00", "15:00", "19:00"],
};

export default function Regional() {
  const totalSeats = 40;
  const seatPrice = 15;
  const [from, setFrom] = useState<Location | "">("");
  const [to, setTo] = useState<Location | "">("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [showSeats, setShowSeats] = useState(false);
  const seatsAnim = useState(new Animated.Value(0))[0];
  const toggleSeats = () => {
    Animated.timing(seatsAnim, {
      toValue: showSeats ? 0 : 1,
      duration: 350,
      useNativeDriver: false,
    }).start(() => setShowSeats(!showSeats));
  };

  const seatRows = [];
  for (let i = 1; i <= totalSeats; i += 4) seatRows.push([i, i + 1, i + 2, i + 3, i + 4]);

  const toggleSeat = (seat: number) => {
    setSelectedSeats(prev => prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]);
  };

  const Seat = ({ n }: { n: number }) => {
    const isSelected = selectedSeats.includes(n);
    const animated = new Animated.Value(isSelected ? 1 : 0.9);
    Animated.spring(animated, { toValue: isSelected ? 1 : 0.9, useNativeDriver: true }).start();

    return (
      <Animated.View style={{ transform: [{ scale: animated }] }}>
        <TouchableOpacity
          onPress={() => toggleSeat(n)}
          style={{
            width: 48, height: 48, marginHorizontal: 8, borderRadius: 12,
            backgroundColor: isSelected ? "#1d5c87" : "#e5e7eb",
            justifyContent: "center", alignItems: "center"
          }}
        >
          <Text style={{ color: isSelected ? "#fff" : "#333", fontWeight: "bold" }}>{n}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  type CardProps = {
    text: string;
    selected?: boolean;
    onPress: () => void;
  };

  const Card: React.FC<CardProps> = ({ text, selected = false, onPress }) => (
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

  const onChangeDate = (_: any, selected?: Date | undefined) => {
    const currentDate = selected ?? date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const validateBooking = () => {
    if (!from || !to || !time || selectedSeats.length === 0) {
      Alert.alert("Ошибка", "Пожалуйста, заполните все поля и выберите место");
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
      borderBottomLeftRadius: 12, borderBottomRightRadius: 12
    }}>
      <TouchableOpacity onPress={() => router.back()} style={{ marginRight: 16 }}>
        <Text style={{ color: "#fff", fontSize: 18 }}>←</Text>
      </TouchableOpacity>
      <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Региональные рейсы</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Откуда</Text>
        <TouchableOpacity onPress={() => setShowFromDropdown(!showFromDropdown)}
          style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 10 }}>
          <Text>{from || "Выберите город"}</Text>
        </TouchableOpacity>

        {showFromDropdown && (
          <View style={{ marginBottom: 10 }}>
            {regionalLocations.filter(l => l !== to).map(l => (
              <Card key={l} text={l} selected={from === l}
                onPress={() => { setFrom(l); setShowFromDropdown(false); }} />
            ))}
          </View>
        )}

        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Куда</Text>
        <TouchableOpacity onPress={() => setShowToDropdown(!showToDropdown)}
          style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 10 }}>
          <Text>{to || "Выберите город"}</Text>
        </TouchableOpacity>

        {showToDropdown && (
          <View style={{ marginBottom: 10 }}>
            {regionalLocations.filter(l => l !== from).map(l => (
              <Card key={l} text={l} selected={to === l}
                onPress={() => { setTo(l); setShowToDropdown(false); }} />
            ))}
          </View>
        )}

        <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Дата</Text>
<View
  style={{
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  }}
>
  <DateTimePicker
    value={date}
    mode="date"
    display="default"
    onChange={(event, selectedDate) => {
      if (selectedDate) setDate(selectedDate); // обновляем дату
    }}
    minimumDate={new Date()}
    style={{ width: "100%", marginLeft: -10 }}
  />
</View>

        {from !== "" && (
          <>
            <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Время</Text>
            <TouchableOpacity onPress={() => setShowTimeDropdown(!showTimeDropdown)}
              style={{ padding: 14, borderRadius: 12, borderWidth: 1, borderColor: "#ccc", marginBottom: 10 }}>
              <Text>{time || "Выберите время"}</Text>
            </TouchableOpacity>

            {showTimeDropdown && (
              <View style={{ marginBottom: 20 }}>
                {schedule[from].map(t => (
                  <Card key={t} text={t} selected={time === t}
                    onPress={() => { setTime(t); setShowTimeDropdown(false); }} />
                ))}
              </View>
            )}
          </>
        )}

        <TouchableOpacity
          onPress={toggleSeats}
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 , marginBottom: 20 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Выбор мест</Text>
          <Svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            style={{
              marginLeft: 6,
              transform: [{ rotate: showSeats ? "180deg" : "0deg" }],
            }}
          >
            <Path d="M12 16l-6-6h12l-6 6z" />
          </Svg>
        </TouchableOpacity>

        <Animated.View style={{
          overflow: "hidden",
          height: seatsAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 600] }),
          opacity: seatsAnim,
          alignItems: "center",
          marginBottom: 30,
        }}>
          {seatRows.map((row, i) => (
            <View key={i} style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
              <Seat n={row[0]} /><Seat n={row[1]} /><View style={{ width: 28 }} />
              <Seat n={row[2]} /><Seat n={row[3]} />
            </View>
          ))}
        </Animated.View>

        {selectedSeats.length > 0 && (
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Вы выбрали:</Text>
            <Text style={{ marginTop: 6, fontWeight: "bold", fontSize: 16, color: "#1d5c87" }}>
              {selectedSeats.join(", ")}
            </Text>
            <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 18 }}>
              Сумма: {selectedSeats.length * seatPrice} ₼
            </Text>
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            if (!validateBooking()) return;
            router.push({
              pathname: "/ticket-buy/ticket-success",
              params: {
                from, to,
                date: date.toLocaleDateString(),
                time,
                seats: selectedSeats.join(","),
                total: selectedSeats.length * seatPrice,
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
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Купить</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
