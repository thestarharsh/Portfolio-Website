import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog" className="space-y-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <Link href="/blog" className="inline-block text-sm text-primary hover:underline">
        ← Back to Blog
      </Link>
      <div className="rounded-3xl border border-border/60 bg-card/60 p-6 shadow-xl shadow-primary/10 backdrop-blur-sm sm:p-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-xs text-muted-foreground">{formatDate(post.metadata.publishedAt)}</p>
          <h1 className="title text-3xl font-bold tracking-tight sm:text-4xl">
            {post.metadata.title}
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            {post.metadata.summary}
          </p>
        </div>
      </div>
      <article
        className="prose prose-neutral max-w-none rounded-3xl border border-border/60 bg-card/50 p-6 leading-7 dark:prose-invert sm:p-8"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
