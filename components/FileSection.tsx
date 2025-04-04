import React from 'react';
import { View, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface FileItem {
  id: string;
  imageUri: any; // For require() statements
}

interface FilesSectionProps {
  files: FileItem[];
}

const FilesSection: React.FC<FilesSectionProps> = ({ files }) => {
  // Get image source from the files array or use a fallback
  const getImageSource = (index: number) => {
    if (files.length > index && files[index]?.imageUri) {
      return files[index].imageUri;
    }
    return require('@/assets/images/file/file1.png'); // Default fallback
  };

  return (
    <View className="mt-1 px-4">  
      {/* Files Grid Layout */}
      <View className="bg-zinc-900 p-2 w-1/2">
        <View className="flex-row p-2">
          {/* Left Column - Two square images */}
          <View className="w-20">
            <Image
              source={getImageSource(0)}
              className="w-full aspect-square mb-1"
              resizeMode="cover"
            />
            <Image
              source={getImageSource(1)}
              className="w-full aspect-square"
              resizeMode="cover"
            />
          </View>
          
          {/* Right Column - One taller rectangular image */}
          <View className="w-[48%]">
            <Image
              source={getImageSource(2)}
              className="w-1/2 aspect-[13/20]"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      {/* Header Section */}
      <View className="flex-row items-center mb-1 px-4">
        <MaterialCommunityIcons name="folder" size={18} color="#777" />
        <Text className="text-gray-500 ml-2 text-xs">FILES ({files.length})</Text>
      </View>
    </View>
  );
};

export default FilesSection;