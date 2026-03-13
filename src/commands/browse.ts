import { Command } from "commander";
import { intro, outro, select, isCancel, cancel } from "@clack/prompts";
import pc from "picocolors";
import { getCategories, getTemplateContent } from "../utils/templates.js";

export const browseCommand = new Command("browse")
  .description("Interactively browse email template categories")
  .action(async () => {
    intro(pc.bgCyan(pc.black(" 📧 Email Templates ")));

    const categories = getCategories();

    if (categories.length === 0) {
      outro(pc.yellow("No template categories found."));
      return;
    }

    const categoryChoice = await select({
      message: "Choose a category:",
      options: categories.map((c) => ({
        value: c.slug,
        label: `${c.name} (${c.templates.length} templates)`,
        hint: c.description,
      })),
    });

    if (isCancel(categoryChoice)) {
      cancel("Cancelled.");
      process.exit(0);
    }

    const category = categories.find((c) => c.slug === categoryChoice);
    if (!category || category.templates.length === 0) {
      outro(pc.yellow("No templates in this category yet."));
      return;
    }

    const templateChoice = await select({
      message: "Choose a template:",
      options: category.templates.map((t) => ({
        value: t.slug,
        label: t.name,
      })),
    });

    if (isCancel(templateChoice)) {
      cancel("Cancelled.");
      process.exit(0);
    }

    const content = getTemplateContent(
      categoryChoice as string,
      templateChoice as string
    );
    if (content) {
      console.log("\n" + content);
    }

    outro(pc.green("Done!"));
  });
