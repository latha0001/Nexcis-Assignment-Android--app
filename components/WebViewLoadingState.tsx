import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface WebViewLoadingStateProps {
  loadingMessage?: string;
}

export default function WebViewLoadingState({ 
  loadingMessage = 'Loading Next.js content...' 
}: WebViewLoadingStateProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3498db" />
      <Text style={styles.loadingText}>{loadingMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#4a5568',
    marginTop: 12,
  },
});