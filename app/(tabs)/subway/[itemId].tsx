import { FlatList, Pressable, Text, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { subwayLines } from "@/constants/SubwayLines";
import ListItem from "@/components/ListItem";
const Subway = () => {
  const { itemId } = useLocalSearchParams();
  const subway = subwayLines.find((line) => line.name === itemId);
  return (
    <GradientBlur>
      <SafeView isMain={false}>
        <View className="p-4">
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center bg-white p-2 rounded-full w-[50px] justify-center"
          >
            <Ionicons name="arrow-back" size={32} color="black" />
          </Pressable>
          <View className="pt-4">
            <Text className="text-white text-center font-bold text-3xl">
              {itemId}
            </Text>
            <Text className="text-white text-center text-lg mb-2">
              {subway?.title}
            </Text>
            <FlatList
              data={subway?.stations}
              keyExtractor={(_, idx) => idx.toString()}
              renderItem={({ item }) => <ListItem item={item} />}
              ItemSeparatorComponent={() => (
                <View className="border-b border-gray-500" />
              )}
              contentContainerStyle={{ paddingBottom: 250 }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeView>
    </GradientBlur>
  );
};

export default Subway;
