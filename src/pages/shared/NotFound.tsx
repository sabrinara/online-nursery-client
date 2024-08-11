

export default function NotFound() {
  return (
    <div
      className="flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg')`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="  p-40 rounded-lg shadow-lg text-center absolute">
        <h1 className="text-4xl font-bold text-green-800">404 - Not Found</h1>
        <p className="mt-4 text-lg text-green-600">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
