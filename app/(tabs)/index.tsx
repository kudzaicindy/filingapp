import { StyleSheet, View } from 'react-native';
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

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>
          Filing App
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Organize, file, and find what you need—all in one place.
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
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.9,
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
