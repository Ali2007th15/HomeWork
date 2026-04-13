import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/react-native";

const RailwaySection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {

    if (!email.includes("@")) {
      Alert.alert("Ошибка", "Введите корректный email");
      return;
    }

    setLoading(true);

    try {

      await emailjs.send(
       "service_ktivsrk",
  "template_4bwkcfi",
  { user_email: email },
  { publicKey: "AqrDaRC1_m2IUjEpa" }
      );

      setSubmitted(true);
      setEmail("");

      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      Alert.alert("Ошибка", "Не удалось отправить сообщение");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.content}>
            <TouchableOpacity style={styles.consultBtn}>
              <Text style={styles.consultBtnText}>{t("consultation")}</Text>
            </TouchableOpacity>

            <Text style={styles.title}>{t("title")}</Text>

            <View style={styles.list}>
              <Text style={styles.listItem}>✔ {t("point1")}</Text>
              <Text style={styles.listItem}>✔ {t("point2")}</Text>
              <Text style={styles.listItem}>✔ {t("point3")}</Text>
              <Text style={styles.listItem}>✔ {t("point4")}</Text>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder={t("placeholder")}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loading}
              />
              <TouchableOpacity
                style={[styles.submitBtn, loading && { opacity: 0.6 }]}
                onPress={handleSubmit}
                disabled={loading}
              >
                <Text style={styles.submitBtnText}>
                  {loading ? "..." : t("submit")}
                </Text>
              </TouchableOpacity>
            </View>

            {submitted && (
              <Text style={styles.success}>{t("successMessage")}</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { padding: 20, alignItems: "center" },
  cardContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    maxWidth: 500,
  },
  content: { width: "100%", alignItems: "center" },
  consultBtn: {
    backgroundColor: "#EBF1FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  consultBtnText: { color: "#1a3c91", fontWeight: "700" },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#15234A",
    textAlign: "center",
    marginBottom: 20,
  },
  list: { width: "100%", marginBottom: 20 },
  listItem: { fontSize: 16, color: "#24335C", marginBottom: 8 },
  form: { flexDirection: "row", width: "100%" },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#C7D3EA",
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    backgroundColor: "#fff",
  },
  submitBtn: {
    backgroundColor: "#1a3c91",
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: "center",
  },
  submitBtnText: { color: "#fff", fontWeight: "700" },
  success: { color: "#2d8b4b", marginTop: 15, fontWeight: "600" },
});

export default RailwaySection;