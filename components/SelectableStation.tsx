import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

type SelectableStationProps = {
  onPress: () => void;
  label: string;
  station: string;
};

const SelectableStation = ({
  onPress,
  station,
  label,
}: SelectableStationProps) => {
  const { t } = useTranslation();
  return (
    <View className="gap-2 mb-4">
      <Text className="text-white text-lg">{t(label)}</Text>
      <TouchableOpacity
        onPress={onPress}
        className="bg-gray-600 p-2 rounded-lg items-center"
      >
        {station ? (
          <Text className="text-white text-lg">{station}</Text>
        ) : (
          <Text className="text-gray-400 text-lg">
            {t(`select ${label.toLowerCase()} subway station`)}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SelectableStation;
