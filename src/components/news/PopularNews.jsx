const PopularNews = ({ news, news_isloading }) => {
  if (news_isloading) {
    return <p>No news available.</p>;
  }

  return (
    <div>
      <div>
        {news?.popular?.data.slice(0, 4).map((newsItem, index) =>
          <div className="flex gap-4 my-4 " key={index}>
            {/* <img className="h-44   w-44" src="/images/recent.webp" /> */}

            <img src={newsItem.image} alt="" />

            <div>
            <h4 className="text-xl text-black "> {newsItem?.title}</h4>
            <p className="text-xl mt-[-16px]">{ newsItem?.title_bn}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularNews;
