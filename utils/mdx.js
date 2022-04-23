import fs from "fs";
import path from "path";

import config from "../next.config";

export const CONTENT_PATH = path.join(process.cwd(), "content");
export const DEFAULT_LOCALE_POSTS_PATH = path.join(
  process.cwd(),
  "content",
  config.i18n.defaultLocale
);

export const POST_FILE_PATHS = fs
  .readdirSync(DEFAULT_LOCALE_POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));
