import { Stack } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { COLORS } from "@/src/helpers/colors";
import { useOpenSansFonts } from "@/src/helpers/fontFamily";
import { useEffect } from "react";


export default function RootLayout() {

  const [fontLoaded] = useOpenSansFonts();
  if(!fontLoaded) return null
  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="dark"  />
      <SafeAreaView style={{ flex: 1}}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
