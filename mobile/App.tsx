import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { RootNavigator } from './src/navigation/RootNavigator';
import { fontMap } from './src/theme/typography';
import { useGameStore } from './src/state/store';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fontMap);
  // The persisted store rehydrates from AsyncStorage asynchronously. Rendering
  // before that finishes would read `hasSeenIntro: false` for a returning
  // player and replay the intro on every launch, so the navigator waits.
  const [hydrated, setHydrated] = useState(() => useGameStore.persist.hasHydrated());

  useEffect(() => {
    if (hydrated) return undefined;
    const unsub = useGameStore.persist.onFinishHydration(() => setHydrated(true));
    // A rehydration that resolved between first render and this effect would
    // never fire the event, so re-check once on mount.
    if (useGameStore.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, [hydrated]);

  const ready = (fontsLoaded || fontError) && hydrated;

  const onLayoutRootView = useCallback(async () => {
    if (ready) {
      await SplashScreen.hideAsync();
    }
  }, [ready]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator showIntro={!useGameStore.getState().hasSeenIntro} />
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
