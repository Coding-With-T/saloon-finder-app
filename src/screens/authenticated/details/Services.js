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
const Services = ({ navigation, isLoading, data }) => {
  const [selected, setSelected] = useState("");
  const data2 = ["FEATURED", "HAIR", "HAIR COLORING"];

  if (isLoading) {
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
      <View padder>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ width: WIDTH }}
          showsHorizontalScrollIndicator={false}
        >
          {data2.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setSelected(item)}
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 10,
                backgroundColor:
                  selected === item ? Colors.primary : Colors.background,
              }}
            >
              <Text
                style={{
                  color: selected === item ? "white" : Colors.primary,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
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
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, color: Colors.primary }}
              >
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
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
              <Text>haircut</Text>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, color: Colors.primary }}
              >
                1h
              </Text>
            </Body>
            <Right>
              <Text style={{ color: Colors.primary, fontSize: 18 }}>
                Start From
              </Text>

              <Text>aed 30</Text>
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
              <Text>eyebrow threading</Text>
              <Text
                numberOfLines={1}
                style={{ fontSize: 18, color: Colors.primary }}
              >
                15min
              </Text>
            </Body>
            <Right>
              <Text>aed 30</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
      <View padder>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailsContainer", { screen: "AllServices" })
          }
        >
          <Text style={{ color: Colors.primary }}>See all services</Text>
        </TouchableOpacity>
      </View>
    </Content>
  );
};

export default Services;
