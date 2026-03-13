import { Command } from "commander";
import pc from "picocolors";
import { getCategories, getTemplateContent } from "../utils/templates.js";

export const showCommand = new Command("show")
  .description("Display a specific template")
  .argument("<category>", "category slug (e.g. onboarding)")
  .argument("<template>", "template slug (e.g. welcome)")
  .action((categorySlug, templateSlug) => {
    const content = getTemplateContent(categorySlug, templateSlug);

    if (!content) {
      console.log(
        pc.yellow(
          `Template "${categorySlug}/${templateSlug}" not found.`
        )
      );

      const categories = getCategories();
      const category = categories.find((c) => c.slug === categorySlug);
      if (category) {
        console.log(
          `\nAvailable templates in ${pc.cyan(category.name)}:`
        );
        for (const t of category.templates) {
          console.log(`  ${pc.green("•")} ${t.slug}`);
        }
      } else {
        console.log(
          `\nAvailable categories: ${categories.map((c) => pc.cyan(c.slug)).join(", ")}`
        );
      }
      return;
    }

    console.log(content);
  });
