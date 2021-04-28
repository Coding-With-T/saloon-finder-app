import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error: " + error);
  }
};

export const GetData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? value : null;
  } catch (error) {
    console.error("Error: " + error);
  }
};

export const RemoveData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }

  console.log("Done.");
};
