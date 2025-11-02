import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/content";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  if (!post) {
    return {
      title: "Post not found"
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description
    }
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <article className="mx-auto max-w-4xl space-y-10 rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="post-title">
        <header className="space-y-4">
          <Link href="/blog" className="text-xs font-semibold uppercase tracking-widest text-steel hover:text-steel/80">
            ← Back to blog
          </Link>
          <h1 id="post-title" className="text-4xl font-semibold text-foreground">
            {post.frontmatter.title}
          </h1>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground/50">
            <time dateTime={post.frontmatter.date}>
              {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </time>
          </div>
          <p className="text-base text-foreground/70">{post.frontmatter.description}</p>
        </header>
        <div
          className="prose prose-lg max-w-none text-foreground/80 prose-p:leading-relaxed prose-headings:text-foreground prose-a:text-steel hover:prose-a:text-steel/80"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </section>
  );
}
