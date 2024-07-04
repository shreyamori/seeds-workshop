import React, { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from 'firebase/firestore/lite';
import { ButtonIcon, Image, Paragraph, ScrollView, XStack, YStack } from 'tamagui';

import { db } from '../support/firebase';
import { PostList } from '../components/PostListView';

export default function App() {


  return (
      <ScrollView gap={10} flex={1}>
        <PostList/>
      </ScrollView>
  );
}
