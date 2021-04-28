/* eslint-disable react-native/no-inline-styles */
import {
  Content,
  View,
  Text,
  Icon,
  H1,
  H3,
  Tab,
  Tabs,
  Card,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
} from "native-base";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Colors, WIDTH } from "../../../constants";
import Services from "./Services";
import Deals from "./Deals";
import { TouchableOpacity } from "react-native-gesture-handler";
import Grid from "../../../components/Grid";
import Rating from "../../../components/svg/Rating";
import SaloonHeader from "../../../components/SaloonHeader";
import SaloonCard from "../../../components/SaloonCard";
import CalculateDistance from "../../../utils/CalculateDistance";
import { useSelector } from "react-redux";
import moment from "moment";
import { GetRequest } from "../../../utils/Requests";
import { GET_SALOON_SPECIFIC_SERVICES } from "../../../constants/ApisEndPoints";

const Details = ({ navigation, route }) => {
  const details = route.params.item ? route.params.item : [];
  const user_data = useSelector((state) => state);
  const token = user_data.current_user.token;
  const location = user_data.current_user.location;
  const dateToday = moment().format("DD-MMM-YYYY");
  const [services, setServices] = useState([]);
  const [upadtingServices, setUpadtingServices] = useState(true);

  const data = [
    {
      _id: 1,
      name: "Peter",
      pro: "Hairdresse",
    },
    {
      _id: 2,
      name: "Sarah",
      pro: "Nail Artist",
    },
    {
      _id: 3,
      name: "Erick",
      pro: "EyelMaker",
    },
  ];
  const sloonCardData = [
    {
      _id: 1,
      badgeText: "Unique",
      badgeText1: "New",
      badgeColor: "purple",
      badgeColor1: Colors.blue,
      dHeading: "Some Name of Saloon",
      subHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.",
      ratingText: "4.0 Great",
      count: 6,
      distance: "3.5Km",
      locationColor: "white",
      img: require("../../../../assets/img/womenS.jpg"),

      textColor: "white",
    },
    {
      _id: 2,
      badgeText: "Unique",
      badgeText1: "New",
      badgeColor: "purple",
      badgeColor1: Colors.blue,
      dHeading: "Some Name of Saloon",
      subHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.",
      ratingText: "4.0 Great",
      count: 6,
      distance: "3.5Km",
      locationColor: "white",
      img: require("../../../../assets/img/womenS.jpg"),

      textColor: "white",
    },
    {
      _id: 3,
      badgeText: "Unique",
      badgeText1: "New",
      badgeColor: "purple",
      badgeColor1: Colors.blue,
      dHeading: "Some Name of Saloon",
      subHeading:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quam rem laboriosam tenetur nulla, sit error.",
      ratingText: "4.0 Great",
      count: 6,
      distance: "3.5Km",
      locationColor: "white",
      img: require("../../../../assets/img/womenS.jpg"),

      textColor: "white",
    },
  ];
  const _renderItem = ({ item }) => {
    if (item.empty) {
      return <View style={{ flex: 1, backgroundColor: "transparnet" }} />;
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Card
          style={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              borderWidth: 1,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
              backgroundColor: "#c4c4c4",
            }}
          >
            <Text style={{ fontSize: 35 }}>{item.name[0]}</Text>
          </View>
          <H3>{item.name}</H3>
          <H3 style={{ color: Colors.primary }}>{item.pro}</H3>
        </Card>
      </SafeAreaView>
    );
  };

  useEffect(() => {
    getServices();
  }, []);

  const getWeeklyWorkHours = (data) => {
    const splittedData = data.split("\n");
    return splittedData.length;
  };

  const getTodayWorkHours = (data) => {
    var d = new Date();
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const splittedData = data.split("\n");
    let finalData = [];
    splittedData.map((item, i) => {
      if (
        item.split(": ")[0].toLowerCase() === days[d.getDay()].toLowerCase()
      ) {
        finalData = item.split(": ")[1].split("–");
      }
    });
    return finalData;
  };

  const getServices = async () => {
    const params = {
      id: details.id,
    };
    GetRequest(GET_SALOON_SPECIFIC_SERVICES, params, token)
      .then((response) => {
        setServices(response.data.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setUpadtingServices(false);
      });
  };

  return (
    <Content style={{ backgroundColor: Colors.background }}>
      <ImageBackground
        source={{ uri: details.logo_path }} //require("../../../../assets/img/saloon.png")}
        style={{ width: WIDTH, height: 250, resizeMode: "cover" }}
      >
        <View
          padder
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            paddingVertical: 5,
          }}
        >
          <Icon name="arrowleft" type="AntDesign" style={{ color: "white" }} />
          <Icon name="hearto" type="AntDesign" style={{ color: "white" }} />
        </View>
      </ImageBackground>
      <View padder>
        <H1 style={{ marginVertical: 15 }}>{details.name}</H1>
        <Text>{details.address}</Text>
        <Text style={{ color: Colors.blue, fontSize: 12, marginVertical: 15 }}>
          Show on map
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
            style={{ color: Colors.lightOrange, fontSize: 20, marginRight: 10 }}
          />
          <Text style={{ color: Colors.black, marginRight: 22 }}>
            {details.rating + " Great "}
            <Text
              style={{ color: Colors.grey }}
            >{`(${details.total_reviews})`}</Text>
          </Text>
          <Icon
            name="location"
            style={{ color: Colors.black, fontSize: 20, marginRight: 5 }}
          />
          <Text style={{ color: Colors.black, marginRight: 22 }}>
            {CalculateDistance.convertKmsToMiles(
              CalculateDistance.getDistanceFromLatLonInKm(
                location.latitude,
                location.longitude,
                details.latitude,
                details.longitude
              )
            ).toFixed(2) + " mi"}
          </Text>
        </View>
      </View>
      <View
        padder
        style={{
          borderBottomColor: Colors.grey,
          borderBottomWidth: 1,
        }}
      >
        <View style={styles.iconListContainer}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="clockcircleo" type="AntDesign" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.primaryText}>weekly work hours</Text>
              <Text>{`${getWeeklyWorkHours(
                details.business_hours
              )} days`}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="cut" type="FontAwesome" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.primaryText}>Specialized IN</Text>
              <Text>{details.saloon_type}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 15 }}>
          <Icon name="calendar" type="AntDesign" />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.primaryText}>Today</Text>
            <Text>{`${dateToday}, ${
              getTodayWorkHours(details.business_hours)[0]
            } to ${getTodayWorkHours(details.business_hours)[1]}`}</Text>
          </View>
        </View>
      </View>
      <View
        padder
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.grey,
          marginBottom: 10,
        }}
      >
        <H3 style={{ marginBottom: 15 }}>About us</H3>
        <Text style={{ marginBottom: 20 }}>{details.description}</Text>
      </View>

      <Tabs
        tabBarActiveTextColor={Colors.black}
        tabBarUnderlineStyle={{ backgroundColor: Colors.primary }}
        tabBarInactiveTextColor={Colors.grey}
      >
        <Tab
          heading="Services"
          tabStyle={{ backgroundColor: Colors.background }}
          textStyle={{ color: Colors.grey }}
          activeTabStyle={{ backgroundColor: Colors.background }}
          activeTextStyle={{ color: Colors.black, fontWeight: "normal" }}
        >
          <Services navigation={navigation} data={services} />
        </Tab>
        <Tab
          heading="Deals"
          tabStyle={{ backgroundColor: Colors.background }}
          textStyle={{ color: Colors.grey }}
          activeTabStyle={{ backgroundColor: Colors.background }}
          activeTextStyle={{ color: Colors.black, fontWeight: "normal" }}
        >
          <Deals navigation={navigation} />
        </Tab>
      </Tabs>
      <View padder style={{ backgroundColor: Colors.primary }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <Text style={{ color: "white" }}>Our specialist</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailsContainer", { screen: "AllStaff" })
            }
          >
            <Text style={{ color: "white" }}>See all staff</Text>
          </TouchableOpacity>
        </View>

        <Grid data={data} _renderItem={_renderItem} noOfColumns={3} />
      </View>
      <View padder>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <Text style={{ fontSize: 20 }}>Reviews</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailsContainer", { screen: "AllReviews" })
            }
          >
            <Text style={{ color: Colors.primary, fontSize: 20 }}>
              See all 6 reviews
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Rating />
        </View>
        <Text style={{ marginTop: 15 }}>4.0 Great (6)</Text>
      </View>
      <Content style={{ borderBottomColor: Colors.grey, borderBottomWidth: 1 }}>
        <List>
          <ListItem thumbnail>
            <Left>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: Colors.blue,
                }}
              >
                <Text style={{ color: "white" }}>MA</Text>
              </View>
            </Left>
            <Body>
              <Text>Mohammed Abdul Sami</Text>
              <Text numberOfLines={1} note>
                Nov 20 , 2020
              </Text>
            </Body>
            <Right>
              <Rating />
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: Colors.blue,
                }}
              >
                <Text style={{ color: "white" }}>MA</Text>
              </View>
            </Left>
            <Body>
              <Text>Mohammed Abdul Sami</Text>
              <Text numberOfLines={1} note>
                Nov 20 , 2020
              </Text>
            </Body>
            <Right>
              <Rating />
            </Right>
          </ListItem>
        </List>
        <View padder>
          <Text>
            A beauty salon is an establishment that offers a variety of cosmetic
            treatments and cosmetic services for men.
          </Text>
        </View>
      </Content>
      {/* <View padder>
        <SaloonHeader heading={"Nearby Saloons"} color={"black"} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {sloonCardData.map((item) => (
            <SaloonCard
              key={item._id}
              badgeText={item.badgeText}
              badgeText1={item.badgeText1}
              badgeColor={item.badgeColor}
              badgeColor1={item.badgeColor1}
              dHeading={item.dHeading}
              subHeading={item.subHeading}
              ratingText={item.ratingText}
              count={item.count}
              distance={item.distance}
              locationColor={Colors.grey}
              img={item.img}
              textColor={"black"}
              buttonText="View Details"
              // buttonClick={() => navigation.navigate('Saloon')}
            />
          ))}
        </ScrollView>
      </View> */}
    </Content>
  );
};

const styles = StyleSheet.create({
  iconListContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  primaryText: {
    color: Colors.primary,
  },
});
export default Details;
