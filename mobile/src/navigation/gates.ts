// HU-05: play as a guest by default — an account is only required to enter
// leagues or the tournament, per the backlog's acceptance criteria.
export function openGatedScreen(
  navigation: { navigate: (screen: 'Leagues' | 'Tournament' | 'Login') => void },
  isAuthenticated: boolean,
  destination: 'Leagues' | 'Tournament'
) {
  navigation.navigate(isAuthenticated ? destination : 'Login');
}
