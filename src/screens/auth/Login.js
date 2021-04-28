/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Content,
  Icon,
  Card,
  Item,
  Input,
  H1,
  Button,
  H2,
} from "native-base";
import { Colors } from "../../constants/";
import { Formik } from "formik";
import * as yup from "yup";
import CompleteLogo from "../../components/svg/CompleteLogo";
import { useDispatch } from "react-redux";
import { LOGIN_URL } from "../../constants/ApisEndPoints";
import { TOKEN } from "../../constants/keys";
import Snackbar from "react-native-snackbar";
import { PostRequest } from "../../utils/Requests";
import { StoreData } from "../../utils/AsyncStorage";
import jwtDecode from "jwt-decode";
import { setAccessToken, setDetails } from "../../redux/actions/setDetails";

const Login = ({ navigation }) => {
  const loginSchema = yup.object({
    email: yup.string().email("Enter a valid email").required(),

    password: yup.string().required(),
  });
  const [submitted, setSubmitted] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [serverError, setServerError] = useState("");

  // const token = useSelector((state) => state);
  const dispatch = useDispatch();

  const _login = async (values) => {
    setProcessing(true);

    const data = {
      email: values.email,
      password: values.password,
    };

    await PostRequest(LOGIN_URL, data)
      .then((response) => {
        if (response.status === 200) {
          const responseData = response.data;
          const decoded = jwtDecode(responseData.token);
          console.log("DECODED: " + JSON.stringify(decoded));
          dispatch(setDetails(decoded));
          dispatch(setAccessToken(responseData.token));
          saveValue(TOKEN, responseData.token);
        }
      })
      .catch((error) => {
        if (error && error.response) {
          console.error(error.response.status);
          if (error.response.status === 404) {
            setServerError("Account doesn't exists with Email!");
            Snackbar.show({
              text: "Account doesn't exists with Email!",
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: "#9F4949",
              action: {
                text: "Register",
                textColor: "#FFFFFF",
                onPress: () => {
                  navigation.goBack();
                },
              },
            });
          } else if (error.response.status === 400) {
            setServerError("Password doesn't match!");
            Snackbar.show({
              text: "Password doesn't match!",
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: "#9F4949",
            });
          } else if (error.response.status === 500) {
            setServerError("Account can't be created at moment!");
            Snackbar.show({
              text: "Account can't be logged in at moment!",
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: "#9F4949",
              action: {
                text: "OK",
                textColor: "#FFFFFF",
                onPress: () => {
                  Snackbar.dismiss();
                },
              },
            });
          }
        }
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  const saveValue = async (key, value) => {
    await StoreData(key, value);
    navigation.navigate("Authenticated");
  };

  return (
    <Content style={{ backgroundColor: Colors.background }}>
      <Content style={{ paddingHorizontal: 30 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <CompleteLogo />
        </View>
        <H2 style={{ marginVertical: 20 }}>login to your AccOuNT</H2>
        <Formik
          validationSchema={loginSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => _login(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View>
                <Text style={styles.labelStyle}>Email</Text>
                <Card>
                  <Item>
                    <Input
                      placeholder="Your email"
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      autoCapitalize={"none"}
                      keyboardType="email-address"
                    />
                  </Item>
                </Card>
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View>
                <Text style={styles.labelStyle}>Password</Text>
                <Card>
                  <Item>
                    <Input
                      placeholder="********"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      secureTextEntry={true}
                    />
                  </Item>
                </Card>
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              <Text style={{ color: "#E46F4E", fontSize: 12 }}>
                In case you forget your password?
              </Text>

              <Button
                full
                onPress={handleSubmit}
                // onPress={() => navigation.navigate("Authenticated")}
                style={{
                  backgroundColor: Colors.primary,
                  marginBottom: 28,
                  height: 40,
                  marginTop: 20,
                }}
              >
                <Text>Login</Text>
                {processing && (
                  <ActivityIndicator color={"#FFFFFF"} size={"small"} />
                )}
              </Button>
            </View>
          )}
        </Formik>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "black",
              height: 1,
              flex: 1,
              alignSelf: "center",
            }}
          />
          <Text
            style={{ alignSelf: "center", paddingHorizontal: 5, fontSize: 18 }}
          >
            or
          </Text>
          <View
            style={{
              backgroundColor: "black",
              height: 1,
              flex: 1,
              alignSelf: "center",
            }}
          />
        </View>
        <View
          padder
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Icon
            name="facebook-official"
            type="FontAwesome"
            style={{ color: "#3B5998", fontSize: 40, marginRight: 15 }}
          />
          <View style={{ backgroundColor: "#F14336", paddingLeft: 3 }}>
            <Icon
              name="google-plus"
              type="MaterialCommunityIcons"
              style={{
                color: "#fff",
                fontSize: 35,
              }}
            />
          </View>
        </View>
        <Text style={{ alignSelf: "center", marginTop: 10, marginBottom: 15 }}>
          Don't have account
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 8,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: Colors.primary }}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Content>
  );
};

export default Login;

const styles = StyleSheet.create({
  labelStyle: {
    marginVertical: 4,
    color: Colors.black,
  },
  errorText: {
    color: "#E46F4E",
    fontSize: 12,
  },
});
