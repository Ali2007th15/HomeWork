import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface NotificationItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  date?: string;
}

export default function Notifications() {
  const notifications: NotificationItem[] = [
    {
      id: '1',
      title: "Today's Special Offers",
      subtitle: "You get a special promo today!",
      icon: "wallet",
      iconColor: "#F97316",
      date: "Bu gün"
    },
    {
      id: '2',
      title: "Today's Special Offers",
      subtitle: "You get a special promo today!",
      icon: "star",
      iconColor: "#EAB308",
      date: "Dünan"
    },
    {
      id: '3',
      title: "Credit Card Connected!",
      subtitle: "Credit Card has been linked!",
      icon: "card",
      iconColor: "#3B82F6",
      date: "11 dekabr 2024"
    },
    {
      id: '4',
      title: "Account Setup Successful!",
      subtitle: "Your account has been created!",
      icon: "person",
      iconColor: "#10B981",
      date: "11 dekabr 2024"
    }
  ];

  const renderDateSection = (date: string, items: NotificationItem[]) => (
    <View key={date} style={styles.dateSection}>
      <Text style={styles.dateTitle}>{date}</Text>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.notificationItem}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: item.iconColor }]}>
            <Ionicons name={item.icon as any} size={24} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Group notifications by date
  const groupedNotifications = notifications.reduce((acc, notification) => {
    const date = notification.date || '';
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(notification);
    return acc;
  }, {} as Record<string, NotificationItem[]>);

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.backButton} onPress={() => {
                        router.push("/(program)/Home");
                      }}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Bildirişlər</Text>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {Object.entries(groupedNotifications).map(([date, items]) =>
          renderDateSection(date, items)
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 60,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
 
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: '600',
    color: '#111827',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  dateSection: {
    marginBottom: 24,
  },
  dateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
});

