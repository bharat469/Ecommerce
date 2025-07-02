import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { COLORS } from "@/src/helpers/colors";
import { moderateScale, scale, verticalScale } from "@/src/helpers/Dimension";
import IconAdapter from "@/src/helpers/iconAdapter";
import { useRouter } from "expo-router";
import { FONT } from "@/src/helpers/fontFamily";

type authBgProps = {
  imgSource?: ImageSourcePropType;
  children: React.ReactNode;
  isBackIcon?: boolean;
  headerTypo?:string
};

const AuthbgCover: React.FC<authBgProps> = ({
  imgSource = require("../../../assets/images/city.png"),
  children,
  isBackIcon = false,
  headerTypo='Hi there!! Welcome 👋'
}) => {
  const router = useRouter();
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={imgSource}
        style={styles.authBgView}
        resizeMode="cover"
      >
          {isBackIcon && (
            <IconAdapter
              family="Ionicons"
              name="arrow-back-circle-sharp"
              onPress={() => router.back()}
              style={{ marginHorizontal: scale(6),marginVertical:verticalScale(8) }}
              color={COLORS.whiteColor}
              size={32}
            />
          )}
        <View style={styles.mainDataView}>
        <Text style={styles.headerText}>{headerTypo}</Text>
          {children}
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default AuthbgCover;

const styles = StyleSheet.create({
  authBgView: {
    flex: 1,
  },
  mainDataView: {
    backgroundColor: COLORS.whiteColor,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: moderateScale(20),
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
    height: verticalScale(420),
  },
  headerText: {
    fontSize: moderateScale(16),
    fontFamily: FONT.bold,
    color: COLORS.primaryColors,
    letterSpacing: 0.2,
  },
});
