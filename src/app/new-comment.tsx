import { router } from "expo-router";
import { Paragraph, YStack, Button } from "tamagui";

export default function NewCommentForm() {
    return (
        <YStack> 
            <Paragraph padding = {50}> Comment form will be here.</Paragraph>
        <Button onPress={() => {router.navigate('/')}}>Go Home</Button>
        </YStack>
    )
}