import React, { useEffect, useState } from "react";
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useRouteSearch from "@/hooks/useRouteSearch";

interface SearchableInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder: string;
}

const SearchableInput: React.FC<SearchableInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [filterData, setFilterData] = useState<string[]>([]);
  const [selected, setSelected] = useState(false);
  const matchingStations = useRouteSearch(value);

  const handleChanges = (query: string) => {
    onChange(query);
    setSelected(false); // Arama yapıldığında seçili durumu sıfırla
  };

  const handleSelectStation = (station: string) => {
    onChange(station);
    setFilterData([]);
    setSelected(true); // Bir durak seçildiğinde seçili durumu güncelle
  };

  useEffect(() => {
    if (!selected) {
      setFilterData(matchingStations);
    }
  }, [matchingStations, selected]);

  return (
    <View className="gap-2 mb-4">
      <Text className="text-white">{label}</Text>
      <TextInput
        onChangeText={handleChanges}
        value={value}
        placeholder={placeholder}
        className={`p-2 border border-gray-300 rounded-md text-white ${
          Platform.OS === "ios" ? "h-12" : ""
        }`}
        placeholderTextColor={"gray"}
      />
      {filterData.length > 0 && (
        <View className="max-h-[200px]">
          <ScrollView className="border rounded-md border-gray-300">
            {filterData.map((station) => (
              <TouchableOpacity
                key={station}
                className="p-1"
                onPress={() => handleSelectStation(station)}
              >
                <Text className="text-white">{station}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SearchableInput;
