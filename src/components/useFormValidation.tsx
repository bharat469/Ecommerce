import React, { useState } from "react";
import {
  isValidEmail,
  isValidPassword,
  isValidPhoneNumber,
} from "../helpers/validationAdapter";

type FormField = {
  email?: string;
  password?: string;
  phoneNumber?: string;
  userName?:string
};

type ValidationError = {
  [k in keyof FormField]?: string;
};

export const useFormValidation = (initialState: FormField) => {
  const [values, setValues] = useState<FormField>(initialState);
  const [errors, setErrors] = useState<ValidationError>({});

  const handleChange = (field: keyof FormField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): boolean => {
    const newError: ValidationError = {};

    // Email validation (only if email field is present)
    if ("email" in values) {
      if (!values.email?.trim()) {
        newError.email = "Email can’t be empty.";
      } else if (!isValidEmail(values.email)) {
        newError.email = "Please enter a valid email address.";
      }
    }

    // Password validation (only if password field is present)
    if ("password" in values) {
      if (!values.password?.trim()) {
        newError.password = "Password is required.";
      } else if (!isValidPassword(values.password)) {
        newError.password = "Password must be at least 8 characters.";
      }
    }

    // Phone number validation (optional)
    if ("phoneNumber" in values) {
      const phone = values.phoneNumber?.trim() ?? "";
      if (!phone) {
        newError.phoneNumber = "Phone number is required.";
      } else if (phone.length < 10) {
        newError.phoneNumber = "Please enter a valid 10-digit phone number.";
      } else if (!isValidPhoneNumber(phone)) {
        newError.phoneNumber = "Invalid phone number format.";
      }
    }
    if ("userName" in values) {
      const userName = values.userName?.trim() ?? "";
      if (!userName) {
        newError.userName = "Enter your full name to continue.";
      } 
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  return {
    values,
    errors,
    validate,
    setErrors,
    setValues,
    handleChange,
  };
};
