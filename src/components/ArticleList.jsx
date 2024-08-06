const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="p-4 transition-all ease-in-out border rounded-md shadow-md"
        >
          <div className="flex justify-center">
            <span className="text-2xl">{article.source}</span>
          </div>
          <div className="">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p>{article.description}</p>
          </div>
          <div className="flex justify-between py-4">
            <h2 className="text-neutral-600">Author: {article.author}</h2>
            <h2 className="bottom-0">
              <a
                className="text-neutral-600"
                target="_blank"
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
