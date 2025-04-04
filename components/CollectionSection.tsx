import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { colors } from '../styles/color';

interface CollectionItem {
  id: string;
  imageUri: string;
}

interface Collection {
  id: string;
  title: string;
  count: number;
  items: CollectionItem[];
}

interface CollectionSectionProps {
  collections: Collection[];
}

const CollectionSection: React.FC<CollectionSectionProps> = ({ collections }) => {
  return (
    <View className="mt-2 px-4">
      <View className="flex-row flex-wrap justify-between">
        {collections.map((collection) => (
          <TouchableOpacity 
            key={collection.id} 
            className="w-[48%] mb-6"
            activeOpacity={0.8}
          >
            <View style={styles.cardContainer}>
              {/* Shadow card layers for stacked effect */}
              <View style={styles.stackLayerBottom}></View>
              <View style={styles.stackLayerMiddle}></View>
              
              {/* Main card content */}
              <View style={styles.mainCard}>
                {/* Collection grid preview - 2x2 grid of images */}
                <View className="flex-row flex-wrap">
                  {collection.items.slice(0, 4).map((imageItem, index) => (
                    <View key={imageItem.id} className="w-3/4 aspect-square">
                      <Image
                        source={{ uri: imageItem.imageUri }}
                        className="w-full h-full"
                        resizeMode="cover"
                      />
                    </View>
                  ))}
                </View>
                
                {/* Collection info with heart icon and count */}
                <View className="py-3 px-2 flex-row items-center justify-center bg-zinc-900">
                  <Feather 
                    name={collection.title.toLowerCase() === 'liked' ? "heart" : "bookmark"} 
                    size={16} 
                    color="#888"
                  />
                  <Text className="text-white font-medium ml-2 mr-1">
                    {collection.title}
                  </Text>
                  <Text className="text-gray-400">
                    ({collection.count})
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    paddingBottom: 8,
  },
  stackLayerBottom: {
    position: 'absolute',
    left: 4,
    top: 4,
    width: '100%',
    height: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    zIndex: 1,
  },
  stackLayerMiddle: {
    position: 'absolute',
    left: 6,
    top: 6,
    width: '100%',
    height: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    zIndex: 2,
  },
  mainCard: {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#333',
    zIndex: 3,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  }
});

export default CollectionSection;