const PopularNews = ({ news, news_isloading }) => {
  if (news_isloading) {
    return <p>No news available.</p>;
  }

  return (
    <div>
      <div>
        {news?.popular?.data.slice(0, 4).map((newsItem, index) =>
          <div className="flex gap-3 my-4 " key={index}>
            {/* <img className="h-44   w-44" src="/images/recent.webp" /> */}

            <img className="h-44 w-44"  src={process.env.NEXT_PUBLIC_IMGPATH + newsItem?.image}alt="" />
            <div>
              <h4 className="text-xl text-black "> {newsItem?.title}</h4>
              <p className="text-sm mt-[-10px]">{ newsItem?.created_at}</p>
              <p className="text-sm mt-[-22px]">{ newsItem?.updated_at}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularNews;
