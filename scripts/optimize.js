import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputRoot = path.join(__dirname, "..", "src", "assets", "photos");
const outputRoot = path.join(__dirname, "..", "src", "assets", "photos-optimized");

// Remove outputRoot and all its contents if it exists
if (fs.existsSync(outputRoot)) {
  fs.rmSync(outputRoot, { recursive: true, force: true });
}
// Recreate output root
fs.mkdirSync(outputRoot, { recursive: true });

/**
 * Walk a directory recursively and collect all image file paths.
 */
function getAllImageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...getAllImageFiles(fullPath));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Optimize a single image to WebP, max width 1600px.
 */
async function optimizeImage(filePath) {
  const relativePath = path.relative(inputRoot, filePath);
  const dirName = path.dirname(relativePath);
  const baseName = path.basename(relativePath, path.extname(relativePath));

  const outputDir = path.join(outputRoot, dirName);
  fs.mkdirSync(outputDir, { recursive: true });

  const outputFile = path.join(outputDir, `${baseName}.webp`);

  await sharp(filePath)
    .rotate() // auto-orient based on EXIF
    .resize({ width: 1600, withoutEnlargement: true }) // don't upscale small images
    .webp({ quality: 80 })
    .toFile(outputFile);

  console.log(`Optimized: ${relativePath} -> ${path.relative(process.cwd(), outputFile)}`);
}

async function main() {
  const files = getAllImageFiles(inputRoot);

  console.log(`Found ${files.length} images under ${inputRoot}`);

  for (const file of files) {
    await optimizeImage(file);
  }

  console.log("✅ Image optimization complete.");
}

main().catch((err) => {
  console.error("Error during image optimization:", err);
  process.exit(1);
});