import {Slot } from "expo-router";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useOpenSansFonts } from "@/src/helpers/fontFamily";
import {Provider} from 'react-redux'
import store from "@/src/redux/store";

export default function RootLayout() {
  const [fontLoaded] = useOpenSansFonts();
  if (!fontLoaded) return null;
  return (
    <SafeAreaProvider>
      <ExpoStatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
        <Slot/>
        </Provider>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
