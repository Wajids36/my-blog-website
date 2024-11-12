export default function Page({ params }) {

    const blog = {
        title: "TypeScript",
        author: "Fayaz Ahmed",
        description: "This is a sample blog post description.",
        date: "2024-10-01",
        content: "<p>This is the content of the blog post. It can include <strong>HTML</strong> tags and other elements.</p>"
    };

    return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-base mb-2 border-1-4 border-gray-500 pl-4 ">{blog.description}</p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {blog.author}</p>
        <p className="text-sm text-gray-500 mb-4">{blog.date}</p>

      </div>
      <div dangerouslySetInnerHTML={{ __html: "Your HTML content here" }}></div>
    </div>
  );
}
