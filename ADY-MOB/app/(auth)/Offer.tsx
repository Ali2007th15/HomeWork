import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  Pressable, 
  FlatList, 
  StyleSheet, 
  useColorScheme, 
  Dimensions 
} from "react-native";

const { width } = Dimensions.get("window");

interface CardProps {
  imageKey?: string;
  title: string;
  text: string;
  extraText?: string;
}

// Объект с изображениями
const images: { [key: string]: any } = {
  baggage: require("../../assets/980.webp"),
  pets: require("../../assets/5711.webp"),
  children: require("../../assets/5720.webp"),
};

const Card: React.FC<CardProps> = ({ imageKey, title, text, extraText }) => {
  const [expanded, setExpanded] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const toggleReadMore = () => setExpanded(!expanded);

  return (
    <View style={[styles.card, isDark && styles.cardDark]}>
      {imageKey ? (
        <View style={styles.cardImg}>
          <Image source={images[imageKey]} style={styles.image} resizeMode="cover" />
        </View>
      ) : null}
      <Text style={[styles.cardTitle, isDark && styles.cardTitleDark]}>{title}</Text>
      <Text style={[styles.cardText, isDark && styles.cardTextDark]} numberOfLines={expanded ? 20 : 4}>
        {text} {expanded && <Text>{extraText}</Text>}
      </Text>
      <Pressable onPress={toggleReadMore}>
        <Text style={[styles.cardLinkText, isDark && styles.cardLinkTextDark]}>
          {expanded ? "Show Less" : "Read More"} <Text style={styles.chev}>›</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const Cards = () => {
  const data = [
    {
      id: "1",
      imageKey: "baggage",
      title: "Багаж",
      text: "Вы можете взять с собой ручную кладь и зарегистрированный багаж.",
      extraText: " Максимальный вес багажа зависит от класса билета и направления.",
    },
    {
      id: "2",
      imageKey: "pets",
      title: "Питомцы",
      text: "Питомцы допускаются к перевозке на борту самолета.",
      extraText: " Для этого необходимо заранее уведомить авиакомпанию и оформить соответствующие документы.",
    },
    {
      id: "3",
      imageKey: "children",
      title: "Дети",
      text: "Путешествие с детьми требует соблюдения особых правил.",
      extraText: " Например, детские кресла и сопровождение для детей младшего возраста.",
    },
  ];

  return (
    <FlatList
      contentContainerStyle={styles.cardsWrap}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          imageKey={item.imageKey}
          title={item.title}
          text={item.text}
          extraText={item.extraText}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardsWrap: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 36,
    paddingHorizontal: 26,
    alignItems: "center",
    marginBottom: 32,
    shadowColor: "#14141e",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    width: width - 40,
  },
  cardDark: {
    backgroundColor: "#1a1d23",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 26,
  },
  cardImg: {
    width: 215,
    height: 190,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 28,
    resizeMode: "cover",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
    color: "#181818",
  },
  cardTitleDark: {
    color: "#f4f4f4",
  },
  cardText: {
    textAlign: "center",
    fontSize: 15,
    color: "#6b6b6b",
    marginBottom: 24,
    lineHeight: 22,
  },
  cardTextDark: {
    color: "#a6a6a6",
  },
  cardLinkText: {
    color: "#153f5c",
    fontWeight: "600",
    fontSize: 15,
  },
  cardLinkTextDark: {
    color: "#1a4f75",
  },
  chev: {
    fontWeight: "700",
  },
});

export default Cards;
