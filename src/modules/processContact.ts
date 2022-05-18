import { existsSync, promises } from "fs";
import { envVars } from "../config";
import { Contact } from "../types";

const filePath = envVars.dataFilePath;

const createDirectory = async (): Promise<void> => {
  try {
    await promises.mkdir(envVars.dataDirectory).then(async () => {
      // logger.info(`Directory ${envVars.dataDirectory} created.`);
    });
  } catch (e) {
    console.error(
      `Uh Oh. We're unable to create the ${envVars.dataDirectory} directory.`
    );
  }
};

const getParsedFileData = async (): Promise<Contact[]> => {
  try {
    const existingData = await promises.readFile(filePath, "utf-8");
    return JSON.parse(existingData) as Contact[];
  } catch (e) {
    console.error(`Oh, No. We're unable to retrieve existing contacts.`);
  }
  return [];
};

const writeUpdatedFile = async (data: Contact[]): Promise<void> => {
  try {
    await promises.writeFile(filePath, JSON.stringify(data), "utf-8");
  } catch (e) {
    console.error(`Oh, No. We're unable to write to the file.`);
  }
};

export const processContact = async (newContact: Contact): Promise<number> => {
  // For a real world CLI with multiple users and writing data to a file (not a DB), I would add some file locking with retries around the reading and writing.
  try {
    if (!existsSync(envVars.dataDirectory)) {
      await createDirectory();
    }
    let data: Contact[] = [];
    if (existsSync(filePath)) {
      data = await getParsedFileData();
    }

    data.push(newContact);
    writeUpdatedFile(data);
    console.log(
      `Contact ${newContact.firstName} ${newContact.lastName} was successfully saved.`
    );

    return data.length;
  } catch (error) {
    console.error(
      `So sorry. We encountered an error trying to save your data.  The information was not saved.`
    );
    throw error;
  }
};
