import React from 'react';
import { View, ScrollView, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from './BackButton';

export function Screen({
  colors,
  scroll = false,
  padded = true,
  align,
  style,
  onBack,
  children,
}: {
  colors: [string, string];
  scroll?: boolean;
  padded?: boolean;
  align?: 'center';
  style?: StyleProp<ViewStyle>;
  /** Renders a back chevron above the content when provided (omit on entry/home screens). */
  onBack?: () => void;
  children: React.ReactNode;
}) {
  const contentStyle = [padded && styles.padded, align === 'center' && styles.center, style];
  const body = (
    <>
      {onBack && (
        <View style={styles.backRow}>
          <BackButton onPress={onBack} />
        </View>
      )}
      {children}
    </>
  );

  return (
    <LinearGradient colors={colors} start={{ x: 0.5, y: 0 }} end={{ x: 0.3, y: 1 }} style={styles.gradient}>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        {scroll ? (
          <ScrollView contentContainerStyle={[styles.scrollContent, ...contentStyle]}>{body}</ScrollView>
        ) : (
          <View style={[styles.flexContent, ...contentStyle]}>{body}</View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: { flex: 1 },
  flexContent: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  padded: { paddingHorizontal: 22, paddingTop: 12, paddingBottom: 18 },
  center: { alignItems: 'center' },
  backRow: { alignSelf: 'stretch', marginBottom: 10 },
});
