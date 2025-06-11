import {useFonts} from 'expo-google-fonts-open-sans/useFonts'
import { OpenSans_300Light } from 'expo-google-fonts-open-sans/300Light';
import { OpenSans_400Regular } from 'expo-google-fonts-open-sans/400Regular';
import { OpenSans_500Medium } from 'expo-google-fonts-open-sans/500Medium';
import { OpenSans_600SemiBold } from 'expo-google-fonts-open-sans/600SemiBold';
import { OpenSans_700Bold } from 'expo-google-fonts-open-sans/700Bold';
import { OpenSans_800ExtraBold } from 'expo-google-fonts-open-sans/800ExtraBold';
import { OpenSans_300Light_Italic } from 'expo-google-fonts-open-sans/300Light_Italic';
import { OpenSans_400Regular_Italic } from 'expo-google-fonts-open-sans/400Regular_Italic';
import { OpenSans_500Medium_Italic } from 'expo-google-fonts-open-sans/500Medium_Italic';
import { OpenSans_600SemiBold_Italic } from 'expo-google-fonts-open-sans/600SemiBold_Italic';
import { OpenSans_700Bold_Italic } from 'expo-google-fonts-open-sans/700Bold_Italic';
import { OpenSans_800ExtraBold_Italic } from 'expo-google-fonts-open-sans/800ExtraBold_Italic';


export function useOpenSansFonts() {
    return useFonts({
      OpenSans_300Light,
      OpenSans_400Regular,
      OpenSans_500Medium,
      OpenSans_600SemiBold,
      OpenSans_700Bold,
      OpenSans_800ExtraBold,
      OpenSans_300Light_Italic,
      OpenSans_400Regular_Italic,
      OpenSans_500Medium_Italic,
      OpenSans_600SemiBold_Italic,
      OpenSans_700Bold_Italic,
      OpenSans_800ExtraBold_Italic,
    });
  }

  export const FONT = {
    light: 'OpenSans_300Light',
    regular: 'OpenSans_400Regular',
    medium: 'OpenSans_500Medium',
    semiBold: 'OpenSans_600SemiBold',
    bold: 'OpenSans_700Bold',
    extraBold: 'OpenSans_800ExtraBold',
  
    lightItalic: 'OpenSans_300Light_Italic',
    regularItalic: 'OpenSans_400Regular_Italic',
    mediumItalic: 'OpenSans_500Medium_Italic',
    semiBoldItalic: 'OpenSans_600SemiBold_Italic',
    boldItalic: 'OpenSans_700Bold_Italic',
    extraBoldItalic: 'OpenSans_800ExtraBold_Italic',
  };



