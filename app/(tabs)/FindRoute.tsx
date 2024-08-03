import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import GradientBlur from "@/components/GradientBlur";
import SafeView from "@/components/SafeView";
import SearchableInput from "@/components/SearchableInput";
import useRouteFinder from "@/hooks/useRouteFinder";

const FindRoute = () => {
  const [entrance, setEntrance] = useState("");
  const [exit, setExit] = useState("");
  const [error, setError] = useState("");
  const [routes, setRoute] = useState<any>([]);
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
          {error && <Text style={styles.err}>{error}</Text>}
          <TouchableOpacity
            className="bg-white h-12 justify-center items-center rounded-lg mt-4"
            onPress={onPress}
          >
            <Text>Find Route</Text>
          </TouchableOpacity>

          <View>
            <Text className="text-white">Route</Text>
            <Text className="text-white">
              {routes.startLine} Line: {routes?.startRoute?.join(" -> ")}
            </Text>
            {routes.transferStation && (
              <Text>Transfer at {routes?.transferStation} Station</Text>
            )}
            <Text className="text-white">
              {routes.endLine} Line: {routes?.endRoute?.join(" -> ")}
            </Text>
          </View>
        </View>
      </SafeView>
    </GradientBlur>
  );
};

const styles = StyleSheet.create({
  entrance: {
    gap: 8,
  },
  err: {
    color: "#D04848",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0a7ea4",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
export default FindRoute;
