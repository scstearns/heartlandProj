import inquirer from "inquirer";
import { Address, Contact } from "../types";
import {
  address1Prompt,
  address2Prompt,
  addressInputPrompts,
  have2ndAddressInputPrompt,
  initialPrompt,
  nameInputPrompts,
  phoneInputPrompts,
} from "./captureUtils/inputPrompts";

const getNameInfo = async (): Promise<
  Pick<Contact, "firstName" | "middleName" | "lastName">
> => {
  return await inquirer.prompt(nameInputPrompts);
};

const getPhoneInfo = async (): Promise<Pick<Contact, "telephone">> => {
  return await inquirer.prompt(phoneInputPrompts);
};

const getAddressInfo = async (
  inputPrompts: inquirer.QuestionCollection<Address>
): Promise<Address> => {
  return await inquirer.prompt(inputPrompts);
};

const getAddresses = async (): Promise<Pick<Contact, "address">> => {
  address1Prompt();
  const address1 = await getAddressInfo(addressInputPrompts);

  const { haveAddress2 } = await inquirer.prompt(have2ndAddressInputPrompt);

  if (haveAddress2) {
    address2Prompt();
    const address2 = await getAddressInfo(addressInputPrompts);
    return { address: [address1, address2] };
  }

  return { address: [address1] };
};

export const captureContactInfo = async (): Promise<Contact> => {
  initialPrompt();
  const nameInfo = await getNameInfo();
  const addressInfo = await getAddresses();
  const phoneInfo = await getPhoneInfo();
  const contactInfo: Contact = { ...nameInfo, ...addressInfo, ...phoneInfo };
  // logger.debug(`\ngot contact info: ${JSON.stringify(contactInfo)}\n`);
  return contactInfo;
};
