/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import {
  View,
  Text,
  Content,
  List,
  ListItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
} from "native-base";
import { Colors, WIDTH } from "../../../constants";
import { SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomActivityIndicator from "../../../components/ActivityIndicator";

const Deals = ({ navigation, isLoading }) => {
  if (!isLoading) {
    return (
      <View
        style={{ height: 200, justifyContent: "center", alignItems: "center" }}
      >
        <CustomActivityIndicator />
      </View>
    );
  }

  return (
    <Content style={{ backgroundColor: Colors.background }}>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require("../../../../assets/img/service.png")}
              />
            </Left>
            <Body>
              <Text>{"Hair & Beauty Packages"}</Text>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, color: Colors.primary }}
              >
                Valid till 25 Dec
              </Text>
            </Body>
            <Right style={{ justifyContent: "flex-end" }}>
              <Text style={{ color: Colors.primary, fontSize: 20 }}>
                50% off
              </Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require("../../../../assets/img/service.png")}
              />
            </Left>
            <Body>
              <Text>{"Beauty Packages"}</Text>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, color: Colors.primary }}
              >
                Valid till 21 Dec
              </Text>
            </Body>
            <Right style={{ justifyContent: "flex-end" }}>
              <Text style={{ color: Colors.primary, fontSize: 20 }}>
                10% off
              </Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={require("../../../../assets/img/service.png")}
              />
            </Left>
            <Body>
              <Text>{"Nails & Beauty Packages"}</Text>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, color: Colors.primary }}
              >
                Valid till 25 Jan
              </Text>
            </Body>
            <Right style={{ justifyContent: "flex-end" }}>
              <Text style={{ color: Colors.primary, fontSize: 20 }}>
                40% off
              </Text>
            </Right>
          </ListItem>
        </List>
      </Content>
      <View padder>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsContainer", { screen: "AllDeals" })
          }
        >
          <Text style={{ color: Colors.primary }}>See all Deals</Text>
        </TouchableOpacity>
      </View>
    </Content>
  );
};

export default Deals;
