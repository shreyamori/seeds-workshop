import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { Paragraph, YStack } from 'tamagui';

import { db } from '../support/firebase';

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const postsRef = collection(db, 'posts');
      const postsSnapshot = await getDocs(postsRef);
      setPosts(postsSnapshot.docs);
    };
    void getPosts();
  }, []);

  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <YStack gap={10}>
        {posts.map((post) => (
          <Paragraph>{post.data().caption}</Paragraph>
        ))}
      </YStack>
    </YStack>
  );
}
