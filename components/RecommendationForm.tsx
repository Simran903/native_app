// components/RecommendationForm.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SectionProps {
  title: string;
  subtitle: string;
  icon: string;
  showArrow?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, icon, showArrow = false }) => {
  return (
    <TouchableOpacity className="border-b border-[#2a2a2a] py-6">
      <View className="px-4">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-white text-sm font-medium uppercase tracking-wider flex-row items-center">
              {title} <Text className="text-yellow-400">{icon}</Text>
            </Text>
            <Text className="text-gray-400 text-xs mt-1">{subtitle}</Text>
          </View>
          {showArrow && (
            <View>
              <Feather name="chevron-right" size={20} color="#666" />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const RecommendationForm: React.FC = () => {
  return (
    <View className="flex-1 bg-black">
      <View className="px-4 pt-8 pb-4">
        <Text className="text-gray-300 text-sm leading-5">
          our recommendations work best when you let us know these things:
        </Text>
      </View>
      
      <Section 
        title="YOUR DIFFICULTY" 
        subtitle="you decide the level of challenge you want!" 
        icon="✨" 
      />
      
      <Section 
        title="INTERESTS YOU LIKE" 
        subtitle="we'll use these to show you cool builds" 
        icon="✨" 
        showArrow={true}
      />
      
      <Section 
        title="TOOLS USED" 
        subtitle="we'll suggest better using these picks" 
        icon="⚒️" 
        showArrow={true}
      />
      
      <View className="mt-4 items-center">
        <View className="items-center">
          <Text className="text-gray-500 text-3xl font-bold">glitch</Text>
          <Text className="text-gray-600 text-lg">house</Text>
          <Text className="text-gray-600 text-xs mt-1">JOINED 2242 DAYS AGO</Text>
        </View>
      </View>
    </View>
  );
};

export default RecommendationForm;