import axios from "axios";
import { useEffect, useState } from "react";

function NewsFeed() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    var options = {
      method: "GET",
      url: "http://localhost:8000/news",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(articles);

  const topTenArticles = articles?.slice(0, 10);

  return (
    <div className="news__feed">
      <h2>News Feed</h2>
      {topTenArticles?.map((article, _index) => (
        <div key={_index}>
          <a href={article.url}><p>{article.title}</p></a>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
