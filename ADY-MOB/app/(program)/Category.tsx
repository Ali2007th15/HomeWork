import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { useTranslation } from "react-i18next";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TrainCategories() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<string | null>(null);

    const toggle = (category: string) => {
      LayoutAnimation.easeInEaseOut();
      setOpen(open === category ? null : category);
    };

  return (
    <ScrollView contentContainerStyle={styles.container} >
        
      <Text style={styles.title}>{t("choose category")}</Text>

      {/* ===== ABSHERON CARD ===== */}
      <TouchableOpacity activeOpacity={0.9} onPress={() => toggle("absheron")}>
        <View style={styles.cardWrapper}>
          <BlurView intensity={30} tint="dark" style={styles.card}>
            

            {/* Фото */}
            <Image
              source={require("../../assets/Baku.png")}
              style={styles.cardImage}
            />

            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle}>{t("absheron")}</Text>
                <Text style={styles.cardSubtitle}>
                  {open === "absheron" ? t("hideInfo") : t("showInfo")}
                </Text>
              </View>

              <View style={styles.iconCircle}>
                <Text style={{ color: "white", fontSize: 18 }}>🚆</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </TouchableOpacity>

      {open === "absheron" && (
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>{t("absheron")}</Text>
          <Text style={styles.infoText}>{t("text10")}</Text>
        </View>
      )}

      {/* ===== REGIONAL CARD ===== */}
      <TouchableOpacity activeOpacity={0.9} onPress={() => toggle("regional")}>
        <View style={styles.cardWrapper}>
          <BlurView intensity={30} tint="dark" style={styles.card}>
          

            <Image
              source={require("../../assets/Aze2.png")}
              style={styles.cardImage}
            />

            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle}>{t("regional")}</Text>
                <Text style={styles.cardSubtitle}>
                  {open === "regional" ? t("hideInfo") : t("showInfo")}
                </Text>
              </View>

              <View
                style={[
                  styles.iconCircle,
                
                ]}
              >
                <Text style={{ color: "white", fontSize: 18 }}>🌍</Text>
              </View>
            </View>
          </BlurView>
        </View>
      </TouchableOpacity>

      {open === "regional" && (
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>{t("regional")}</Text>
          <Text style={styles.infoText}>{t("text11")}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    padding: 25,
    paddingBottom: 100,
    backgroundColor: "#FFFFFF", // <- Белый фон
  },

  title: {
    color: "#000000", // <- Сделаем текст чёрным
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 25,
  },

  cardWrapper: {
    marginTop: 20,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "rgba(0,0,0,0.05)", // светлый фон для карточки
    borderRadius: 24,
    overflow: "hidden",
    height: 250,
    padding: 0,
  },

  cardImage: {
    width: "100%",
    height: 250,
    marginTop: 3,
    opacity: 0.7,
  },

  cardContent: {
    position: "absolute",
    bottom: 18,
    left: 18,
    right: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000", // черный текст
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#555555", // немного серый
    marginTop: 3,
  },

  iconCircle: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(0,0,0,0.1)", // светлый круг
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  infoBox: {
    backgroundColor: "#f0f0f0", // светлый фон для блока с информацией
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.06)",
  },

  infoHeader: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },

  infoText: {
    color: "#333333",
    lineHeight: 22,
    fontSize: 15,
  },
});