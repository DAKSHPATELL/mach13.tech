import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
};

export type BlogListItem = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export type CaseStudyFrontmatter = {
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string;
};

export type CaseStudyItem = CaseStudyFrontmatter & {
  slug: string;
};

function estimateReadingTime(text: string): string {
  const wordsPerMinute = 225;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / wordsPerMinute));
  return `${minutes} min read`;
}

export async function getBlogPost(slug: string) {
  const filePath = path.join(contentDir, "blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(file);
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  const frontmatter = data as BlogFrontmatter;

  return {
    slug,
    frontmatter,
    contentHtml
  };
}

export function getBlogPosts(): BlogListItem[] {
  const directory = path.join(contentDir, "blog");
  const files = fs.readdirSync(directory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { content, data } = matter(fileContent);
      const frontmatter = data as BlogFrontmatter;
      return {
        slug,
        ...frontmatter,
        readingTime: estimateReadingTime(content)
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getCaseStudies(): CaseStudyItem[] {
  const directory = path.join(contentDir, "case-studies");
  const files = fs.readdirSync(directory);

  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug,
        ...(data as CaseStudyFrontmatter)
      };
    });
}
