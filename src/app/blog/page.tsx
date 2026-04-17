import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-3 rounded-3xl border border-border/60 bg-card/60 p-6 shadow-xl shadow-primary/10 backdrop-blur-sm sm:p-8">
          <Badge className="rounded-full px-3 py-1">Writing</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Notes on frontend engineering, developer tools, and building practical products.
          </p>
        </div>
      </BlurFade>

      <div className="grid gap-3">
        {sortedPosts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="rounded-2xl border border-border/60 bg-card/55 p-5 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <p className="text-xs text-muted-foreground">
                    {formatDate(post.metadata.publishedAt)}
                  </p>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h2 className="text-lg font-semibold tracking-tight">{post.metadata.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {post.metadata.summary}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
