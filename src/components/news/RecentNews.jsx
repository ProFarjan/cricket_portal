import React from "react";

const RecentNews = ({ news, news_isloading }) => {
  if (news_isloading) {
    return <p>Loading...</p>;
  }

  // Format date utility
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleString("en-US", options);
  };

  return (
    <div>
      <div>
        {news?.news?.data.slice(0, 4).map((newsItem, index) => (
          <div className="flex gap-4 my-4" key={index}>
            {/* News Image */}
            <img
              className="h-44 w-40"
              src={`${process.env.NEXT_PUBLIC_IMGPATH}${newsItem?.image}`}
              
            />
            
            {/* News Details */}
            <div className="leading-10">
            <h4 className="text-xl text-black hover:underline cursor-pointer "> {newsItem?.title}</h4>
              <p className="text-sm mt-[-10px]">{formatDate(newsItem?.created_at)}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
