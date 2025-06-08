import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const cards = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
];

export default function Page() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      {cards.map((card) => {
        const isSelected = selectedId === card.id;

        return (
          <TouchableOpacity
            key={card.id}
            style={[
              styles.card,
              isSelected && styles.cardSelected,
            ]}
            onPress={() => setSelectedId(card.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.text}>{card.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    width: "45%",
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  cardSelected: {
    backgroundColor: "orange",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
