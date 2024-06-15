import { Alert } from 'react-native';
import { router, Stack } from 'expo-router';
import { signOut } from 'firebase/auth';
import { Button, Paragraph, YStack } from 'tamagui';

import { useAuth } from '../providers/AuthProvider';
import { auth } from '../support/firebase';

async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    Alert.alert('Error logging out:', String(error));
  }
}

export default function App() {
  const { user } = useAuth();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <YStack flex={1} justifyContent="center" alignItems="center">
        {user ? (
          <YStack alignItems="center" gap={16}>
            <Paragraph>{`Logged in as: ${user.email}`}</Paragraph>
            <Button onPress={() => logout()}>Logout</Button>
          </YStack>
        ) : (
          <YStack alignItems="center" gap={16}>
            <Paragraph>Not logged in.</Paragraph>
            <Button
              onPress={() => {
                router.push('/login');
              }}
            >
              Login
            </Button>
            <Button
              onPress={() => {
                router.push('/signup');
              }}
            >
              Signup
            </Button>
          </YStack>
        )}
      </YStack>
    </>
  );
}
