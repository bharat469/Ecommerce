import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "@/src/helpers/colors";
import InputComponent from "@/src/components/input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ButtonComponent from "@/src/components/buttonComponent";
import { moderateScale, scale, verticalScale } from "@/src/helpers/Dimension";
import { FONT } from "@/src/helpers/fontFamily";
import { useFormValidation } from "@/src/components/useFormValidation";
import { useRouter } from "expo-router";
import { ROUTE_NAME } from "@/src/helpers/routes";
import AuthbgCover from "@/src/components/covers/authbgCover";

const Login = () => {
  const router = useRouter();

  const { values, errors, validate, handleChange } = useFormValidation({
    email: "",
    password: "",
  });

  const _handleLogin = () => {
    const isValid = validate();
    if (isValid) {
      console.log("✅ Login payload:", values);
    } else {
      console.log("❌ Validation failed. Errors will be shown in UI.", errors);
    }
  };

  const _handleCreateAccount = () => {
    router.push(`/${ROUTE_NAME.Register}`);
  };

  return (
    <AuthbgCover>
      <InputComponent
        placeholder="Enter Username or Email"
        value={values.email}
        onChangeText={(text) => handleChange("email", text)}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      <InputComponent
        placeholder="Enter Password"
        value={values.password}
        onChangeText={(text) => handleChange("password", text)}
        secureEntry={true}
        isIcon={true}
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
      <ButtonComponent
        btnTitle="Sign In"
        extraStyle={styles.btnStyle}
        onPress={_handleLogin}
      />
      <View style={styles.footerView}>
        <TouchableWithoutFeedback>
          <Text style={styles.forgetPasswordText}>Forgot Password ?</Text>
        </TouchableWithoutFeedback>
        <View style={styles.footerSecondaryView}>
          <Text style={styles.footerSecondaryText}>
            Are You New To Shoppers ?
          </Text>
          <TouchableWithoutFeedback onPress={_handleCreateAccount}>
            <Text style={styles.createAccountText}>Create An Account</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </AuthbgCover>
  );
};

export default Login;

const styles = StyleSheet.create({
  btnStyle: {
    marginVertical: verticalScale(6),
  },
  footerView: {
    marginVertical: verticalScale(6),
    alignItems: "center",
  },
  forgetPasswordText: {
    color: COLORS.primaryColors,
    fontSize: moderateScale(16),
    fontFamily: FONT.bold,
    letterSpacing: 0.2,
    marginBottom: verticalScale(22),
    marginTop: verticalScale(12),
  },
  footerSecondaryView: {
    alignItems: "center",
  },
  footerSecondaryText: {
    color: COLORS.blackColor,
    fontSize: moderateScale(16),
    fontFamily: FONT.semiBold,
    letterSpacing: 0.2,
    marginBottom: verticalScale(6),
  },
  createAccountText: {
    color: COLORS.primaryColors,
    fontSize: moderateScale(14),
    fontFamily: FONT.bold,
  },
  errorText: {
    color: COLORS.RedColor,
    fontFamily: FONT.semiBold,
    fontSize: moderateScale(14),
    textTransform: "capitalize",
    marginHorizontal: scale(6),
  },
});
