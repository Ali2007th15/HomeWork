import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

const newsData = [
  { title: "Заголовок 1", text: "Текст новости 1", date: "20.11.2025", image: require("../../assets/news1.png") },
  { title: "Заголовок 2", text: "Текст новости 2", date: "19.11.2025", image: require("../../assets/news2.png") },
  { title: "Заголовок 3", text: "Текст новости 3", date: "18.11.2025", image: require("../../assets/news3.png") },
  { title: "Заголовок 4", text: "Текст новости 4", date: "17.11.2025", image: require("../../assets/news4.png") },
  { title: "Заголовок 5", text: "Текст новости 5", date: "16.11.2025", image: require("../../assets/news5.png") },
  { title: "Заголовок 6", text: "Текст новости 6", date: "15.11.2025", image: require("../../assets/news6.png") },
];

export default function NewsMobile() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Новости</Text>
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
    backgroundColor: "#0f1118",
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1d5c87",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#1a1c25",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
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
    color: "#fff",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    color: "#b8bcc0",
    marginBottom: 8,
  },
  cardDate: {
    fontSize: 12,
    color: "#888c94",
    textAlign: "right",
  },
});
