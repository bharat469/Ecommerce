import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../helpers/colors";
import { moderateScale } from "../helpers/Dimension";
import { FONT } from "../helpers/fontFamily";

type buttonProps = {
  btnTitle?: string;
  onPress?: () => void;
  extraStyle?: any;
};

const ButtonComponent: React.FC<buttonProps> = ({
  btnTitle = "click here",
  onPress,
  extraStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, extraStyle]}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: COLORS.primaryColors,
    alignItems: "center",
    padding: moderateScale(12),
    borderRadius: moderateScale(14),
  },
  btnText: {
    color: COLORS.whiteColor,
    fontFamily: FONT.semiBold,
    fontSize: moderateScale(16),
  },
});
