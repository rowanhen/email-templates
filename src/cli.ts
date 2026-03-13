#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "commander";
import { browseCommand } from "./commands/browse.js";
import { listCommand } from "./commands/list.js";
import { searchCommand } from "./commands/search.js";
import { showCommand } from "./commands/show.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(
  readFileSync(join(__dirname, "..", "package.json"), "utf-8")
);

const program = new Command();

program
  .name("email-templates")
  .description(
    "A composable directory of business email templates, best practices, and guides"
  )
  .version(pkg.version);

program.addCommand(browseCommand);
program.addCommand(listCommand);
program.addCommand(searchCommand);
program.addCommand(showCommand);

program.parse();
