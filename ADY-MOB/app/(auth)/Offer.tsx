import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  Pressable, 
  StyleSheet, 
  useColorScheme, 
  Dimensions
} from "react-native";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

interface CardProps {
  imageKey?: string;
  titleKey: string;
  textKey: string;
  extraTextKey?: string;
}

const images: { [key: string]: any } = {
  baggage: require("../../assets/980.webp"),
  pets: require("../../assets/5711.webp"),
  children: require("../../assets/5720.webp"),
};

const Card: React.FC<CardProps> = ({ imageKey, titleKey, textKey, extraTextKey }) => {
  const [expanded, setExpanded] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const { t } = useTranslation();
  const toggleReadMore = () => setExpanded(!expanded);

  return (
    <View style={[styles.card, isDark && styles.cardDark]}>
      {imageKey && (
        <View style={styles.cardImg}>
          <Image source={images[imageKey]} style={styles.image} resizeMode="cover" />
        </View>
      )}
      <Text style={[styles.cardTitle, isDark && styles.cardTitleDark]}>{t(titleKey)}</Text>
      <Text style={[styles.cardText, isDark && styles.cardTextDark]} numberOfLines={expanded ? 20 : 4}>
        {t(textKey)} {expanded && extraTextKey && <Text>{t(extraTextKey)}</Text>}
      </Text>
      <Pressable onPress={toggleReadMore}>
        <Text style={[styles.cardLinkText, isDark && styles.cardLinkTextDark]}>
          {expanded ? t("showLess") : t("readMore")} <Text style={styles.chev}>›</Text>
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
      titleKey: "luggageTitle",
      textKey: "luggageText",
      extraTextKey: "luggageExtraText", // можно добавить отдельный ключ для доп. текста
    },
    {
      id: "2",
      imageKey: "pets",
      titleKey: "petsTitle",
      textKey: "petsText",
      extraTextKey: "petsExtraText",
    },
    {
      id: "3",
      imageKey: "children",
      titleKey: "kidsTitle",
      textKey: "kidsText",
      extraTextKey: "kidsExtraText",
    },
  ];

  return (
    <View style={styles.cardsWrap}>
      {data.map((item) => (
        <Card
          key={item.id}
          imageKey={item.imageKey}
          titleKey={item.titleKey}
          textKey={item.textKey}
          extraTextKey={item.extraTextKey}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsWrap: {
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 36,
    paddingHorizontal: 26,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#14141e",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    width: width - 70,
  },
  cardDark: {
    backgroundColor: "#1a1d23",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 26,
  },
  cardImg: {
    alignItems: "center",
    justifyContent: "center",
    
    width: 215,
    height: 190,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 28,
  },
  image: {
    
    width: "100%",
    height: "100%",
  },
  cardTitle: {
    textAlign: "center",
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
