import fs from "fs"
import path from "path"

import config from '../next.config'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content")

export const DEFAULT_LOCALE_POSTS_PATH = path.join(process.cwd(), "content", config.i18n.defaultLocale)

console.log(7, POSTS_PATH)

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(DEFAULT_LOCALE_POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

console.log(15, postFilePaths)
