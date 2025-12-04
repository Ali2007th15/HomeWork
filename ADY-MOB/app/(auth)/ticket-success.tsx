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
import { useTranslation } from "react-i18next";

export default function TicketSuccess() {
  const { t } = useTranslation();
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
      Alert.alert(t("error"), t("alertFillAll"));
      return false;
    }
    if (!email.trim()) {
      Alert.alert(t("error"), t("alertFillAll"));
      return false;
    }
    if (!phone.trim()) {
      Alert.alert(t("error"), t("alertFillAll"));
      return false;
    }
    if (trip.seats.length === 0) {
      Alert.alert(t("error"), t("errorFillAll"));
      return false;
    }
    return true;
  };

  const handleConfirmBooking = () => {
    if (!validateFields()) return;
    Alert.alert(t("successMessage"), t("your booking status"));
    router.push("/(program)/Home");
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: t("your booking status"),
          headerBackTitle: t("back"),
        }}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Заголовок с кнопкой Назад */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>{t("passenger information")}</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>{t("fullname")}</Text>
            <TextInput
              style={styles.input}
              value={fullname}
              onChangeText={setFullname}
              placeholder={t("fullname")}
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>{t("email address")}</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder={t("email address")}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>{t("phone number")}</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder={t("phone number")}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <Text style={styles.cardTitle}>{t("your booking status")}</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{t("trip details")}</Text>
          <Text style={styles.infoText}>{t("from")}: {trip.from}</Text>
          <Text style={styles.infoText}>{t("to")}: {trip.to}</Text>
          <Text style={styles.infoText}>{t("date")}: {trip.date}</Text>
          <Text style={styles.infoText}>{t("time")}: {trip.time}</Text>

          <View style={styles.seatBox}>
            <Text style={{ fontWeight: "600" }}>{t("selected seats")}</Text>
            <Text>{trip.seats.length > 0 ? trip.seats.join(", ") : t("no seats selected")}</Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={{ fontWeight: "600" }}>{t("total")}</Text>
            <Text style={{ fontWeight: "700", fontSize: 18 }}>{trip.totalPrice} ₼</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
            <Text style={styles.buttonText}>{t("proceed to pay")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 45,
  },
 
  backButtonText: { fontSize: 26, fontWeight: "900" } ,
  pageTitle: { fontSize: 22, fontWeight: "600", flex: 1, textAlign: "center", marginRight: 23},
  cardTitle: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700", textAlign: "center", marginBottom: 15 },
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
  seatBox: { backgroundColor: "#f1f5f9", padding: 12, borderRadius: 10, marginTop: 10 },
  priceBox: { backgroundColor: "#f1f5f9", padding: 12, borderRadius: 10, marginTop: 10 },
  button: { backgroundColor: "#1d5c87", paddingVertical: 15, borderRadius: 10, marginTop: 10, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
