import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ArrowLeft, ArrowRight, RefreshCw, ExternalLink } from 'lucide-react-native';

interface WebViewControlsProps {
  canGoBack: boolean;
  canGoForward: boolean;
  onGoBack: () => void;
  onGoForward: () => void;
  onRefresh: () => void;
  onOpenExternal: () => void;
  currentUrl: string;
}

export default function WebViewControls({
  canGoBack,
  canGoForward,
  onGoBack,
  onGoForward,
  onRefresh,
  onOpenExternal,
  currentUrl,
}: WebViewControlsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.navigationControls}>
        <TouchableOpacity
          style={[styles.navButton, !canGoBack && styles.navButtonDisabled]}
          onPress={onGoBack}
          disabled={!canGoBack}
        >
          <ArrowLeft size={20} color={canGoBack ? '#1a202c' : '#a0aec0'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, !canGoForward && styles.navButtonDisabled]}
          onPress={onGoForward}
          disabled={!canGoForward}
        >
          <ArrowRight size={20} color={canGoForward ? '#1a202c' : '#a0aec0'} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={onRefresh}>
          <RefreshCw size={20} color="#1a202c" />
        </TouchableOpacity>
      </View>

      <View style={styles.urlBar}>
        <Text style={styles.urlText} numberOfLines={1} ellipsizeMode="tail">
          {currentUrl}
        </Text>
      </View>

      <TouchableOpacity style={styles.externalButton} onPress={onOpenExternal}>
        <ExternalLink size={20} color="#1a202c" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  navigationControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButton: {
    padding: 8,
    marginRight: 4,
    borderRadius: 4,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  urlBar: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 8,
  },
  urlText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#4a5568',
  },
  externalButton: {
    padding: 8,
    borderRadius: 4,
  },
});