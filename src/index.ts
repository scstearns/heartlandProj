import inquirer from "inquirer";
import { addNewContact } from "./modules/addNewContact";
import { addAnotherContact } from "./modules/captureUtils/inputPrompts";

const main = async () => {
  let addAnother = true;
  while (addAnother) {
    await addNewContact();
    let response = await inquirer.prompt(addAnotherContact);
    addAnother = response.addAnotherContact;
  }
  console.log("\nThanks.  Looks like you're all done.\n");
};

main();
