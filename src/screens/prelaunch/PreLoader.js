import { Content, Icon } from "native-base";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import CompleteLogo from "../../components/svg/CompleteLogo";
import { Colors } from "../../constants";

const PreLoader = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <ActivityIndicator color={"#9F4949"} size={"large"} />
    </View>
    // <Content
    //   style={{ backgroundColor: Colors.background, flex: 1, flexGrow: 1 }}
    // >
    //   <View
    //     style={{
    //       marginHorizontal: 10,
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //       flexDirection: "row",
    //       marginBottom: 5,
    //     }}
    //   >
    //     <CompleteLogo height={60} width={90} />
    //     <Icon style={{ fontSize: 35 }} name="menu" />
    //   </View>
    //   <View
    //     style={{
    //       justifyContent: "center",
    //       alignItems: "center",
    //       flex: 7,
    //       flexGrow: 1,
    //     }}
    //   >
    //     <ActivityIndicator color={"#9F4949"} size={"large"} />
    //   </View>
    // </Content>
  );
};

export default PreLoader;
