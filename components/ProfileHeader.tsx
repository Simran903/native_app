import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/color';

interface ProfileHeaderProps {
  username: string;
  location: string;
  bio: string;
  isVerified: boolean;
  followingCount: number;
  profileImage?: string;
  onManageTagsPress?: () => void;
  onSharePress?: () => void;
  onSettingsPress?: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  location,
  bio,
  isVerified,
  followingCount,
  profileImage = 'https://example.com/default-profile.jpg', // Default image
  onManageTagsPress,
  onSharePress,
  onSettingsPress,
}) => {
  const [activeTab, setActiveTab] = useState<'collections' | 'tags'>('collections');

  const handleTabPress = (tab: 'collections' | 'tags') => {
    if (activeTab !== tab) {
      setActiveTab(tab);

      // Only call the callback if we're switching to the tags tab
      if (tab === 'tags' && onManageTagsPress) {
        onManageTagsPress();
      }
    }
  };

  return (
    <View className="pb-4 bg-darkPurple space-y-8">
      <View className="flex-row justify-between items-center px-4 py-2">
        <View className="flex-row items-center">
          <View style={styles.imageContainer}>
            <View style={styles.yellowBorder}></View>

            <View style={styles.imageFrame}>
              <Image
                source={require('@/assets/images/image.png')}
                style={styles.profileImage}
                resizeMode="cover"
              />

              <View style={styles.topLeftCorner}>
                <Ionicons name="add" size={14} color="white" />
              </View>
              <View style={styles.topRightCorner}>
                <Ionicons name="add" size={14} color="white" />
              </View>
              <View style={styles.bottomLeftCorner}>
                <Ionicons name="add" size={14} color="white" />
              </View>
              <View style={styles.bottomRightCorner}>
                <Ionicons name="add" size={14} color="white" />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onSharePress}
          >
            <View style={styles.iconBackground}>
              <MaterialCommunityIcons name="share-variant" size={24} color="white" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={onSettingsPress}
          >
            <View style={styles.iconBackground}>
              <Ionicons name="settings" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className='flex justify-between flex-row mt-4'>
        <View className="ml-3">
          <View className="flex-row items-center">
            <Text className="text-white font-bold text-2xl">{username}</Text>
            {isVerified && (
              <View className="ml-1 bg-neonGreen rounded-full p-1">
                <Feather name="check" size={10} color={colors.darkPurple} />
              </View>
            )}
          </View>

          <View className="flex-row items-center mt-1">
            <MaterialCommunityIcons name="map-marker" size={14} color={colors.neonGreen} />
            <Text className="text-white text-sm ml-1 tracking-widest">{location}</Text>
          </View>
        </View>

        <TouchableOpacity
          className="p-2"
          onPress={() => console.log('Edit profile')}>
          <Text className="text-lightGray text-sm tracking-widest border-b border-lightGray">EDIT PROFILE</Text>
        </TouchableOpacity>
      </View>

      {/* Bio */}
      <View className="px-4 mt-2">
        <Text className="text-lightGray text-xl">{bio}</Text>
      </View>

      {/* Following */}
      <View className='px-4 mt-3'>
        <View className="flex-row items-center">
          <MaterialCommunityIcons name="account-multiple" size={24} color={colors.textGray} />
          <Text className="text-white font-bold ml-1 text-xl">{followingCount}</Text>
        </View>
        <Text className="text-lightGray ml-1 font-bold">FOLLOWING</Text>
      </View>

      {/* Tab navigation */}
      <View className="flex-row mt-6 px-4 justify-between bg-zinc-950 p-4">
        <TouchableOpacity
          className={`py-2 px-4 flex-row items-center ${activeTab === 'collections' ? 'border-b-2 border-neonGreen' : ''}`}
          onPress={() => handleTabPress('collections')}
        >
          <MaterialCommunityIcons
            name="folder"
            size={18}
            color={activeTab === 'collections' ? colors.neonGreen : colors.textGray}
          />
          <Text
            className={`ml-2 font-bold tracking-widest ${activeTab === 'collections' ? 'text-neonGreen' : 'text-lightGray'}`}
          >
            COLLECTIONS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`py-2 px-4 flex-row items-center ${activeTab === 'tags' ? 'border-b-2 border-neonGreen' : ''}`}
          onPress={() => handleTabPress('tags')}
        >
          <MaterialCommunityIcons
            name="tag"
            size={18}
            color={activeTab === 'tags' ? colors.neonGreen : colors.textGray}
          />
          <Text
            className={`ml-2 font-bold tracking-widest ${activeTab === 'tags' ? 'text-neonGreen' : 'text-lightGray'}`}
          >
            MANAGE TAGS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: 140,
    height: 140,
  },
  yellowBorder: {
    position: 'absolute',
    right: -4,
    bottom: -4,
    width: 140,
    height: 140,
    borderRadius: 8,
    backgroundColor: '#EFD84C',
    zIndex: 1,
  },
  imageFrame: {
    width: 140,
    height: 140,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    position: 'relative',
    zIndex: 2,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  topLeftCorner: {
    position: 'absolute',
    top: 4,
    left: 4,
  },
  topRightCorner: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  bottomLeftCorner: {
    position: 'absolute',
    bottom: 4,
    left: 4,
  },
  bottomRightCorner: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },
  // New styles for share and settings icons
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
  },
  iconBackground: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -72,
  },
  iconValue: {
    color: '#8a7aff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProfileHeader;