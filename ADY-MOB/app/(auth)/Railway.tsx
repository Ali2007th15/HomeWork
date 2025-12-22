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
  Dimensions
} from "react-native";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

const RailwaySection = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
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
              />
              <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                <Text style={styles.submitBtnText}>{t("submit")}</Text>
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
  scrollContainer: {
    padding: 20,

    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 25,
    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 6 },
    maxWidth: 700,
  },

  content: {
    width: "100%",
    alignItems: "center",
  },

  consultBtn: {
    backgroundColor: "#EBF1FF",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 14,
    marginBottom: 18,
  },
  consultBtnText: {
    color: "#1a3c91",
    fontWeight: "700",
    fontSize: 16,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#15234A",
    textAlign: "center",
    marginBottom: 25,
  },

  list: {
    width: "100%",
    marginBottom: 25,
  },
  listItem: {
    fontSize: 17,
    color: "#24335C",
    marginBottom: 12,
    lineHeight: 26,
    fontWeight: "500",
  },

  form: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1.3,
    borderColor: "#C7D3EA",
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },

  submitBtn: {
    backgroundColor: "#1a3c91",
    paddingHorizontal: 18,
    borderRadius: 14,
    justifyContent: "center",
  },
  submitBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  success: {
    color: "#2d8b4b",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default RailwaySection;