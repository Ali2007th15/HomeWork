import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useAuthStore } from '../../stores/AuthStore'; 

const { width } = Dimensions.get('window');

export default function Home() {
  
  const { user } = useAuthStore();

  const nearbyServices = [
    {
      id: 1,
      name: 'Belle Curls',
      address: '0993 Novick Parkway',
      distance: '1.2 km',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bookmarked: true,
    },
    {
      id: 2,
      name: 'Pretty Parlor',
      address: '42 Fordem Avenue',
      distance: '1.4 km',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bookmarked: false,
    },
    {
      id: 3,
      name: 'Mia Bella',
      address: '57 Superior Trail',
      distance: '1.7 km',
      rating: '4.1',
      image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bookmarked: false,
    },
  ];

  const popularServices = [
    {
      id: 4,
      name: 'Hair Force',
      address: '815 Village Drive',
      distance: '3.4 km',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bookmarked: false,
    },
    {
      id: 5,
      name: 'Serenity Salon',
      address: '88 Commercial Plaza',
      distance: '4.2 km',
      rating: '4.0',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bookmarked: true,
    },
    {
      id: 6,
      name: "The Razor's Edge",
      address: '54 Artisan Avenue',
      distance: '4.5 km',
      rating: '4.6',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      bookmarked: false,
    },
  ];

  type Service = {
    id: number;
    name: string;
    address: string;
    distance: string;
    rating: string;
    image: string;
    bookmarked: boolean;
  };

  const ServiceCard = ({ service }: { service: Service }) => (
    <View style={styles.serviceCard}>
      <Image source={{ uri: service.image }} style={styles.serviceImage} />
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <Text style={styles.serviceAddress}>{service.address}</Text>
        <View style={styles.serviceStats}>
          <View style={styles.statItem}>
            <Icon name="location-pin" size={12} color="#666" style={styles.locationIcon} />
            <Text style={styles.distance}>{service.distance}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="star" size={12} color="#666" style={styles.starIcon} />
            <Text style={styles.rating}>{service.rating}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.bookmarkButton}>
        <Icon
          name={service.bookmarked ? 'bookmark' : 'bookmark-border'}
          size={16}
          color={service.bookmarked ? '#FF9500' : '#E0E0E0'}
          style={styles.bookmarkIcon}
        />
      </TouchableOpacity>
    </View>
  );


  const getDisplayName = () => {
    if (user?.name) {
      return user.name;
    }
  
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'İstifadəçi'; 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logo}>
                <Image
          source={require('../../assets/foto10.png')}
          style={styles.logoImage} />
            </View>
            <Text style={styles.brandName}>Byber</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton} onPress={() => {
                        router.push("/(auth)/Notifications");
                      }}>
              <Icon name="notifications" size={20} color="#333" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="bookmark" size={20} color="#333" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hərvaxtin xeyir,</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{getDisplayName()} 👋</Text>
            
          </View>
        </View>

        
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={16} color="#333" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Axtarış"
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="filter-alt" size={16} color="#333" style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        
        <View style={styles.specialOfferContainer}>
          <View style={styles.specialOffer}>
            <Text style={styles.discountBadge}>50% OFF</Text>
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>Today's Special</Text>
              <Text style={styles.offerLargeText}>30%</Text>
            </View>
            <Text style={styles.offerDescription}>
              Get a discount for every service order!{'\n'}Only valid for today!
            </Text>
            <View style={styles.offerIndicator}>
              <View style={[styles.dot, styles.activeDot]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>
        </View>

       
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Sizə Yaxın Ərazilardə</Text>
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.categoryButtonActive}>
              <Text style={styles.categoryTextActive}>Hamısı</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Saç kəsimi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Saqqal kəsimi</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.servicesContainer}>
          {nearbyServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </View>

        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>Hamısı gör</Text>
        </TouchableOpacity>

        
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.categoryButtonActive}>
              <Text style={styles.categoryTextActive}>Hamısı</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Saç kəsimi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Makiyaj</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryButton}>
              <Text style={styles.categoryText}>Masaj</Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.servicesContainer}>
          {popularServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </View>

        <TouchableOpacity style={styles.viewMoreButton}>
          <Text style={styles.viewMoreText}>Hamısını gör</Text>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoImage: {
    borderRadius: 25,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    fontSize: 30,
  },
  greetingContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  greeting: {
    fontSize: 35,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 35,
    fontWeight: '600',
    color: '#333',
  },
  waveEmoji: {
    fontSize: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    fontSize: 25,
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 25,
  },
  specialOfferContainer: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  specialOffer: {
    backgroundColor: '#FF9500',
    borderRadius: 16,
    padding: 20,
    position: 'relative',
  },
  discountBadge: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  offerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  offerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  offerLargeText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  offerDescription: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  offerIndicator: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  activeDot: {
    backgroundColor: '#fff',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  categoryButtonActive: {
    backgroundColor: '#FF9500',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryTextActive: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  categoryButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  servicesContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 8,
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  serviceAddress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  serviceStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationIcon: {
    fontSize: 15,
  },
  distance: {
    fontSize: 15,
    color: '#666',
  },
  starIcon: {
    fontSize: 15,
  },
  rating: {
    fontSize: 15,
    color: '#666',
  },
  bookmarkButton: {
    padding: 8,
  },
  bookmarkIcon: {
    fontSize: 30,
  },
  viewMoreButton: {
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 32,
  },
  viewMoreText: {
    color: '#FF9500',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 20,
  },
});