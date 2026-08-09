// Every screen is reached by pushing onto the stack, so canGoBack() is true
// in normal use; the Map fallback only matters for edge cases like a deep
// link landing directly on an inner screen.
export function goBackOrHome(navigation: { canGoBack: () => boolean; goBack: () => void; navigate: (screen: 'Map') => void }) {
  if (navigation.canGoBack()) navigation.goBack();
  else navigation.navigate('Map');
}
