import React from "react";
import MyHeader from "../../components/MyHeader";
import { Avatar, Divider } from "react-native-elements";
import { Colors, WIDTH } from "../../constants";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import SvgUri from "react-native-svg-uri";
import {
  Content,
  View,
  Text,
  H3,
  H2,
  Icon,
  Button,
  H1,
  List,
  ListItem,
  Radio,
} from "native-base";
import { RemoveData } from "../../utils/AsyncStorage";
import { TOKEN } from "../../constants/keys";

const Profile = ({ navigation }) => {
  const onLogout = () => {
    RemoveData(TOKEN).then(() => {
      navigation.navigate("Auth");
    });
  };

  return (
    <Content style={{ backgroundColor: Colors.background }}>
      <Icon
        name="arrowleft"
        type="AntDesign"
        style={{ marginLeft: 15, color: "black", marginTop: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View
        style={{
          alignItems: "center",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
        }}
      >
        <Avatar
          size={116}
          rounded
          source={{
            uri:
              "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
          }}
        />
        <H2 style={{ paddingTop: 8 }}>user name</H2>
        <Text style={styles.editprofile}>Edit profile</Text>
      </View>
      <View style={{ paddingTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group282.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />

          <Text style={{ marginLeft: 10 }}>My Appointments </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group274.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{ marginLeft: 10 }}>My Vouchers </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group275.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{ marginLeft: 10 }}>My Favorites </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group276.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{ marginLeft: 10 }}> My Consultation Forms</Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group277.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{ marginLeft: 10 }}>Settings </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group278.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{ marginLeft: 10 }}>Payment Methods </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group280.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{ marginLeft: 10 }}>Customer Support </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
        >
          <Image
            source={require("../../../assets/img/Group279.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{ marginLeft: 10 }}>English </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </View>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
          }}
          onPress={() => onLogout()}
        >
          <Icon name="logout" type="MaterialIcons" style={{ fontSize: 30 }} />
          <Text style={{ marginLeft: 10 }}>Log out </Text>
          <View
            style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
          >
            <Icon name="right" type="AntDesign" style={{ fontSize: 20 }} />
          </View>
        </TouchableOpacity>

        <View style={{ borderWidth: 0.5, borderColor: "gray" }}></View>
      </View>
    </Content>
  );
};
const styles = StyleSheet.create({
  editprofile: { color: "#007CFF", fontSize: 15, paddingTop: 5 },
});
export default Profile;
