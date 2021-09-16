import express from "express";
import path from "path";
import { fileExists } from "./fileExists";
import processing from "./processing";

export async function checking(
  req: express.Request,
  res: express.Response,
  next: Function
): Promise<void> {
  //get url parameters
  let filename = req.query.filename as string;
  let height: number = Number(req.query.height) as number;
  let width: number = Number(req.query.width) as number;
  let format = req.query.format as string;
  let error = "" as string;

  //check if filename parameter is specified
  if (filename) {
    let fileLoc = path.resolve(
      __dirname + "../../../images/full/" + filename + ".jpeg"
    );

    //check if file with filename exists
    if (!fileExists(fileLoc)) {
      error = "File is missing";
    } else if (!width || !height) {
      //check if width & height parameters and input
      error = "Image size is not specified";
    } else {
      //if all parameters are present, try to process image
      try {
        const img = await processing(filename, width, height, format);

        res.end(img, "binary");
      } catch (err) {
        error = err as string;
      }
    }
  } else if (!filename) {
    error = "Filename is not specified";
  }

  //if errors exists, return error message
  if (error.length > 0) {
    res.statusCode = 400;
    res.send(`The following error has occured: ${error}`);
  }
}
