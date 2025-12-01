import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { router, Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";

export default function TicketSuccess() {
  const params = useSearchParams();

  const [fullname, setFullname] = useState(params.get?.("fullname") || "");
  const [email, setEmail] = useState(params.get?.("email") || "");
  const [phone, setPhone] = useState(params.get?.("phone") || "");

  const trip = {
    from: params.get?.("from") || "",
    to: params.get?.("to") || "",
    date: params.get?.("date") || "",
    time: params.get?.("time") || "",
    seats: params.get?.("seats")?.split(",") || [],
    totalPrice: params.get?.("total") || 0,
  };

  const validateFields = () => {
    if (!fullname.trim()) {
      Alert.alert("Ошибка", "Введите полное имя");
      return false;
    }
    if (!email.trim()) {
      Alert.alert("Ошибка", "Введите email");
      return false;
    }
    if (!phone.trim()) {
      Alert.alert("Ошибка", "Введите номер телефона");
      return false;
    }
    if (trip.seats.length === 0) {
      Alert.alert("Ошибка", "Выберите хотя бы одно место");
      return false;
    }
    return true;
  };

  const handleConfirmBooking = () => {
    if (!validateFields()) return;
    Alert.alert("Успех", "Бронь подтверждена!");
    router.push("/(program)/Home");
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "Your Booking",
          headerBackTitle: "Назад",
        }}
      />
      <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "#f9fafb" }}>
        <Text style={styles.pageTitle}>Passenger Information</Text>

        <View style={styles.card}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={fullname}
              onChangeText={setFullname}
              placeholder="Enter full name"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="example@gmail.com"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="0999077707"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <Text style={styles.pageTitle}>Your Booking</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Trip Details</Text>
          <Text style={styles.infoText}>From: {trip.from}</Text>
          <Text style={styles.infoText}>To: {trip.to}</Text>
          <Text style={styles.infoText}>Date: {trip.date}</Text>
          <Text style={styles.infoText}>Time: {trip.time}</Text>

          <View style={styles.seatBox}>
            <Text style={{ fontWeight: "600" }}>Seats:</Text>
            <Text>{trip.seats.length > 0 ? trip.seats.join(", ") : "No seats selected"}</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={{ fontWeight: "600" }}>Total:</Text>
            <Text style={{ fontWeight: "700", fontSize: 18 }}>{trip.totalPrice} ₼</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
            <Text style={styles.buttonText}>Confirm Booking</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 15,
  },
  inputBlock: { marginBottom: 12 },
  label: { fontWeight: "500", marginBottom: 4 },
  input: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  infoText: { fontSize: 16, marginBottom: 4 },
  seatBox: {
    backgroundColor: "#f1f5f9",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  priceBox: {
    backgroundColor: "#f1f5f9",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#1d5c87",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
