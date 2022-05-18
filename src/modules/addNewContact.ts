import { captureContactInfo } from "./captureContactInput";
import { processContact } from "./processContact";

export const addNewContact = async (): Promise<void> => {
  const contactInfo = await captureContactInfo();
  const count = await processContact(contactInfo);
  console.log(`\nThere are currently ${count} contacts.\n`);
};
