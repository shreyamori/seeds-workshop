import { useState } from 'react';
import { Alert } from 'react-native';
import { router, Stack } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore/lite';
import { Button, Input, YStack } from 'tamagui';

import { auth, db } from '../support/firebase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = result.user;
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        name: '',
        email,
      });
      Alert.alert('Success', 'User ID: ' + userRef.id);
      router.navigate('/');
    } catch (error) {
      console.error(error);
      Alert.alert('Error signing up', String(error));
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Signup',
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
        <Button onPress={handleSignup}>Sign Up</Button>
      </YStack>
    </>
  );
}
