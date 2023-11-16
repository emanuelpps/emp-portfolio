/* import fsPromises from "fs/promises";
import path from "path";

export default async function getProjects() {
  const filePath = path.join(process.cwd(), "public/data/works.json", "utf-8");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return objectData;
}
 */