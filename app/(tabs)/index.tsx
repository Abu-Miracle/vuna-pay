import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import Logo from '@/components/logo';
export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('../../assets/images/background.jpg')}  // Ensure the image is inside the assets folder
      style={styles.background}
    >
      <View style={styles.overlay}>
        
        <Logo />
        <View>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.title2}>VUNA Pay</Text>
          <Text style={styles.subtitle}>
            A seamless way to pay your faculty dues, departmental dues, and SRA dues without stress.
          </Text>
        </View>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => router.push('/login')} // Navigate to Home screen
          >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',  
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingHorizontal: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Makes it cover the entire screen
    backgroundColor: 'rgba(0, 128, 0, 0.5)', // Green overlay with 50% opacity
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 50,
  },
  content: {
    position: 'absolute',  // Ensures text appears above overlay
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  title2: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  buttonText: {
    color: '#358105',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
