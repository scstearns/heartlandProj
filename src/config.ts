import * as dotenv from "dotenv";
dotenv.config();

const dataFileName = process.env.DATA_FILE_NAME ?? "contacts.json";
const dataDirectory = process.env.DATA_DIRECTORY ?? "./data";

export const envVars = {
  dataDirectory,
  dataFileName,
  dataFilePath: `${dataDirectory}/${dataFileName}`,
};
