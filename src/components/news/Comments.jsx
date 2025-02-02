

const Comments = ({news, news_isloading}) => {
  

  if (news_isloading) {
    return <p>No Comments available.</p>;
  }

  return (
    <div>
      <div>
        {news?.comments?.data.slice(1, 5).map((newsItem, index) =>
          <div className="flex gap-4 my-4 " key={index}>
            {/* <img className="  w-44" src="/images/babar.jpg" /> */}
            <img src={newsItem.image} alt="" />

            <div>
              <p className="text-xl text-black ">
                {newsItem.title}
              </p>
              {/* <p className="text-xl mt-[-16px]">ByAshley Graham</p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
