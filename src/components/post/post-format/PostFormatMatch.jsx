import PageSidebar from "../../common/PageSidebar";
import WidgetAd from "../../widget/WidgetAd";
import WidgetInstagram from "../../widget/WidgetInstagram";
import WidgetNewsletter from "../../widget/WidgetNewsletter";
import WidgetPost from "../../widget/WidgetPost";
import WidgetSocialShare from "../../widget/WidgetSocialShare";
import MetaDataOne from "./elements/meta/MetaDataOne";
import PostAuthor from "./elements/PostAuthor";
import PostComment from "./elements/PostComment";
import SocialShareBottom from "./elements/SocialShareBottom";
import SocialShareSide from "./elements/SocialShareSide";
import Image from "next/image";

const PostFormatMatch = ({ postData }) => {
  // Fake data for left-side content
  const fakeData = [
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
    { id: 1, title: "Breaking News", author: "Author 1", time: "2d ago" },
    { id: 2, title: "Tech Innovations", author: "Author 2", time: "1d ago" },
    { id: 3, title: "Sports Update", author: "Author 3", time: "5h ago" },
  ];

  return (
    <>
      {/* <MetaDataOne metaData={postData} /> */}
      <div className="post-single-wrapper">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="">
              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper">
                    {/* <SocialShareSide /> */}
                    <div>
                      <div className="grid gap-5 grid-cols-1 md:grid-cols-6">
                        {/*-------Left-----Side------*/}
                        <div className="col-span-2">
                          <div className="shadow-md p-4">
                            {/* <h2 className="text-xl font-semibold mb-3">
                              Latest Updates
                            </h2> */}
                            {fakeData.map((item) => (
                              <div
                                key={item.id}
                                className="flex flex-col justify-center p-4 border-l-4 border-blue-400 mb-4"
                              >
                                <h3 className="text-lg font-medium text-slate-800 m-0">
                                  {item.title}
                                </h3>
                                <div className="text-sm text-slate-600">
                                  <span>{item.time}</span> <span>{item.author}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/*-------Right-----Side------*/}
                        <div className="md:col-span-4">
                          <h1 className="text-blue-600 text-5xl font-bold m-0 mb-4">
                            News
                          </h1>
                          <h3 className="text-3xl font-semibold m-0 mb-2">
                            {postData[0]?.title || "Sample Title"}
                          </h3>
                          <p className="text-2xl text-gray-700 m-0 mb-4">
                            On day two, just as on day one, Australia bossed the twilight
                            zone in Adelaide.
                          </p>
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-4">
                              <img
                                className="rounded-full h-16"
                                src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/184300/184311.png"
                                alt="Author"
                              />
                              <div>
                                <h2 className="text-2xl m-0 font-medium text-slate-700">
                                  Alagappan Muthu
                                </h2>
                                <span className="text-lg m-0 text-gray-500">
                                  07-Dec-2024
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <button className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-300 hover:bg-gray-200">
                                <i className="fa-regular fa-share text-xl"></i>
                              </button>
                              <button className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-gray-300 hover:bg-gray-200">
                                <i className="fa-regular fa-link text-xl"></i>
                              </button>
                            </div>
                          </div>
                          <img
                            className="w-full rounded-lg mb-4"
                            src={process.env.NEXT_PUBLIC_IMGPATH + postData[0]?.image}
                            alt="News"
                          />
                          <div
                            className="text-3xl text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: postData[0]?.detail }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* <SocialShareBottom />
                    <hr className="m-t-xs-50 m-b-xs-60" />
                    <PostAuthor authorData={postData} />
                    <PostComment /> */}
                  </div>
                </article>
              </main>
            </div>
            {/* <div className="col-lg-3">
              <PageSidebar />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFormatMatch;
