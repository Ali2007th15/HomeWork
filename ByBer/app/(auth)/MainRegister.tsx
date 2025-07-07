import React from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function MainRegister() {
 
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
    
    <TouchableOpacity style={styles.backButton} onPress={() => {
                        router.push("/(auth)/MainLogin");
                      }}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.photoContainer}>
          <Image
            source={require('/Users/ali/Documents/My GitHub/HomeWork/ByBer/assets/foto5.png')}
            style={styles.photo}
            resizeMode="cover"
          />
        </View>

      
        <Text style={styles.mainText}>
          Qeydiyyatdan keçməyin vaxtı gəldi!
        </Text>

        
        <TouchableOpacity style={styles.googleButton} >
          <Image
            source={require('/Users/ali/Documents/My GitHub/HomeWork/ByBer/assets/google.png')}
            style={styles.googleIcon}
            resizeMode="contain"
          />
          <Text style={styles.googleButtonText}>Google ilə qeydiyyatdan keç</Text>
        </TouchableOpacity>
     
        <View style={styles.divider}>
               <View style={styles.dividerLine} />
               <Text style={styles.dividerText}>ya da</Text>
               <View style={styles.dividerLine} />
             </View>

        <TouchableOpacity style={styles.primaryButton} onPress={() => {
                        router.push("/(auth)/PersonRegister");
                      }}>
          <Text style={styles.primaryButtonText}>İstifadəçi kimi qeydiyyatdan keç</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={() => {
                        router.push("/(auth)/BarberRegister");
                      }}>
          <Text style={styles.primaryButtonText}>Bərbər kimi qeydiyyatdan keç</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton} onPress={() => {
                    router.push("/(auth)/MainLogin");
                  }}>
          <Text style={styles.skipText}>
            Artiq hesabınız var? <Text style={styles.skipLink}>Daxil ol</Text>
          </Text>
        </TouchableOpacity>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  backButton: {
    position: 'absolute',
    top: 90,
    left: 20,
    zIndex: 1,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    fontSize: 24,
    color: '#333333',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  photoContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginBottom: 20,
  },

  photo: {  
    width: 215,
    height: 180,
  },
  mainText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 36,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  googleButtonText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '500',
  },
  orText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#FF8C42',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#FF8C42',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
   skipButton: {
    paddingVertical: 16,
    marginBottom: 20,
  },
  skipText: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  skipLink: {
    color: '#FF8C42',
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#999',
  },
  
});

