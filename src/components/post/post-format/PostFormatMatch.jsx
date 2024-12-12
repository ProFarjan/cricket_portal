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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Iste ipsum asperiores voluptate
                              exercitationem similique quidem ad labore sed
                              voluptates id omnis. Accusamus ad cum
                              exercitationem sint minus, ipsum voluptatem quo,
                              culpa quibusdam modi vel nisi similique ea. Minus
                              sed libero dicta saepe assumenda illo
                              exercitationem aspernatur sint consequuntur
                              quaerat commodi officiis, provident nam recusandae
                              inventore et accusantium cum. Natus repellat
                              nobis, accusantium odit officia illum aperiam
                              labore atque aliquid vel. Blanditiis, repudiandae
                              voluptatem. Error, pariatur aut iure in placeat
                              neque.
                            </p>
                          </div>
                          {/*-------Right-----Side------*/}
                          <div className="md:col-span-3 border-2 border-cyan-600">
                            <h1 className="text-blue-600 text-5xl">News</h1>
                            <h3>{postData[0]?.title}</h3>
                            <div>
                              <div className="flex justify-between">
                                <div className="flex ">
                                  <img
                                    className="rounded-full"
                                    src="https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/73900/73941.1.jpg"
                                    alt=""
                                  />
                                  <div className="flex flex-col justify-center items-start">
                                    <h1 className="text-lg m-0">Andrew McGlashan</h1>
                                    <h1 className="text-xs">
                                      09-Dec-2024 <span>1 hr ago</span>
                                    </h1>
                                  </div>
                                </div>
                                <div>
                                  <span>hello</span>
                                  <span>hello</span>
                                </div>
                              </div>
                            </div>
                            <img
                              className="w-full"
                              src={
                                process.env.NEXT_PUBLIC_IMGPATH +
                                postData[0]?.image
                              }
                            />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: postData[0]?.detail,
                              }}
                            ></div>
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
};

export default PostFormatMatch;
