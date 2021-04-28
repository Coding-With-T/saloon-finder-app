import React from "react";
import { ActivityIndicator } from "react-native";

const CustomActivityIndicator = ({ color, size }) => {
  return (
    <ActivityIndicator
      color={color ? color : "#9F4949"}
      size={size ? size : "large"}
    />
  );
};

export default CustomActivityIndicator;
