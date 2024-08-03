import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import { SafeAreaViewProps } from "react-native-safe-area-context";

interface SafeViewProps extends SafeAreaViewProps {
  isMain?: boolean;
}

const SafeView = ({ children, isMain }: SafeViewProps) => {
  return (
    <SafeAreaView
      className={`${isMain === true ? "justify-center" : ""} flex-1`}
      style={styles.safeAreaView}
    >
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default SafeView;
