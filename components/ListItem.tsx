import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListItem = ({ item }: { item: string }) => {
  return (
    <View className="p-2">
      <Text className="text-white text-lg">{item}</Text>
    </View>
  );
};

export default ListItem;
