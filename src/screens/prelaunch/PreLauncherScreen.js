import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useDispatch } from "react-redux";
import { TOKEN } from "../../constants/keys";
import {
  setAccessToken,
  setCurrentLocation,
  setDetails,
} from "../../redux/actions/setDetails";
import { GetData } from "../../utils/AsyncStorage";
import GetLocation from "react-native-get-location";

const PreLauncherScreen = ({ navigation }) => {
  const [processing, setProcessing] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getCurrentUser(), getCurrentLocation()])
      .then((values) => {
        console.log("All done..");
      })
      .finally(() => {
        setProcessing(false);
      });
  });

  const getCurrentUser = async () => {
    GetData(TOKEN)
      .then((token) => {
        // getCurrentLocation();
        if (token) {
          console.log("TOKEN: " + token);
          const decoded = jwtDecode(token);
          dispatch(setAccessToken(token));
          dispatch(setDetails(decoded));
          navigation.navigate("Authenticated");
        } else {
          navigation.navigate("Auth");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCurrentLocation = async () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then((location) => {
        console.log(location);
        dispatch(setCurrentLocation(location));
      })
      .catch((error) => {
        const { code, message } = error;
        console.warn(code, message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {processing && <ActivityIndicator color={"#9F4949"} size={"large"} />}
    </View>
  );
};

export default PreLauncherScreen;
