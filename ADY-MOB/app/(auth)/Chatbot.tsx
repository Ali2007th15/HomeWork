import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Pressable,
    StyleSheet,
    SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";

type Message = {
    id: string;
    sender: "user" | "bot";
    text: string;
    time: Date;
};

type Question = {
    icon: string;
    text: string;
};

const ChatBotScreen: React.FC = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const [messages, setMessages] = useState<Message[]>([]);
    const [typing, setTyping] = useState(false);

    const flatListRef = useRef<FlatList<Message>>(null);

    useEffect(() => {
        setMessages([
            {
                id: "1",
                sender: "bot",
                text: t("initialMessage"),
                time: new Date()
            }
        ]);
    }, [t]);

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const generateResponse = (text: string) => {
        const msg = text.toLowerCase();

        if (msg.includes("ticket") || msg.includes("bilet")) return t("booking");
        if (msg.includes("route")) return t("routes3");
        if (msg.includes("refund")) return t("refund");
        if (msg.includes("pet")) return t("pets");
        if (msg.includes("baggage")) return t("baggage");
        if (msg.includes("schedule")) return t("schedule");

        return t("default");
    };

    const sendQuestion = (question: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: question,
            time: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setTyping(true);

        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                text: generateResponse(question),
                time: new Date()
            };

            setMessages(prev => [...prev, botMsg]);
            setTyping(false);
        }, 700);
    };

    const questions: Question[] = [
        { icon: "🎫", text: t("bookTicket") },
        { icon: "🚂", text: t("trainRoutes") },
        { icon: "💰", text: t("refundPolicy") },
        { icon: "🎒", text: t("baggageAllowance") },
        { icon: "🐕", text: t("bringPet") },
        { icon: "⏰", text: t("trainSchedules") }
    ];

    const formatTime = (date: Date) =>
        `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;

    const renderItem = ({ item }: { item: Message }) => (
        <View style={[
            styles.msgRow,
            item.sender === "user" ? styles.right : styles.left
        ]}>
            <View style={[
                styles.bubble,
                item.sender === "user" ? styles.userBubble : styles.botBubble
            ]}>
                <Text style={[
                    styles.msgText,
                    item.sender === "user" ? styles.userText : styles.botText
                ]}>
                    {item.text}
                </Text>

                <Text style={styles.time}>
                    {formatTime(item.time)}
                </Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>

            {}
            <View style={styles.header}>

                {}
                <Pressable onPress={() => router.back()} style={styles.backBtn}>
                    <Ionicons name="chevron-back" size={26} color="#fff" />
                </Pressable>

                <Ionicons name="chatbubbles" size={20} color="#fff" />
                <Text style={styles.title}>{t("title7")}</Text>
            </View>

            {}
            <FlatList
                ref={flatListRef}
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.chat}
            />

            {typing && (
                <Text style={styles.typing}>typing...</Text>
            )}

            {}
            <View style={styles.bottom}>
                <Text style={styles.quickTitle}>
                    {t("quickQuestions")}
                </Text>

                <View style={styles.grid}>
                    {questions.map((q, i) => (
                        <Pressable
                            key={i}
                            style={styles.card}
                            onPress={() => sendQuestion(q.text)}
                        >
                            <View style={styles.cardRow}>
                                <Text style={styles.icon}>{q.icon}</Text>
                                <Text style={styles.cardText} numberOfLines={2}>
                                    {q.text}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0a1929"
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 14,
        backgroundColor: "#1d5c87",
        gap: 8
    },

    backBtn: {
        marginRight: 5
    },

    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },

    chat: {
        padding: 12,
        paddingBottom: 10
    },

    msgRow: {
        flexDirection: "row",
        marginVertical: 6
    },

    left: {
        justifyContent: "flex-start"
    },

    right: {
        justifyContent: "flex-end"
    },

    bubble: {
        maxWidth: "75%",
        padding: 12,
        borderRadius: 16
    },

    userBubble: {
        backgroundColor: "#1d5c87",
        borderBottomRightRadius: 4
    },

    botBubble: {
        backgroundColor: "#fff",
        borderBottomLeftRadius: 4
    },

    msgText: {
        fontSize: 14
    },

    userText: {
        color: "#fff"
    },

    botText: {
        color: "#111"
    },

    time: {
        fontSize: 10,
        opacity: 0.5,
        marginTop: 4
    },

    typing: {
        paddingLeft: 12,
        color: "#aaa"
    },

    bottom: {
        padding: 12,
        backgroundColor: "#0f1b33"
    },

    quickTitle: {
        color: "#aaa",
        marginBottom: 10,
        fontWeight: "600"
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10
    },

    card: {
        width: "47%",
        backgroundColor: "#1e2139",
        borderRadius: 14,
        padding: 12,
        borderWidth: 1,
        borderColor: "#2a3a5f"
    },

    cardRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },

    icon: {
        fontSize: 18
    },

    cardText: {
        flex: 1,
        color: "#ddd",
        fontSize: 12
    }
});
export default ChatBotScreen;