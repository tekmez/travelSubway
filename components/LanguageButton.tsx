import { TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-ico-flags";
import * as Localization from "expo-localization";
import { useLanguage } from "@/store/languageStore";

const LanguageButton = ({ onPress }: { onPress: () => void }) => {
  const { lng } = useLanguage();
  return (
    <TouchableOpacity className="absolute top-14 right-4" onPress={onPress}>
      <Icon name={lng ? lng.icon : "united-kingdom"} width={40} height={40} />
    </TouchableOpacity>
  );
};

export default LanguageButton;
