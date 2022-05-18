import { Maybe } from "../../types";

export const nameInputPrompts = [
  {
    type: "input",
    name: "firstName",
    message: "First name (required): ",
    validate(value: Maybe<string>) {
      if (value && value?.length > 0) return true;
      return "Please enter a valid first name.";
    },
  },
  {
    type: "input",
    name: "middleName",
    message: "Middle name (optional): ",
    default() {
      return null;
    },
  },
  {
    type: "input",
    name: "lastName",
    message: "Last name (required): ",
    validate(value: Maybe<string>) {
      if (value && value?.length > 0) return true;
      return "Please enter a valid last name.";
    },
  },
];

export const addressInputPrompts = [
  {
    type: "input",
    name: "streetAddress",
    message: "Street address (required): ",
    validate(value: Maybe<string>) {
      if (value && value?.length > 0) return true;
      return "Please enter a valid stree address.";
    },
  },
  {
    type: "input",
    name: "streetAddress2",
    message: "Street address line 2 (optional)",
    default() {
      return null;
    },
  },
  {
    type: "input",
    name: "city",
    message: "City (required): ",
    validate(value: Maybe<string>) {
      if (value && value?.length > 0) return true;
      return "Please enter a valid city.";
    },
  },
  {
    type: "input",
    name: "state",
    message: "State (required): ",
    validate(value: Maybe<string>) {
      if (value && value?.length > 0) return true;
      return "Please enter a valid state.";
    },
  },
  {
    type: "input",
    name: "postalCode",
    message: "Postal code (required): ",
    validate(value: Maybe<string>) {
      if (value && value?.length > 0) return true;
      return "Please enter a valid postal code.";
    },
  },
  {
    type: "list",
    name: "countryCode",
    message: "Country (required): ",
    choices: ["US", "CA", "MX"],
    default: "US",
    filter(val: string) {
      return val.toUpperCase();
    },
  },
];

export const phoneInputPrompts = [
  {
    type: "input",
    name: "telephone",
    message: "Telephone number (optional): ",
  },
];

export const have2ndAddressInputPrompt = [
  {
    type: "confirm",
    name: "haveAddress2",
    message: "Would you like to enter a 2nd address? ",
    default: false,
  },
];

export const addAnotherContact = [
  {
    type: "confirm",
    name: "addAnotherContact",
    message: "Would you like to add another contact? ",
    default: false,
  },
];

export const initialPrompt = () => {
  console.log("Please enter a personal contact.");
};

export const address1Prompt = () => {
  console.log("Please enter the 1st address for this contact.");
};

export const address2Prompt = () => {
  console.log("Please enter the 2nd address for this contact.");
};
