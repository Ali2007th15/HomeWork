import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { router, Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import { useTranslation } from "react-i18next";
import { useTrip } from "../context/TripContext";
import { useAuth } from "../context/AuthContext";

interface Trip {
  from: string;
  to: string;
  date: string;
  time: string;
  seats: string[];
  totalPrice: number;
}

interface EmailPayload {
  fullname: string;
  email: string;
  phone: string;
  trip: {
    from: string;
    to: string;
    date: string;
    time: string;
    seats: string[];
  };
  totalPrice: number;
}

export default function TicketSuccess() {
  const { t } = useTranslation();
  const params = useSearchParams();
  const { createTicket } = useTrip();
  const { user } = useAuth();

  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>(user?.email || "");
  const [phone, setPhone] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const trip: Trip = {
    from: params.get?.("from") || "",
    to: params.get?.("to") || "",
    date: params.get?.("date") || "",
    time: params.get?.("time") || "",
    seats: params.get?.("seats")?.split(",") || [],
    totalPrice: Number(params.get?.("total")) || 0,
  };

  const validateFields = (): boolean => {
    if (!fullname.trim()) {
      Alert.alert(t("error"), t("alertFillAll") || "Заполните все поля");
      return false;
    }
    if (!email.trim()) {
      Alert.alert(t("error"), t("alertFillAll") || "Заполните все поля");
      return false;
    }
    if (!phone.trim()) {
      Alert.alert(t("error"), t("alertFillAll") || "Заполните все поля");
      return false;
    }
    if (trip.seats.length === 0) {
      Alert.alert(t("error"), t("errorFillAll") || "Выберите места");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert(t("error"), t("invalidEmail") || "Неверный формат email");
      return false;
    }

    return true;
  };

  // Функция для отправки email
  const sendConfirmationEmail = async (ticketData: any): Promise<boolean> => {
    try {
    
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: ticketData.fullName,
          email: ticketData.email,
          phone: phone,
          trip: {
            from: ticketData.from,
            to: ticketData.to,
            date: ticketData.date,
            time: ticketData.time,
            seats: ticketData.seats.split(","),
          },
          totalPrice: ticketData.totalPrice,
        } as EmailPayload),
      });

      const result = await response.json();
      
      if (!response.ok) {
        console.error("Email sending failed:", result.message);
        return false;
      }
      
      console.log("✅ Email sent successfully");
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      return false;
    }
  };

  const handleConfirmBooking = async (): Promise<void> => {
    if (!validateFields()) return;

    if (!user || !user.email) {
      Alert.alert(
        t("error") || "Ошибка",
        t("loginRequired") || "Необходимо войти в систему"
      );
      router.push("/(auth)/MainLogin");
      return;
    }

    setIsLoading(true);

    try {
      // Формируем дату в формате для бэкенда
      const formattedDate = trip.date;

      const ticketData = {
        userId: 1, // Получите реальный userId из контекста
        fullName: fullname,
        email: email,
        from: trip.from,
        to: trip.to,
        date: formattedDate,
        time: trip.time,
        seats: trip.seats.join(","),
        totalPrice: trip.totalPrice,
      };

      // Создаем билет в базе данных
      const result = await createTicket(ticketData);

      if (result.success) {
        // Отправляем email подтверждение
        const emailSent = await sendConfirmationEmail(ticketData);
        
        if (emailSent) {
          Alert.alert(
            t("success"),
            t("ticketCreatedWithEmail") ,
            [
              {
                text: "OK",
                onPress: () => router.replace("/(program)/Home"),
              },
            ]
          );
        } else {
          Alert.alert(
            t("successMessage") || "Успешно",
            t("ticketCreatedNoEmail") || "Билет успешно забронирован! Но не удалось отправить email подтверждение.",
            [
              {
                text: "OK",
                onPress: () => router.replace("/(program)/Home"),
              },
            ]
          );
        }
      } else {
        Alert.alert(
          t("error") || "Ошибка",
          result.message || t("bookingFailed") || "Не удалось забронировать билет"
        );
      }
    } catch (error) {
      console.error("Booking error:", error);
      Alert.alert(
        t("error") || "Ошибка",
        t("serverError") || "Ошибка подключения к серверу"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: t("your booking status") || "Статус бронирования",
          headerBackTitle: t("back") || "Назад",
        }}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.pageTitle}>
            {t("passenger information") || "Информация о пассажире"}
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.inputBlock}>
            <Text style={styles.label}>{t("fullname") || "Полное имя"}</Text>
            <TextInput
              style={styles.input}
              value={fullname}
              onChangeText={setFullname}
              placeholder={t("fullname") || "Введите полное имя"}
              editable={!isLoading}
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>{t("email address") || "Email адрес"}</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder={t("email address") || "Введите email"}
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!isLoading}
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.label}>{t("phone number") || "Номер телефона"}</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder={t("phone number") || "Введите номер телефона"}
              keyboardType="phone-pad"
              editable={!isLoading}
            />
          </View>
        </View>

        <Text style={styles.cardTitle}>
          {t("your booking status") || "Детали бронирования"}
        </Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>{t("trip details") || "Детали поездки"}</Text>
          <Text style={styles.infoText}>
            {t("from") || "Откуда"}: {trip.from}
          </Text>
          <Text style={styles.infoText}>
            {t("to") || "Куда"}: {trip.to}
          </Text>
          <Text style={styles.infoText}>
            {t("date") || "Дата"}: {trip.date}
          </Text>
          <Text style={styles.infoText}>
            {t("time") || "Время"}: {trip.time}
          </Text>

          <View style={styles.seatBox}>
            <Text style={{ fontWeight: "600" }}>
              {t("selected seats") || "Выбранные места"}
            </Text>
            <Text>
              {trip.seats.length > 0
                ? trip.seats.join(", ")
                : t("no seats selected") || "Места не выбраны"}
            </Text>
          </View>

          <View style={styles.priceBox}>
            <Text style={{ fontWeight: "600" }}>{t("total") || "Итого"}</Text>
            <Text style={{ fontWeight: "700", fontSize: 18 }}>{trip.totalPrice} ₼</Text>
          </View>

          <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={handleConfirmBooking}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={styles.buttonText}>
                {t("proceed to pay") || "Перейти к оплате"}
              </Text>
            )}
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
  backButtonText: { fontSize: 26, fontWeight: "900" },
  pageTitle: {
    fontSize: 22,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginRight: 23,
  },
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
  buttonDisabled: {
    backgroundColor: "#1d5c8799",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});