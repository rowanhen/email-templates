import { describe, it, expect } from "bun:test";
import { getCategories, searchTemplates, getTemplateContent } from "./utils/templates.js";

describe("template utils", () => {
  it("loads categories", () => {
    const categories = getCategories();
    expect(categories.length).toBeGreaterThan(0);
  });

  it("finds templates in onboarding category", () => {
    const categories = getCategories();
    const onboarding = categories.find((c) => c.slug === "onboarding");
    expect(onboarding).toBeDefined();
    expect(onboarding!.templates.length).toBeGreaterThan(0);
  });

  it("reads template content", () => {
    const content = getTemplateContent("onboarding", "welcome");
    expect(content).toBeDefined();
    expect(content).toContain("Welcome Email");
  });

  it("searches templates", () => {
    const results = searchTemplates("welcome");
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns null for missing template", () => {
    const content = getTemplateContent("nonexistent", "nope");
    expect(content).toBeNull();
  });
});
