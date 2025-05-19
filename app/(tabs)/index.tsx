import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Expo + Next.js Integration Demo
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg' }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>About This App</Text>
          <Text style={styles.description}>
            This demo showcases how to integrate a Next.js web application within a React Native Expo app 
            using WebView. Navigate to the Next.js tab to see a fully functional Next.js site embedded 
            in the app.
          </Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/nextjs')}
          >
            <Text style={styles.buttonText}>Go to Next.js WebView</Text>
            <ArrowRight size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Features</Text>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Integrated Experience</Text>
            <Text style={styles.featureDescription}>
              Seamlessly blend native and web experiences in a single app
            </Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Navigation Controls</Text>
            <Text style={styles.featureDescription}>
              Browser-like controls to navigate through the Next.js content
            </Text>
          </View>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>Error Handling</Text>
            <Text style={styles.featureDescription}>
              Robust error handling for web content loading failures
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#1a202c',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#4a5568',
  },
  imageContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    height: 200,
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1a202c',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 24,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    fontFamily: 'Inter-Medium',
    color: '#ffffff',
    fontSize: 16,
  },
  featuresSection: {
    marginTop: 0,
    marginBottom: 40,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  featureTitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#1a202c',
    marginBottom: 8,
  },
  featureDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 22,
  },
});