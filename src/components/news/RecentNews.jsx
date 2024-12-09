import React, {  useState } from "react";

const RecentNews = ({ news,news_isloading  }) => {
  
 


  if ( news_isloading ) {
    return <p>Loading...</p>;
  }

  

  return (
    <div>
      <div>
        {news?.news?.data.slice(0, 5).map((newsItem, index) =>
          <div className="flex gap-4 my-4 " key={index}>
            {/* <img className=" h-44  w-44" src="/images/babar.jpg" /> */}
            <img src={newsItem?.image} alt="" />

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

export default RecentNews;
