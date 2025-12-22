import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

export default function NewsMobile() {
   <StatusBar barStyle="light-content" />
  const { t } = useTranslation();

  const newsData = [
    {
      title: t("title1"),
      text: t("text1"),
      date: t("date1"),
      image: require("../../assets/news1.png"),
    },
    {
      title: t("title2"),
      text: t("text2"),
      date: t("date2"),
      image: require("../../assets/news2.png"),
    },
    {
      title: t("title3"),
      text: t("text3"),
      date: t("date3"),
      image: require("../../assets/news3.png"),
    },
    {
      title: t("title4"),
      text: t("text4"),
      date: t("date4"),
      image: require("../../assets/news4.png"),
    },
    {
      title: t("title5"),
      text: t("text5"),
      date: t("date5"),
      image: require("../../assets/news5.png"),
    },
    {
      title: t("title6"),
      text: t("text6"),
      date: t("date6"),
      image: require("../../assets/news6.png"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>{t("sectionTitle")}</Text>

      {newsData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card} activeOpacity={0.8}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1d5c87",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#cbcacaff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#555555",
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 12,
    color: "#888c94",
    textAlign: "right",
  },
});