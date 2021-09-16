import path from "path";
import { fileExists } from "../utilities/fileExists";
import { promises as fsPromises } from "fs";
import imageFunction from "../utilities/processing";

describe("Test image functions", () => {
  const filename = "santamonica";
  const width = 500;
  const height = 500;
  const format = "png";

  let fileLoc = path.resolve(
    __dirname +
      "../../../images/thumb/" +
      `${filename}_${width}_${height}.${format}`
  );

  it("should resize and save image", async () => {
    await imageFunction(filename, width, height, format);
    let isFileExist = fileExists(fileLoc);

    expect(isFileExist).toBeTruthy();
  });
});
