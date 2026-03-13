import { Command } from "commander";
import pc from "picocolors";
import { searchTemplates } from "../utils/templates.js";

export const searchCommand = new Command("search")
  .description("Search templates by keyword")
  .argument("<query>", "search query")
  .action((query) => {
    const results = searchTemplates(query);

    if (results.length === 0) {
      console.log(pc.yellow(`No templates found matching "${query}".`));
      return;
    }

    console.log(
      pc.bold(`\nFound ${results.length} template(s) matching "${query}":\n`)
    );

    for (const result of results) {
      console.log(
        `  ${pc.green("•")} ${pc.bold(result.name)} ${pc.dim(`(${result.category}/${result.slug})`)}`
      );
    }
  });
