import { ACCESS_TOKEN, CURRENT_LOCATION, USER_DETAILS } from "../constants";

export function setDetails(details) {
  return {
    type: USER_DETAILS,
    payload: details,
  };
}

export function setAccessToken(token) {
  return {
    type: ACCESS_TOKEN,
    payload: token,
  };
}

export function setCurrentLocation(location) {
  return {
    type: CURRENT_LOCATION,
    payload: location,
  };
}
