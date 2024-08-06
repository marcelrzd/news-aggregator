const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <div
          key={index}
          className="pb-2 transition-all ease-in-out border rounded-md shadow-md "
        >
          <div className="top-0 flex justify-center p-2 px-4 bg-gray-200 ">
            <span className="text-2xl font-bold">{article.source}</span>
          </div>
          <div className="p-3 h-44">
            <h2 className="text-xl font-semibold">{article.title}</h2>
            <span className="text-md">{article.description}</span>
          </div>
          <div className="flex justify-between p-4 text-md">
            <h2 className="text-gray-600">Author: {article.author}</h2>
            <h2 className="bottom-0">
              <a className="text-gray-600" target="_blank" href={article.url}>
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
