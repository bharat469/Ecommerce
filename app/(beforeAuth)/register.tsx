import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IconAdapter from "@/src/helpers/iconAdapter";
import { useRouter } from "expo-router";
import { scale } from "@/src/helpers/Dimension";
import AuthbgCover from "@/src/components/covers/authbgCover";
import InputComponent from "@/src/components/input";
import { useFormValidation } from "@/src/components/useFormValidation";
import ButtonComponent from "@/src/components/buttonComponent";

const Register = () => {
  const router = useRouter();
  const { values, errors, validate, handleChange } = useFormValidation({
    email: "",
    password: "",
    phoneNumber: "",
    userName:""
  });
  return (
    <AuthbgCover isBackIcon headerTypo="Let's get started! 🌈">

      <View>
        <InputComponent
          placeholder="Enter your full name "
          value={values.userName}
          onChangeText={(text) => handleChange('userName', text)}
        />
        <InputComponent
          placeholder="Enter your Email"
          value={values.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <InputComponent
          placeholder="Enter your Phone Number"
          value={values.phoneNumber}
          onChangeText={(text) => handleChange("phoneNumber", text)}
          keyBoardType='number-pad'
        />
        <ButtonComponent btnTitle="Register Now" />
      </View>
    </AuthbgCover>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerView: {
    flex: 1,
  },
  registerMainView: {
    flex: 1,
    backgroundColor: "transparent",
  },

});
