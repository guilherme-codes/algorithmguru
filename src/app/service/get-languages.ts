import path from "path";
import fs from "fs/promises";

export default async function getCodeSamples(category: string, type: string) {
  try {
    const basePath = path.join(process.cwd(), "src", "app");
    const samplesPath = path.resolve(basePath, category, type, "code");

    if (!samplesPath.startsWith(basePath)) {
      throw new Error("Invalid path");
    }

    const files = await fs.readdir(samplesPath);
    const languages = files.map((file) => {
      const { name, ext } = path.parse(file);
      return { name, ext: ext.slice(1) }; 
    });

    return { category, type, languages };
  } catch (err) {
    throw new Error(`Error reading code samples: ${err}`);
  }
}
