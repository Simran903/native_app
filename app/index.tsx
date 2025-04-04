// App.tsx
import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import CollectionSection from '../components/CollectionSection';
import RecommendationForm from '../components/RecommendationForm';
import FilesSection from '../components/FileSection';

export default function App() {
  const [activeSection, setActiveSection] = useState<'collections' | 'tags'>('collections');
  
  return (
    <SafeAreaView className="flex-1 bg-darkPurple">
      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={true}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-1">
          <ProfileHeader
            username="@theo_from_hsr"
            location="INDIA"
            bio="18 y/o with high ambitions. want to build cool stuff!"
            isVerified={true}
            followingCount={2}
            onManageTagsPress={() => setActiveSection('tags')}
          />
          
          {activeSection === 'collections' ? (
            <CollectionsContent />
          ) : (
            <RecommendationForm />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Separate component to handle collections and files content
const CollectionsContent = () => {
  // Use local image paths for file items
  const fileItems = [
    { 
      id: '1', 
      imageUri: require('@/assets/images/file/file2.png')
    },
    { 
      id: '2', 
      imageUri: require('@/assets/images/file/file3.png')
    },
    { 
      id: '3', 
      imageUri: require('@/assets/images/file/file1.png')
    },
  ];

  return (
    <View className="flex-1">
      <CollectionSection
        collections={[
          {
            id: '1', 
            title: 'LIKED', 
            count: 32, 
            items: [
              { id: '1', imageUri: require('@/assets/images/file/file1.png') },
            ]
          },
          {
            id: '2', 
            title: 'SAVED', 
            count: 23, 
            items: [
              { id: '1', imageUri: require('@/assets/images/file/file2.png') },
            ]
          },
        ]}
      />
      
      <FilesSection
        files={fileItems}
      />
    </View>
  );
};