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
          <div className="flex flex-wrap items-center bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 p-6">
              <span className="text-blue-600 text-lg font-semibold uppercase">
                News
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                {postData[0]?.title ||
                  "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              </h2>
              <div className="mt-4 flex items-center">
                <img
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/184300/184311.png"
                  alt="Author"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <span className="text-gray-600">
                  by <span className="font-semibold">J. Smith</span> &{" "}
                  <span className="font-semibold">K. Williams</span>
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
          
          {/* Content Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
            {postData[0]?.detail ||
            "Crispy Air Fryer Parmesan And Thyme Roasted Wedge Fries"}
              <h1 className="text-2xl font-bold text-gray-800">
                For those of us who want to say thank you to our moms...
              </h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Australia took precautions ahead of the New Zealand tour...
              </p>
              <img
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960/lsci/db/PICTURES/CMS/392700/392785.4.jpg"
                alt="Example Image"
                className="mt-6 rounded-lg shadow-md"
              />
              <p className="mt-4 text-gray-600 leading-relaxed">
                "I felt it's one of those things... you feel really confident in
                the nets..."
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
