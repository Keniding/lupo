import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

import IntroScreen from '../screens/00Intro';
import SplashScreen from '../screens/01Splash';
import MapScreen from '../screens/02Map';
import NoLivesScreen from '../screens/03NoLives';
import DiagnosticScreen from '../screens/25Diagnostic';
import CaseIntroScreen from '../screens/26CaseIntro';
import SwipeScreen from '../screens/27Swipe';
import ResultCorrectScreen from '../screens/28ResultCorrect';
import ResultWrongScreen from '../screens/29ResultWrong';
import LeaguesScreen from '../screens/30Leagues';
import ProfileScreen from '../screens/31Profile';
import FindSignalsScreen from '../screens/32FindSignals';
import LoginScreen from '../screens/33Login';
import RegisterScreen from '../screens/34Register';
import LobbyScreen from '../screens/04Lobby';
import RoleDetectiveScreen from '../screens/05RoleDetective';
import RoleHiddenScreen from '../screens/06RoleHidden';
import ChatScreen from '../screens/07Chat';
import DecisionScreen from '../screens/08Decision';
import ConsequenceScreen from '../screens/09Consequence';
import BoardScreen from '../screens/10Board';
import AssemblyScreen from '../screens/11Assembly';
import VoteScreen from '../screens/12Vote';
import JustificationScreen from '../screens/13Justification';
import RevealScreen from '../screens/14Reveal';
import ReportScreen from '../screens/15Report';
import MissionsScreen from '../screens/16Missions';
import TournamentScreen from '../screens/17Tournament';
import Mission2EvidenceScreen from '../screens/18Mission2Evidence';
import Mission2ResultScreen from '../screens/19Mission2Result';
import Mission3RedactScreen from '../screens/20Mission3Redact';
import Mission3VerdictScreen from '../screens/21Mission3Verdict';
import Mission4EvidenceScreen from '../screens/22Mission4Evidence';
import Mission4VerificationScreen from '../screens/23Mission4Verification';
import Mission4ResultScreen from '../screens/24Mission4Result';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator({ showIntro }: { showIntro: boolean }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={showIntro ? 'Intro' : 'Splash'}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Diagnostic" component={DiagnosticScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="NoLives" component={NoLivesScreen} options={{ presentation: 'transparentModal', animation: 'fade' }} />
      <Stack.Screen name="CaseIntro" component={CaseIntroScreen} options={{ presentation: 'transparentModal', animation: 'fade' }} />
      <Stack.Screen name="Swipe" component={SwipeScreen} />
      <Stack.Screen name="ResultCorrect" component={ResultCorrectScreen} />
      <Stack.Screen name="ResultWrong" component={ResultWrongScreen} />
      <Stack.Screen name="FindSignals" component={FindSignalsScreen} />
      <Stack.Screen name="Leagues" component={LeaguesScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Lobby" component={LobbyScreen} />
      <Stack.Screen name="RoleDetective" component={RoleDetectiveScreen} />
      <Stack.Screen name="RoleHidden" component={RoleHiddenScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Decision" component={DecisionScreen} />
      <Stack.Screen name="Consequence" component={ConsequenceScreen} />
      <Stack.Screen name="Board" component={BoardScreen} />
      <Stack.Screen name="Assembly" component={AssemblyScreen} />
      <Stack.Screen name="Vote" component={VoteScreen} />
      <Stack.Screen name="Justification" component={JustificationScreen} />
      <Stack.Screen name="Reveal" component={RevealScreen} />
      <Stack.Screen name="Report" component={ReportScreen} />
      <Stack.Screen name="Missions" component={MissionsScreen} />
      <Stack.Screen name="Tournament" component={TournamentScreen} />
      <Stack.Screen name="Mission2Evidence" component={Mission2EvidenceScreen} />
      <Stack.Screen name="Mission2Result" component={Mission2ResultScreen} />
      <Stack.Screen name="Mission3Redact" component={Mission3RedactScreen} />
      <Stack.Screen name="Mission3Verdict" component={Mission3VerdictScreen} />
      <Stack.Screen name="Mission4Evidence" component={Mission4EvidenceScreen} />
      <Stack.Screen name="Mission4Verification" component={Mission4VerificationScreen} />
      <Stack.Screen name="Mission4Result" component={Mission4ResultScreen} />
    </Stack.Navigator>
  );
}
