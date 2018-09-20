import path from "path";
import fs from "fs";
import { pick } from "lodash";

const packageJSON = Symbol();

class SystemService {
  constructor() {
    const filePath = path.resolve("../../package.json");
    const data = fs.readFileSync(filePath, "utf8");
    this[packageJSON] = JSON.parse(data);
  }
  getPackageJSON = async () => {
    return this[packageJSON];
  };
  getSystemInfo = async () => {
    const packageJSON = await this.getPackageJSON();
    return pick(packageJSON, ["name", "author", "description", "version"]);
  };
}

export default new SystemService();
