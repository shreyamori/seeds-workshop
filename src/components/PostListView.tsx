import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Paragraph, YStack, Image } from "tamagui";
import { db } from "../support/firebase";
import { Post } from "./Post";

export function PostList(){
    const [posts, setPosts] = useState<QueryDocumentSnapshot[]>([]);
    useEffect(() => {
      const getPosts = async () => {
        const postsRef = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsRef);
        setPosts(postsSnapshot.docs);
      };
      void getPosts();
    }, []);
    
    return(
    <YStack>
        {posts.map((post) => (
            <Post key = {post.id} post = {post}/>
      ))}
      </YStack>
    );
}