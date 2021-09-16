import sharp from "sharp";
import path from "path";
import { fileExists } from "./fileExists";
import { promises as fsPromises } from "fs";

export default function processing(
  filename: string,
  width: number,
  height: number,
  format: string
): Promise<Buffer> {
  //get file format
  let fileFormat = format ? "." + format : ".jpeg";
  //resolve original image file path
  let fullFileLoc = path.resolve(
    __dirname + "../../../images/full/" + filename + ".jpeg"
  );
  //resolve thumb image file path
  let thumbFileLoc = path.resolve(
    __dirname +
      "../../../images/thumb/" +
      filename +
      "_" +
      width +
      "_" +
      height +
      fileFormat
  );

  //while thumb image file does not exist, process image
  while (!fileExists(thumbFileLoc)) {
    sharp(fullFileLoc)
      .resize({ width: width, height: height })
      .toFile(thumbFileLoc, function (err) {
        if (err) {
          console.log("error: ", err);
        }
      });
  }

  return sharp(thumbFileLoc).toBuffer();
}
