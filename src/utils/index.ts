// import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
// import { ILoginResponse, IUserLocation } from "../interface/Types";

export const nullOrUndefineCheck = (value: any) => {
  if (value === null || value === undefined) {
    return "";
  }
  return value;
};

export const isEmptyString = (val: any) => {
  return val === null || val === undefined || val.length === 0;
};

export const makeSentenceCase = (val: string | undefined) => {
  let res = val;
  if (!isEmptyString(val)) {
    val = val!.toLowerCase();
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  } else {
    res = "";
  }
  return res;
};

export const camelCaseToSentenceCase = (val: string) => {
  let res = "";
  try {
    if (!isEmptyString(val)) {
      res = val.replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ");
    }
  } catch (error) {
    console.log("ERROR OCCURRED WHILE PARSING:::", error);
  }

  return capitalizeFirstLetter(res);
};

export const capitalizeFirstLetter = (val: string) => {
  let res = val;
  if (!isEmptyString(val)) {
    res = val.length > 0 ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  return res;
};

export const titleCase = (str: string) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
};

export const isNullOrUndefined = (value: any) => {
  return value === null || value === undefined || value === "";
};

export const formatNumberWhileTyping = (value: string) => {
  // console.log('formatNumberWhileTyping', value );
  if (isNullOrUndefined(value) || value === "") {
    return "";
  }
  // eslint-disable-next-line radix
  return parseInt(value.replace(/,/g, "")).toLocaleString();
};

export function currencyFormat(num: number) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const formatCurrencyWithDecimal = (
  amount: number | string | undefined
) => {
  // @ts-ignore
  let num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (num === 0 || isNullOrUndefined(num)) {
    return "₦ 0";
  }

  const currFormat = currencyFormat(num!);

  return isNullOrUndefined(currFormat) || isEmptyString(currFormat)
    ? ""
    : "₦ ".concat(currencyFormat(num!));
};
export const formatCurrencyWithDecimalFromKoboToNaira = (
  amount: number | string | undefined
) => {
  // @ts-ignore
  let num = typeof amount === "string" ? parseFloat(amount) : amount;
  num = num !== undefined ? num / 100 : num;

  if (num === 0 || isNullOrUndefined(num)) {
    return "₦ 0";
  }

  const currFormat = currencyFormat(num!);

  return isNullOrUndefined(currFormat) || isEmptyString(currFormat)
    ? ""
    : "₦ ".concat(currencyFormat(num!));
};

export const formatCurrencyWithDecimalWithoutSign = (
  amount: number | string | undefined
) => {
  // @ts-ignore
  let num = typeof amount === "string" ? parseFloat(amount) : amount;

  if (num === 0 || isNullOrUndefined(num)) {
    return "0";
  }

  const currFormat = currencyFormat(num!);

  return isNullOrUndefined(currFormat) || isEmptyString(currFormat)
    ? ""
    : currencyFormat(num!);
};

export const formatDate = (date: string) => {
  return date.split("-").reverse().join("/");
};

export const appLog = (message?: any, ...optionalParams: any[]) => {
  console.log(message, ...optionalParams);
};

export const containsNumbers = (str: string) => {
  var regexp = /\d/g;
  return regexp.test(str);
};

export const isNumberIgnoringPlusSign = (str: string) => {
  //@ts-ignore
  return !isNaN(str.replace("+", "").replace("(", "").replace(")", ""));
};

export const modifyPhoneNumber = (num: string | "") => {
  let res = num;
  if (num.length === 11) {
    res = "+234" + num.substring(1);
  } else if (num.length === 10) {
    res = "+234" + num;
  } else if (num === "") {
    res = "";
  } else if (isNullOrUndefined(num)) {
    res = "";
  } else if (num.substring(4) === "+234") {
    res = num;
  }
  return res;
};
export const removePhoneNumber234 = (num: string | "") => {
  let res = num;
  if (isNullOrUndefined(num)) {
    res = "";
  } else if (num.length === 14) {
    res = "0" + num.substring(4);
  } else if (num.length === 13) {
    res = "0" + num.substring(3);
  } else if (num === "") {
    res = "";
  }
  return res;
};

// export const storageAsync = async (key: string, value: any) => {
//   let data = "";
//   if (typeof value === "string") {
//     data = value;
//   } else {
//     data = JSON.stringify(value);
//   }
//   await AsyncStorage.setItem(key, data)
//     .then(() => {})
//     .catch((error) => {
//       console.log("error saving value storageAsync", error);
//     });
// };

// export const storageAsyncGet = async (
//   key: string,
//   callback: (value: string) => void
// ) => {
//   await AsyncStorage.getItem(key)
//     .then((value) => {
//       // logLogLog('inside_storage', value);
//       if (value === null) {
//         callback("");
//       } else {
//         // logLogLog('value_first', value);
//         callback(value);
//       }
//     })
//     .catch((error) => {
//       console.log("error getting value storageAsync", error);
//     });
// };

// export const storageAsyncRemove = async (key: string) => {
//   await AsyncStorage.removeItem(key)
//     .then(() => {
//       // logLogLog('Item removed');
//     })
//     .catch((error) => {
//       console.log("error removing value storageAsync", error);
//     });
// };

export const alertWithCondition = (
  isPhoneNoAvailable: boolean,
  sendAlert: boolean,
  cancel: () => void,
  ok: () => void
) => {
  if (true) {
    Alert.alert(
      "Phone Number Not Added",
      "Please add your apartment security phone number.",
      [
        {
          text: "Cancel",
          onPress: () => cancel(),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => ok(),
        },
      ]
    );
  }
};
