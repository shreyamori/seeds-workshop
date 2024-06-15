import { Button, YStack } from 'tamagui';

import { db } from '../support/schema';

export default function App() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Button
        onPress={async () => {
          const posts = await db.posts.all();
          for (const post of posts) {
            console.log('>>', { id: post.ref.id, ...post.data });
          }
        }}
      >
        Get Posts
      </Button>
    </YStack>
  );
}
