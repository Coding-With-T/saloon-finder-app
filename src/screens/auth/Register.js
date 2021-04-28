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
  Picker,
  CheckBox,
  Button,
} from "native-base";
import { Colors } from "../../constants/";
import { Formik } from "formik";
import * as yup from "yup";
import { PostRequest } from "../../utils/Requests";
import { REGISTER_URL } from "../../constants/ApisEndPoints";
import { StoreData } from "../../utils/AsyncStorage";
import { TOKEN } from "../../constants/keys";
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setDetails } from "../../redux/actions/setDetails";
import jwtDecode from "jwt-decode";
import Snackbar from "react-native-snackbar";
import Dialog from "react-native-dialog";

const Register = ({ navigation }) => {
  const registerSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Enter a valid email").required(),
    phoneNumber: yup.string().min(10).required("Phone number is required"),
    password: yup
      .string()
      .min(8, "Password is too short - should be 8 chars minimum")
      .required(),
    check: yup.boolean().oneOf([true], "Please check the agreement!"),
  });
  const [country, setCountry] = useState("+92");
  const [privacyCheck, setPrivacyCheck] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [serverError, setServerError] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [processing, setProcessing] = useState(false);

  // const token = useSelector((state) => state);
  // console.log("abc: " + JSON.stringify(token));
  const dispatch = useDispatch();

  const _register = async (values) => {
    setProcessing(true);

    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      phonenumber: country + values.phoneNumber,
      email: values.email,
      password: values.password,
      preferred_language: "English",
    };

    // console.log("Hello" + JSON.stringify(data));

    await PostRequest(REGISTER_URL, data)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          const responseData = response.data.data;
          var decoded = jwtDecode(responseData.token);
          dispatch(setDetails(decoded));
          dispatch(setAccessToken(responseData.token));
          saveValue(TOKEN, responseData.token);
          setDialogVisible(true);
        }
      })
      .catch((error) => {
        if (error && error.response) {
          console.error(error.response.status);
          if (error.response.status === 409) {
            setServerError("Account exists with same Email!");
            Snackbar.show({
              text: "Account exists with same Email!",
              duration: Snackbar.LENGTH_INDEFINITE,
              backgroundColor: "#9F4949",
              action: {
                text: "Login",
                textColor: "#FFFFFF",
                onPress: () => {
                  navigation.goBack();
                },
              },
            });
          } else if (error.response.status === 500) {
            setServerError("Account can't be created at moment!");
            Snackbar.show({
              text: "Account can't be created at moment!",
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
    StoreData(key, value);
  };

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
      <Content style={{ paddingHorizontal: 30 }}>
        <H1 style={{ textTransform: "uppercase", marginVertical: 20 }}>
          Sign up as user
        </H1>
        <Formik
          validationSchema={registerSchema}
          initialValues={{
            email: "",
            firstName: "",
            password: "",
            lastName: "",
            phoneNumber: "",
            check: false,
          }}
          onSubmit={(values) => _register(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={{ marginBottom: 0 }}>
                <Text style={styles.labelStyle}>First Name</Text>
                <Card>
                  <Item>
                    <Input
                      placeholder="Your first name"
                      onChangeText={handleChange("firstName")}
                      onBlur={handleBlur("firstName")}
                      value={values.firstName}
                    />
                  </Item>
                </Card>
                <Text style={styles.errorText}>{errors.firstName}</Text>
              </View>

              <View>
                <Text style={styles.labelStyle}>Last Name</Text>
                <Card>
                  <Item>
                    <Input
                      placeholder="Your last name"
                      onChangeText={handleChange("lastName")}
                      onBlur={handleBlur("lastName")}
                      value={values.lastName}
                    />
                  </Item>
                </Card>
                <Text style={styles.errorText}>{errors.lastName}</Text>
              </View>
              <View>
                <Text style={styles.labelStyle}>Mobile Number</Text>

                <Card>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Item
                      picker
                      style={{
                        // borderRightWidth: 1,
                        borderColor: "lightgrey",
                        width: "30%",
                        elevation: 0,
                      }}
                    >
                      <Picker
                        mode="dropdown"
                        iosIcon={<Icon name="ios-chevron-down-sharp" />}
                        // style={{
                        //   borderRightWidth: 2,
                        //   borderColor: 'red',
                        // }}
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={country}
                        onValueChange={(value) => {
                          setCountry(value);
                        }}
                      >
                        <Picker.Item label="+92" value="+92" />
                        <Picker.Item label="+91" value="+91" />
                        <Picker.Item label="+90" value="+90" />
                        <Picker.Item label="+93" value="+93" />
                        <Picker.Item label="+94" value="+94" />
                      </Picker>
                    </Item>
                    <Item style={{ borderLeftWidth: 0.5 }}>
                      <Input
                        onChangeText={handleChange("phoneNumber")}
                        onBlur={handleBlur("phoneNumber")}
                        value={values.phoneNumber}
                        maxLength={10}
                        keyboardType={"phone-pad"}
                      />
                    </Item>
                  </View>
                </Card>
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              </View>
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
                <Text style={styles.errorText}>{errors.email}</Text>
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
                      secureTextEntry={!passwordVisible}
                    />
                    <Icon
                      name="eye"
                      onPress={() => setPasswordVisible(!passwordVisible)}
                    />
                  </Item>
                </Card>
                <Text style={styles.errorText}>{errors.password}</Text>
              </View>
              <View
                style={{
                  marginVertical: 10,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CheckBox
                  checked={values.check}
                  onPress={() => setFieldValue("check", !values.check)}
                  color={Colors.blue}
                />
                <Text style={{ marginLeft: 20, flex: 2 }}>
                  I agree to the {""}
                  <Text style={{ color: Colors.lightOrange }}>
                    privacy policy, website terms and conditions
                  </Text>
                </Text>
              </View>
              <Text style={styles.errorText}>{errors.check}</Text>

              <Button
                full
                onPress={handleSubmit}
                disabled={processing}
                style={{
                  backgroundColor: Colors.primary,
                  marginBottom: 20,
                  height: 40,
                  marginTop: 20,
                }}
              >
                <Text>Sign up</Text>
                {processing && (
                  <ActivityIndicator color={"#FFFFFF"} size={"small"} />
                )}
              </Button>
            </View>
          )}
        </Formik>
        <View
          style={{
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Saloon")}>
            <Text>
              Register as saloon{"    "}
              <Text style={{ color: Colors.primary }}>Click here</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{ color: Colors.primary, marginTop: 5, marginBottom: 10 }}
            >
              Sign in now
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("ChangeLang")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="language" type="MaterialIcons" />
                <Text style={{ marginLeft: 3 }}>English</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Saloon")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="support-agent" type="MaterialIcons" />
                <Text style={{ marginLeft: 3 }}>Support</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Content>

      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Welcome to Saloon Finder</Dialog.Title>
        <Dialog.Description>
          Your account has been created! We hope you will have wonderfull
          experience.
        </Dialog.Description>
        <Dialog.Button
          label="Dive in"
          onPress={() => {
            setDialogVisible(false);
            navigation.navigate("Authenticated");
          }}
        />
      </Dialog.Container>
    </Content>
  );
};

export default Register;

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
