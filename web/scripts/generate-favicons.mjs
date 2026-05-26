import sharp from "sharp"
import { mkdir } from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")
const src = path.join(root, "public", "favicon.png")

const meta = await sharp(src).metadata()
const square = Math.max(meta.width, meta.height)

const base = sharp(src).resize(square, square, {
  fit: "contain",
  background: { r: 0, g: 0, b: 0, alpha: 0 },
})

await mkdir(path.join(root, "app"), { recursive: true })

await base.clone().png().toFile(path.join(root, "public", "favicon-square.png"))
await base.clone().resize(32, 32).png().toFile(path.join(root, "public", "icon-32x32.png"))
await base.clone().resize(16, 16).png().toFile(path.join(root, "public", "icon-16x16.png"))
await base.clone().resize(180, 180).png().toFile(path.join(root, "public", "apple-icon.png"))
await base.clone().resize(32, 32).toFile(path.join(root, "app", "favicon.ico"))
await base.clone().resize(32, 32).png().toFile(path.join(root, "app", "icon.png"))
await base.clone().resize(180, 180).png().toFile(path.join(root, "app", "apple-icon.png"))

console.log("Generated favicon assets from", src)
