import { useState } from 'react';
import { Alert } from 'react-native';
import { router, Stack } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button, Input, YStack } from 'tamagui';

import { auth } from '../support/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Success');
      router.navigate('/');
    } catch (error) {
      console.error(error);
      Alert.alert('Error logging in', String(error));
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
        }}
      />
      <YStack p={16} gap={10}>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <Button onPress={handleLogin}>Login</Button>
      </YStack>
    </>
  );
}
