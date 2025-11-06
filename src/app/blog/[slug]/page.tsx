import { Metadata } from "next";
import BlogDetailPageClient from "@/components/BlogDetailPage";

type Blog = {
  id: string | number;
  title: string;
  description: string;
  content: string;
  photo?: string | null;
  categoryId?: string;
  createdAt: string;
  authorName: string;
  authorImage?: string;
};

// ✅ Server-side fetch
async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`,
      { cache: "no-store" } // SSR: no caching, always fresh
    );

    if (!res.ok) return null;
    const data = await res.json();
    return data.blog as Blog;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const blog = await getBlog((await params).slug);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: blog.photo ? [blog.photo] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.photo ? [blog.photo] : [],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const blog = await getBlog((await params).slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-400">Blog not found</div>
    );
  }

  return <BlogDetailPageClient blog={blog} />;
}
