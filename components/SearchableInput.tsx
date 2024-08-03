import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
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
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        onChangeText={handleChanges}
        value={value}
        placeholder={placeholder}
      />
      {filterData.length > 0 && (
        <View style={styles.searchContainer}>
          <ScrollView>
            {filterData.map((station) => (
              <TouchableOpacity
                key={station}
                style={styles.touchableStation}
                onPress={() => handleSelectStation(station)}
              >
                <Text>{station}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  searchContainer: {
    maxHeight: 200,
  },
  touchableStation: {
    padding: 4,
  },
});

export default SearchableInput;
