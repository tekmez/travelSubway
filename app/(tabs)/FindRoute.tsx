import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import SearchableInput from "@/components/SearchableInput";
import useRouteFinder from "@/hooks/useRouteFinder";

const FindRoute = () => {
  const [entrance, setEntrance] = useState("");
  const [exit, setExit] = useState("");
  const [error, setError] = useState("");
  const [routes, setRoute] = useState<any>(null);
  useEffect(() => {
    if (entrance.trim() === "" || exit.trim() === "") return;
    if (entrance === exit) {
      setError("Entrance and exit cannot be the same");
    } else {
      setError("");
    }
  }, [entrance, exit]);

  const onPress = () => {
    if (error) {
      return;
    }

    const start = entrance.trim();
    const end = exit.trim();
    const route = useRouteFinder(start, end);
    setRoute(route);
  };
  return (
    <GradientBlur>
      <SafeView isMain={false}>
        <View className="p-6">
          <View className="gap-4 mb-6">
            <Text className="text-white text-center font-bold text-3xl">
              Adventurous Journey with Metro Quest
            </Text>
            <Text className="text-white text-center text-lg">
              Pick your start and finish destinations from the drop-down menu
              and leave the rest to us.
            </Text>
          </View>
          <View>
            <SearchableInput
              label="Entrance"
              value={entrance}
              onChange={setEntrance}
              placeholder="Search for a subway entrance"
            />
            <SearchableInput
              label="Exit"
              value={exit}
              onChange={setExit}
              placeholder="Search for a subway exit"
            />
          </View>
          {error && <Text className="text-red-500">{error}</Text>}
          <TouchableOpacity
            className="bg-white h-12 justify-center items-center rounded-lg mt-4"
            onPress={onPress}
          >
            <Text className="font-semibold text-lg">Find Route</Text>
          </TouchableOpacity>
          {routes && (
            <ScrollView style={styles.routeContainer}>
              {routes.lines.map((line: any, index: any) => (
                <View key={index} style={styles.lineContainer}>
                  <Text style={styles.lineTitle}>Hat: {line}</Text>
                  {routes.stations[index].map((station: any, index: any) => (
                    <Text key={index}>{station}</Text>
                  ))}
                  {index < routes.transfers.length && (
                    <Text>
                      Transfer: {routes.lines[index + 1]} -{" "}
                      {routes.transfers[index]}
                    </Text>
                  )}
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </SafeView>
    </GradientBlur>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginTop: 5,
  },
  routeContainer: {
    marginTop: 20,
    height: 300,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  lineContainer: {
    marginBottom: 20,
  },
  lineTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default FindRoute;
