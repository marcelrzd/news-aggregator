const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="pb-2 transition-all ease-in-out border rounded-md shadow-md hover:shadow-xl"
        >
          <div className="flex items-center justify-between px-4 py-2 bg-gray-200 ">
            <span className="text-2xl font-bold">{article.source}</span>
            <span className="text-sm">Published at: {article.date}</span>
          </div>
          <div className="flex flex-col gap-1 p-3 sm:h-44">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <span className="text-md">{article.description}</span>
          </div>
          <div className="flex justify-between p-4 text-md">
            <h2 className="text-gray-600">Author: {article.author}</h2>
            <h2 className="bottom-0">
              <a
                className="p-2 text-gray-600 transition-all duration-200 border border-gray-500 rounded-full hover:text-white hover:bg-gray-500 "
                target="_blank"
                rel="noreferrer"
                href={article.url}
              >
                Read more...
              </a>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
