import { readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = join(__dirname, "..", "..", "templates");

export interface TemplateCategory {
  slug: string;
  name: string;
  description: string;
  templates: TemplateEntry[];
}

export interface TemplateEntry {
  slug: string;
  name: string;
  category: string;
  filePath: string;
}

/**
 * Reads the first line (after #) as the title from a markdown file.
 */
function extractTitle(filePath: string): string {
  const content = readFileSync(filePath, "utf-8");
  const firstLine = content.split("\n").find((l) => l.startsWith("# "));
  return firstLine ? firstLine.replace(/^#\s+/, "") : basename(filePath, ".md");
}

/**
 * Reads the category README description (first paragraph after the title).
 */
function extractDescription(readmePath: string): string {
  try {
    const content = readFileSync(readmePath, "utf-8");
    const lines = content.split("\n");
    let pastTitle = false;
    const descLines: string[] = [];

    for (const line of lines) {
      if (line.startsWith("# ")) {
        pastTitle = true;
        continue;
      }
      if (pastTitle) {
        if (line.trim() === "" && descLines.length > 0) break;
        if (line.trim() !== "") descLines.push(line.trim());
      }
    }

    return descLines.join(" ") || "No description available.";
  } catch {
    return "No description available.";
  }
}

/**
 * Formats a slug into a human-readable name.
 */
function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Get all template categories with their entries.
 */
export function getCategories(): TemplateCategory[] {
  const categories: TemplateCategory[] = [];

  try {
    const dirs = readdirSync(TEMPLATES_DIR).filter((d) => {
      const fullPath = join(TEMPLATES_DIR, d);
      return statSync(fullPath).isDirectory();
    });

    for (const dir of dirs.sort()) {
      const categoryPath = join(TEMPLATES_DIR, dir);
      const readmePath = join(categoryPath, "README.md");

      const templates: TemplateEntry[] = [];
      const files = readdirSync(categoryPath).filter(
        (f) => f.endsWith(".md") && f !== "README.md"
      );

      for (const file of files.sort()) {
        const filePath = join(categoryPath, file);
        templates.push({
          slug: basename(file, ".md"),
          name: extractTitle(filePath),
          category: dir,
          filePath,
        });
      }

      categories.push({
        slug: dir,
        name: slugToName(dir),
        description: extractDescription(readmePath),
        templates,
      });
    }
  } catch {
    // Templates directory doesn't exist yet
  }

  return categories;
}

/**
 * Get a specific template's content.
 */
export function getTemplateContent(
  categorySlug: string,
  templateSlug: string
): string | null {
  const filePath = join(TEMPLATES_DIR, categorySlug, `${templateSlug}.md`);
  try {
    return readFileSync(filePath, "utf-8");
  } catch {
    return null;
  }
}

/**
 * Search templates by keyword across all categories.
 */
export function searchTemplates(query: string): TemplateEntry[] {
  const results: TemplateEntry[] = [];
  const lowerQuery = query.toLowerCase();

  for (const category of getCategories()) {
    for (const template of category.templates) {
      const content = getTemplateContent(category.slug, template.slug);
      if (
        template.name.toLowerCase().includes(lowerQuery) ||
        template.slug.toLowerCase().includes(lowerQuery) ||
        content?.toLowerCase().includes(lowerQuery)
      ) {
        results.push(template);
      }
    }
  }

  return results;
}
