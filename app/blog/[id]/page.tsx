// app/blog/[id]/page.tsx
export default function BlogDetails({ params }: { params: { id: string } }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Blog Post #{params.id}</h1>
      <p>This is the detail page for blog post {params.id}.</p>
    </main>
  );
}
