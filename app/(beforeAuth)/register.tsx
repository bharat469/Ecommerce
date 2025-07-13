import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  View,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import IconAdapter from "@/src/helpers/iconAdapter";
import { useRouter } from "expo-router";
import { scale, verticalScale } from "@/src/helpers/Dimension";
import AuthbgCover from "@/src/components/covers/authbgCover";
import InputComponent from "@/src/components/input";
import { useFormValidation } from "@/src/components/useFormValidation";
import ButtonComponent from "@/src/components/buttonComponent";
import * as ImagePicker from "expo-image-picker";
import { COLORS } from "@/src/helpers/colors";
import ImageAdapter from "@/src/helpers/imageAdapter";

const Register = () => {
  const router = useRouter();
  const { values, errors, validate, handleChange } = useFormValidation({
    email: "",
    password: "",
    phoneNumber: "",
    userName: "",
  });
  const [Image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if(!result.canceled){
      setImage(result?.assets[0]?.uri)
    }

  };

  return (
    <AuthbgCover isBackIcon headerTypo="Let's get started! 🌈" extraStyleOfWhiteSpace={styles.whiteSheet}>
      <View style={styles.imageStyle}>
        {Image ? (
          <TouchableOpacity onPress={pickImage} >
            <ImageAdapter source={{ uri: Image }} style={styles.profileImage} />
          </TouchableOpacity>

        ) : (
          <IconAdapter
            family="FontAwesome"
            name="user-plus"
            size={90}
            color={COLORS.primaryColors}
            onPress={pickImage}
          />
        )}
      </View>

      <View>
        <InputComponent
          placeholder="Enter your full name "
          value={values.userName}
          onChangeText={(text) => handleChange("userName", text)}
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
          keyBoardType="number-pad"
        />
        <ButtonComponent btnTitle="Register Now" extraStyle={{marginVertical:12}} />
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
  imageStyle: {
    alignItems: "center",
    marginVertical: 12,
  },
  profileImage:{
    width:scale(90),
    height:verticalScale(90),
    borderRadius:50
  },
  whiteSheet:{
    height:verticalScale(520)
  }
});
