import { StyleSheet, View, Platform } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const isDark = colorScheme === 'dark';

  const ctaButtonStyle = {
    ...styles.cta,
    backgroundColor: colors.tint,
  };
  const ctaTextStyle = {
    ...styles.ctaText,
    color: isDark ? '#11181C' : '#fff',
  };
  const containerStyle =
    Platform.OS === 'web'
      ? { ...styles.container, minHeight: '100vh' as unknown as number }
      : styles.container;

  return (
    <ThemedView style={containerStyle}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Alamait · Centurion
        </ThemedText>
        <ThemedText style={styles.tagline}>
          Your Properties. Perfectly Managed.
        </ThemedText>
        <ThemedText style={styles.description}>
          A secure, centralised filing system for Alamait's full property portfolio — registers,
          insurance tracking, asset inventories and document management, all in one place.
        </ThemedText>
        <Link href="/(tabs)/explore" asChild>
          <View style={ctaButtonStyle}>
            <ThemedText style={ctaTextStyle}>Explore</ThemedText>
          </View>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  content: {
    alignItems: 'center',
    maxWidth: 480,
    alignSelf: 'center',
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.95,
  },
  description: {
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.9,
    lineHeight: 24,
  },
  cta: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },
  ctaText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
