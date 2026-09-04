import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "src/assets");
const files = fs.readdirSync(dir).filter(f => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const inputPath = path.join(dir, file);
  const outputPath = path.join(dir, file.replace(/\.(png|jpe?g)$/i, ".webp"));
  const before = fs.statSync(inputPath).size;

  await sharp(inputPath)
    .resize({ width: 1000, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  console.log(`${file}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
}
console.log("Done!");