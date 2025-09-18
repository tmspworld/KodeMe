// app/blog/page.tsx
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Game Strategies" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="list-disc pl-6">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
