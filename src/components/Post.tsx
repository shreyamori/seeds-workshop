import { QueryDocumentSnapshot } from 'firebase/firestore/lite';
import { Image, Paragraph, YStack } from 'tamagui';

type Props = {
  post: QueryDocumentSnapshot;
};

export function Post(props: Props) {
  const post = props.post;
  return (
    <YStack gap={8}>
      <Image
        width="100%"
        aspectRatio={1}
        source={{ uri: String(post.data().imageUrl) }}
      />
      <Paragraph p={10}>{post.data().caption}</Paragraph>
    </YStack>
  );
}
