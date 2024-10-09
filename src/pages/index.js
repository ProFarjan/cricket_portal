import { getAllPosts } from "../../lib/api";
import HeadMeta from "../components/elements/HeadMeta";
import FooterOne from "../components/footer/FooterOne";
import HeaderOne from "../components/header/HeaderOne";
import TopArticles from "../components/post/TopArticles";
import VideosSection from "../components/post/VideosSection";
import MatchCoverage from "../components/post/MatchCoverage";
import GalleryItems from "../components/post/GalleryItems";
import TopStories from "../components/post/TopStories";
import PostSectionTwo from "../components/post/PostSectionTwo";
import PageSidebar from "../components/common/PageSidebar";

const HomeOne = ({ allPosts }) => {

  return (
    <>
      <HeadMeta metaTitle="The Cricket Co" />
      <HeaderOne />
      <div className="container">
        <div className="row">
          <div className="col-md-9 p-2">
            <MatchCoverage />
            <PostSectionTwo />
            <TopStories />
            <VideosSection />
            <TopArticles />
          </div>
          <div className="col-md-3 p-0">
            <PageSidebar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-2">
            <GalleryItems />
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

