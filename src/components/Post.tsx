import { QueryDocumentSnapshot } from "firebase/firestore/lite";
import { YStack, Image, Paragraph, XStack, Button } from "tamagui";
import { Heart, MessageSquare } from "@tamagui/lucide-icons";
import { Alert } from "react-native";
import { router } from "expo-router";
 
type Props = {
    post: QueryDocumentSnapshot;
}

const handlePress = () => {
    Alert.alert('Hello')
}

export function Post(props: Props){
    const post = props.post;
    return(
    <YStack gap = {8}>
    <Image
      width="100%"
      aspectRatio={1}
      source={{ uri: String(post.data().imageUrl)}}
    />
    <XStack marginLeft = {8}>
        <Button p = {4} chromeless onPress={handlePress}><Heart size={30} /></Button>
        <Button p = {4} chromeless onPress={() => {
            router.navigate('/new-comment')
            }}>
            <MessageSquare size={30}/>
        </Button>
    </XStack>
    <Paragraph p={10}>{post.data().caption}</Paragraph>
  </YStack>
  );
}
