import React from "react";
import { Stack } from "expo-router";
import "@/i18n/i18n";
import { LanguageProvider } from "@/store/languageStore";
export default function RootLayout() {
  return (
    <LanguageProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </LanguageProvider>
  );
}
