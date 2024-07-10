import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import TopArticles from "../components/post/TopArticles";
import VideosSection from "../components/post/VideosSection";
import MatchCoverage from "../components/post/MatchCoverage";
import PostSectionSix from "../components/post/PostSectionSix";
import TopStories from "../components/post/TopStories";
import PostSectionTwo from "../components/post/PostSectionTwo";
import WidgetAd from "../components/widget/WidgetAd";
import WidgetNewsletter from "../components/widget/WidgetNewsletter";
import WidgetCategory from "../components/widget/WidgetCategory";
import WidgetSocialShare from "../components/widget/WidgetSocialShare";
import WidgetPost from "../components/widget/WidgetPost";
import WidgetInstagram from "../components/widget/WidgetInstagram";

const HomeOne = ({ allPosts }) => {

  return (
    <>
      <HeadMeta metaTitle="The Cricket Co" />
      <HeaderOne />
      <div className="container">
        <div className="row">
          <div className="col-md-9 p-2">
            <MatchCoverage />
            <PostSectionTwo postData={allPosts} />
            <TopStories />
            <VideosSection postData={allPosts} />
            <TopArticles />
            <PostSectionSix postData={allPosts} />
          </div>
          <div className="col-md-3 p-0">
            <div className="post-sidebar">
              <WidgetAd />
              <WidgetNewsletter />
              <WidgetCategory cateData={allPosts} />
              <WidgetSocialShare />
              <WidgetPost dataPost={allPosts} />
              <WidgetInstagram />
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  );
}

export default HomeOne;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'postFormat',
    'trending',
    'story',
    'slug',
    'title',
    'excerpt',
    'featureImg',
    'cate',
    'cate_bg',
    'cate_img',
    'author_name',
    'date',
    'post_views',
    'post_share',
  ])

  return {
    props: { allPosts }
  }
}

