/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import MyHeader from "../../components/MyHeader";

import { Button, Card, H3, Icon, Item, Text, View, Content } from "native-base";
import { Colors } from "../../constants";

const Saloon = ({ navigation }) => {
  const [lang, setLang] = useState("English");
  return (
    <Content style={{ backgroundColor: Colors.background }}>
      <View padder>
        <Icon
          name="arrowleft"
          type="AntDesign"
          onPress={() => navigation.goBack()}
          style={{ marginBottom: 20 }}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.background,
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 9 }}>
          <View padder>
            <Text style={{ marginBottom: 25 }}>
              For your convenience you can register your saloon with our website
            </Text>
            <Button
              full
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: Colors.primary,
                marginBottom: 35,
                height: 40,
                marginTop: 20,
              }}
            >
              <Text>Visit our website</Text>
            </Button>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <H3 style={{ color: Colors.primary }}>
                For help and support you can contact our support team
              </H3>
              <Icon name="support-agent" type="MaterialIcons" />
            </View>
            <Text>
              {
                "Email address: info@saloonfinder.com \nContact number: +971 5240 00000 \nWhatsApp: +971 5240 20000"
              }
            </Text>
            <Text style={{ marginVertical: 20, fontSize: 20 }}>
              {"follow us for\nday to day updates on"}
            </Text>
            <View
              style={{
                flexDirection: "row",

                marginTop: 10,
              }}
            >
              <Icon
                name="facebook-official"
                type="FontAwesome"
                style={{ color: "#3B5998", fontSize: 40, marginRight: 15 }}
              />

              <Icon
                name="youtube"
                type="Entypo"
                style={{ color: "#F14336", fontSize: 40, marginRight: 15 }}
              />
              <Icon
                name="instagram"
                type="FontAwesome"
                style={{ color: "#F1366F", fontSize: 40, marginRight: 15 }}
              />
            </View>
          </View>
        </View>
        <View padder style={{ flex: 1 }}>
          <Button
            full
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: Colors.primary,
              marginBottom: 20,
              height: 40,
              marginTop: 20,
            }}
          >
            <Text>Save</Text>
          </Button>
        </View>
      </View>
    </Content>
  );
};

export default Saloon;
