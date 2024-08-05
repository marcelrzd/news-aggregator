const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-bold">teste</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eaque
          earum exercitationem corporis. Nam voluptates accusantium, nemo est
          neque asperiores numquam, dolorem molestiae eveniet officia expedita.
          Architecto magni sunt consequatur.
        </p>
      </div>
      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-bold">teste</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eaque
          earum exercitationem corporis. Nam voluptates accusantium, nemo est
          neque asperiores numquam, dolorem molestiae eveniet officia expedita.
          Architecto magni sunt consequatur.
        </p>
      </div>
      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-bold">teste</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eaque
          earum exercitationem corporis. Nam voluptates accusantium, nemo est
          neque asperiores numquam, dolorem molestiae eveniet officia expedita.
          Architecto magni sunt consequatur.
        </p>
      </div>
      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-bold">jose</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eaque
          earum exercitationem corporis. Nam voluptates accusantium, nemo est
          neque asperiores numquam, dolorem molestiae eveniet officia expedita.
          Architecto magni sunt consequatur.
        </p>
      </div>
      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-bold">teste</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eaque
          earum exercitationem corporis. Nam voluptates accusantium, nemo est
          neque asperiores numquam, dolorem molestiae eveniet officia expedita.
          Architecto magni sunt consequatur.
        </p>
      </div>
      <div className="p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-bold">teste</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eaque
          earum exercitationem corporis. Nam voluptates accusantium, nemo est
          neque asperiores numquam, dolorem molestiae eveniet officia expedita.
          Architecto magni sunt consequatur.
        </p>
      </div> */}
      {articles.map((article, index) => (
        <div key={index} className="p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-bold">
            {article.title ? article.title : article.headline.main}
          </h2>
          <p>{article.description ? article.description : article.abstract}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
