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
  console.log(postData);
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
      <div className="post-single-wrapper bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Banner Section */}
          <div className="flex flex-wrap items-center bg-white shadow-lg p-5 overflow-hidden">
            <div className="w-full md:w-1/2 p-6">
              <button className="text-2xl bg-blue-600 rounded-md p-3 font-semibold text-white uppercase pl-1">
                News
              </button>
              <h2 className="text-4xl md:text-6xl font-medium text-gray-800 mt-4">
                {postData[0]?.title ||
                  "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              </h2>
              <div className="mt-4 flex items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMGPATH}${
                    postData[0]?.user_info?.profile_pic || "/placeholder.jpg"
                  }`}
                  alt="Author"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span className="text-gray-600">
                  by{" "}
                  <span className="font-semibold">
                    {postData[0]?.user_info?.name}
                  </span>{" "}
                  & <span className="font-semibold">K. Williams</span>

                  <span className="ml-2">{postData[0].created_at}</span>
                  <span className="ml-5">
                    <button><i className="fal fa-share text-2xl ml-3" /></button>
                    <button><i className="fal fa-link  text-2xl ml-3" /></button>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={`${process.env.NEXT_PUBLIC_IMGPATH}${
                  postData[0]?.image || "/placeholder.jpg"
                }`}
                alt="Dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section 2 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
              <p className="px-5">
                {postData[0]?.detail ||
                  "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              </p>
              <p className="text-5xl mb-0 px-5 font-medium text-gray-800 leading-tight">
                {postData[1]?.title ||
                  "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              </p>
              {/* <div className="flex justify-between items-center px-5">
                <div className="flex mt-2 items-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMGPATH}${
                      postData[2]?.user_info?.profile_pic || "/placeholder.jpg"
                    }`}
                    alt="Author"
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <span className="text-gray-600">
                    by{" "}
                    <span className="font-semibold">
                      {postData[2]?.user_info?.name}
                    </span>{" "}
                    & <span className="font-semibold">K. Williams</span>
                    <br />
                    <span>{postData[2].created_at}</span>
                  </span>
                </div>
                <div className="flex gap-3 h-10 justify-center items-center">
                  <button>
                    <i className="fal fa-share text-3xl" />
                  </button>
                  <button>
                    <i className="fal fa-link  text-3xl" />
                  </button>
                </div>
              </div> */}
              <img
                src={`${process.env.NEXT_PUBLIC_IMGPATH}${
                  postData[1]?.image || "/placeholder.jpg"
                }`}
                alt="Example Image"
                className="mt-5 w-full px-5 h-[500px]"
              />
              <p className="mt-4 px-5  text-gray-600 leading-relaxed">
                {postData[1]?.detail ||
                  "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              </p>

              <p className="mt-5 text-5xl px-5 mb-0 font-medium text-gray-800 leading-tight">
                {postData[2]?.title ||
                  "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              </p>
              {/* <div className="flex justify-between items-center px-5">
                <div className="flex mt-2 items-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMGPATH}${
                      postData[2]?.user_info?.profile_pic || "/placeholder.jpg"
                    }`}
                    alt="Author"
                    className="w-12 h-12  rounded-full mr-3"
                  />
                  <span className="text-gray-600">
                    by{" "}
                    <span className="font-semibold">
                      {postData[2]?.user_info?.name}
                    </span>{" "}
                    & <span className="font-semibold">K. Williams</span>
                    <br />
                    <span>{postData[2].created_at}</span>
                  </span>
                </div>
                <div className="flex gap-3 h-10 justify-center items-center">
                  <button>
                    <i className="fal fa-share text-3xl" />
                  </button>
                  <button>
                    <i className="fal fa-link  text-3xl" />
                  </button>
                </div>
              </div> */}
              <img
                src={`${process.env.NEXT_PUBLIC_IMGPATH}${
                  postData[2]?.image || "/placeholder.jpg"
                }`}
                alt="Example Image"
                className="mt-5 px-5 w-full h-[550px]"
              />
              <p className="mt-4 px-5 text-gray-600 leading-relaxed">
                {postData[2]?.detail ||
                  "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              </p>
            </div>

            {/* Sidebar */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <PageSidebar />
            </div>
          </div>
          {/* Social Sharing and Comments */}
          <SocialShareBottom />
          <hr className="my-8" />
          <PostAuthor authorData={postData} />
          <PostComment />
        </div>
      </div>
    </>
  );
};

export default PostFormatMatch;
