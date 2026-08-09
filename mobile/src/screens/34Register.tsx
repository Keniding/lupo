import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';
import { Screen } from '../components/Screen';
import { Button } from '../components/Button';
import { FormInput } from '../components/FormInput';
import { goBackOrHome } from '../navigation/goBack';
import { colors, gradients } from '../theme/colors';
import { fonts } from '../theme/typography';
import { useT } from '../i18n';
import { useGameStore } from '../state/store';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  const t = useT();
  const a = t.auth;
  const register = useGameStore((s) => s.register);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const submit = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError(true);
      return;
    }
    register(name.trim(), email.trim());
    navigation.navigate('Map');
  };

  return (
    <Screen onBack={() => goBackOrHome(navigation)} colors={gradients.splash} scroll>
      <Text style={styles.title}>{a.registerTitle}</Text>
      <Text style={styles.sub}>{a.registerSub}</Text>

      <View style={styles.form}>
        <FormInput icon="user" label={a.nameLabel} value={name} onChangeText={setName} placeholder={a.namePlaceholder} autoCapitalize="words" />
        <FormInput icon="mail" label={a.emailLabel} value={email} onChangeText={setEmail} placeholder={a.emailPlaceholder} keyboardType="email-address" />
        <FormInput icon="lock" label={a.passwordLabel} value={password} onChangeText={setPassword} placeholder={a.passwordPlaceholder} secureTextEntry />
        {error && <Text style={styles.error}>{a.error}</Text>}
      </View>

      <View style={{ flex: 1, minHeight: 20 }} />
      <Button label={a.registerBtn} variant="primary" style={{ width: '100%' }} onPress={submit} />
      <Pressable style={{ marginTop: 14 }} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>{a.toLogin}</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: { fontFamily: fonts.display, fontSize: 27, color: colors.white, marginTop: 6 },
  sub: { fontFamily: fonts.body, fontSize: 14, lineHeight: 21, color: 'rgba(255,255,255,.72)', marginTop: 6 },
  form: { gap: 16, marginTop: 26 },
  error: { fontFamily: fonts.bodySemibold, fontSize: 13, color: colors.red },
  link: { textAlign: 'center', fontFamily: fonts.bodySemibold, fontSize: 13, color: colors.white },
});
