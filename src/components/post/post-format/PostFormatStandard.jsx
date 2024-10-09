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

const PostFormatStandard = ({ postData }) => {

  return (
    <>
      {/* <MetaDataOne metaData={postData} /> */}
      <div className="post-single-wrapper p-t-xs-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper">
                    <SocialShareSide />
                    <figure>
                      <Image
                        src={process.env.NEXT_PUBLIC_IMGPATH + postData?.image}
                        alt="Image"
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    </figure>
                    <h3>{postData?.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: postData?.detail }}></div>
                  </div>
                </article>
                <SocialShareBottom />
                <hr className="m-t-xs-50 m-b-xs-60" />
                <PostAuthor authorData={postData} />
                <PostComment />
              </main>
            </div>
            <div className="col-lg-3">
              <PageSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostFormatStandard;