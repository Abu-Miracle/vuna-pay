import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';

interface QRCodeScreenProps {
  colorScheme: 'light' | 'dark' | null | undefined;
}

const QRCodeScreen: React.FC<QRCodeScreenProps> = ({ colorScheme }) => {
  // Get the current URL for the QR code
  const currentUrl = Platform.OS === 'web' ? (window as any).location.href : '';
  
  // Generate QR code URL using a free service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;
  
  const isDark = colorScheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
          Mobile App Only
        </Text>
        
        <Text style={[styles.subtitle, { color: isDark ? '#ccc' : '#666' }]}>
          This app is designed for mobile devices. Scan the QR code below with your phone to access the app.
        </Text>

        <View style={styles.qrContainer}>
          <Image
            source={{ uri: qrCodeUrl }}
            style={styles.qrCode}
          />
        </View>

        <Text style={[styles.instruction, { color: isDark ? '#ccc' : '#666' }]}>
          Open your camera app and point it at the QR code, or use a QR code scanner app.
        </Text>

        <View style={styles.urlContainer}>
          <Text style={[styles.urlLabel, { color: isDark ? '#ccc' : '#666' }]}>
            Or visit this URL on your mobile device:
          </Text>
          <Text style={[styles.url, { color: isDark ? '#4A9EFF' : '#007AFF' }]}>
            {currentUrl}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 500,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  qrContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  qrCode: {
    width: 200,
    height: 200,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  urlContainer: {
    alignItems: 'center',
  },
  urlLabel: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  url: {
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default QRCodeScreen;