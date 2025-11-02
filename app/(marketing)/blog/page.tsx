import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights from Mach13 on document-grounded AI and industrial machine learning." 
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="blog-heading">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <h1 id="blog-heading" className="text-4xl font-semibold text-foreground">
            Field notes and operator playbooks
          </h1>
          <p className="text-base text-foreground/70">
            Short reads on making document-grounded AI and predictive maintenance practical for regulated environments.
          </p>
        </div>
      </section>
      <section aria-label="Blog posts" className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-divider bg-white px-6 py-8 shadow-subtle transition hover:border-steel/70">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground/50">
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </header>
            <p className="mt-4 text-sm text-foreground/70">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-divider px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground/80 transition hover:border-steel hover:text-steel"
            >
              Read article
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
