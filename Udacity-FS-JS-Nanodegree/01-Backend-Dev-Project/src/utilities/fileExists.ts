import { existsSync as fsExists } from "fs";

export function fileExists(fileLoc: string): boolean {
  if (fsExists(fileLoc)) {
    return true;
  } else {
    return false;
  }
}
