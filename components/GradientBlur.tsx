import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
type GradientBlurProps = {
  children: React.ReactNode;
};
const GradientBlur = ({ children }: GradientBlurProps) => {
  return (
    <ImageBackground
      source={require("@/assets/bg.jpg")}
      resizeMode="cover"
      className="flex-1"
    >
      <LinearGradient
        className="flex-1"
        colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
      >
        {children}
      </LinearGradient>
    </ImageBackground>
  );
};

export default GradientBlur;
