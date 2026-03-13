import { Command } from "commander";
import pc from "picocolors";
import { getCategories } from "../utils/templates.js";

export const listCommand = new Command("list")
  .description("List all categories and templates")
  .option("-c, --category <slug>", "filter by category slug")
  .action((options) => {
    const categories = getCategories();

    if (categories.length === 0) {
      console.log(pc.yellow("No template categories found."));
      return;
    }

    const filtered = options.category
      ? categories.filter((c) => c.slug === options.category)
      : categories;

    if (filtered.length === 0) {
      console.log(pc.yellow(`Category "${options.category}" not found.`));
      console.log(
        `Available: ${categories.map((c) => pc.cyan(c.slug)).join(", ")}`
      );
      return;
    }

    for (const category of filtered) {
      console.log(
        `\n${pc.bold(pc.cyan(category.name))} ${pc.dim(`(${category.slug})`)}`
      );
      console.log(pc.dim(category.description));

      if (category.templates.length === 0) {
        console.log(pc.dim("  No templates yet."));
      } else {
        for (const template of category.templates) {
          console.log(`  ${pc.green("•")} ${template.name} ${pc.dim(`(${template.slug})`)}`);
        }
      }
    }

    console.log(
      `\n${pc.dim(`${filtered.reduce((sum, c) => sum + c.templates.length, 0)} templates across ${filtered.length} categories`)}`
    );
  });
