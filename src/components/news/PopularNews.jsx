import Link from "next/link";

const PopularNews = ({ news, news_isloading }) => {
  if (news_isloading) {
    return <p>No news available.</p>;
  }
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    const formattedDate = date.toLocaleString("en-US", options);
    const [month, day, year] = formattedDate.split(" ");
    return `${day.replace(",", "")}, ${month}, ${year}`;
  };

  return (
    <div>
      <div>
        {news?.popular?.data.slice(0, 4).map((newsItem, index) =>
          <div className="flex gap-3 my-4 " key={index}>
            {/* <img className="h-44   w-44" src="/images/recent.webp" /> */}

            <img className="h-40 w-40"  src={process.env.NEXT_PUBLIC_IMGPATH + newsItem?.image}alt="" />
            <div className="leading-10">
              <Link href={`/post/${newsItem?.series_id.slug}?id=${newsItem?.series_id}&type=match`}>
              <h4 className="text-xl text-black hover:underline cursor-pointer "> {newsItem?.title}</h4>
              </Link>
              <p className="text-sm mt-[-10px]">{formatDate(newsItem?.created_at)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularNews;
