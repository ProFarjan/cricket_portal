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

  return (
    <>
      {/* <MetaDataOne metaData={postData} /> */}
      <div className="post-single-wrapper p-t-xs-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <main className="site-main">
                <article className="post-details">
                  <div className="single-blog-wrapper">
                    {/* <SocialShareSide /> */}
                    <div>
                      <div className="container m-auto">
                        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
                          {/*-------Left-----Side------*/}
                          <div className="col-span-1 border-2 border-orange-600">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                              ipsum asperiores voluptate exercitationem similique quidem ad labore
                              sed voluptates id omnis. Accusamus ad cum exercitationem sint minus,
                              ipsum voluptatem quo, culpa quibusdam modi vel nisi similique ea.
                              Minus sed libero dicta saepe assumenda illo exercitationem
                              aspernatur sint consequuntur quaerat commodi officiis, provident nam
                              recusandae inventore et accusantium cum. Natus repellat nobis,
                              accusantium odit officia illum aperiam labore atque aliquid vel.
                              Blanditiis, repudiandae voluptatem. Error, pariatur aut iure in
                              placeat neque.
                            </p>
                          </div>
                          {/*-------Right-----Side------*/}
                          <div className="md:col-span-3 border-2 border-cyan-600">
                            <h1 className="text-blue-600 text-5xl">News</h1>
                            <h1>Rohit: 'We were not good enough with bat'</h1>
                            <p>He also defends picking Harshit Rana for the Adelaide game: "Rana didn't do anything wrong in the first Test"</p>
                            <img className="w-full"
                              src={process.env.NEXT_PUBLIC_IMGPATH + postData[0]?.image} />
                          </div>
                        </div>
                      </div>
                    </div>


                    {/* <div className="flex">
                      <div className="w-96 bg-red-600">
                        <h1>Hello</h1>
                      </div>
                      <div>
                        <figure>
                          <Image
                            src={process.env.NEXT_PUBLIC_IMGPATH + postData[0]?.image}
                            alt="Image"
                            width={1140}
                            height={480}
                          />
                        </figure>
                        <h3>{postData[0]?.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: postData[0]?.detail }}></div>
                      </div>
                    </div> */}
                  </div>
                </article>
                {/* <SocialShareBottom />
                <hr className="m-t-xs-50 m-b-xs-60" />
                <PostAuthor authorData={postData} />
                <PostComment /> */}
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
}

export default PostFormatMatch;