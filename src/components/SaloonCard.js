/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Text, View, H3, Icon, Button } from "native-base";
import { ImageBackground } from "react-native";
import { Colors, WIDTH } from "../constants";
const ITEM_WIDTH = WIDTH * 0.9;
const SaloonCard = ({
  img,
  heading,
  badgeText,
  badgeText1,
  dHeading,
  subHeading,
  ratingText,
  count,
  distance,
  textColor,
  badgeColor,
  badgeColor1,
  locationColor,
  saved,
  buttonText,
  buttonClick,
}) => {
  return (
    <View style={{ marginTop: 20, marginRight: 15 }}>
      <View>
        <View>
          <ImageBackground
            source={{ uri: img }}
            style={{
              width: ITEM_WIDTH,
              height: 130,
              resizeMode: "cover",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 8,
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: badgeColor,
                  height: 22,
                  paddingHorizontal: 5,
                  width: 65,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>{badgeText}</Text>
              </View>
              <Icon
                name="heart"
                type={saved ? "Ionicons" : "EvilIcons"}
                style={{ color: saved ? "red" : "white" }}
              />
            </View>
          </ImageBackground>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                backgroundColor: badgeColor1,
                height: 22,
                paddingHorizontal: 5,
                width: 60,
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text style={{ color: "white" }}>{badgeText1}</Text>
            </View>

            <H3
              numberOfLines={1}
              style={{ color: textColor, maxWidth: WIDTH * 0.9 }}
            >
              {dHeading}
            </H3>
            <Text
              numberOfLines={3}
              style={{ color: textColor, maxWidth: WIDTH * 0.9 }}
            >
              {subHeading}
            </Text>
            <View
              style={{
                marginVertical: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                name="star"
                style={{ color: "yellow", fontSize: 20, marginRight: 10 }}
              />
              <Text style={{ color: textColor, marginRight: 22 }}>
                {ratingText}
                <Text style={{ color: "#c4c4c4" }}>{`(${count})`}</Text>
              </Text>
              <Icon
                name="location"
                style={{ color: locationColor, fontSize: 20, marginRight: 5 }}
              />
              <Text style={{ color: textColor, marginRight: 22 }}>
                {distance}
              </Text>
            </View>
            <Button
              style={{
                backgroundColor: Colors.lightOrange,
                paddingHorizontal: 15,
                borderRadius: 18,
                height: 30,
              }}
              onPress={buttonClick}
            >
              <Text style={{ color: "white", textTransform: "uppercase" }}>
                {buttonText ? buttonText : "View Deal"}
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SaloonCard;
