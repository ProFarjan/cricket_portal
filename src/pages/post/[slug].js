import { getArticleById, getStorieById } from "../../api/api";
import Breadcrumb from "../../components/common/Breadcrumb";
import HeadMeta from "../../components/elements/HeadMeta";
import FooterOne from "../../components/footer/FooterOne";
import HeaderOne from "../../components/header/HeaderOne";
import PostFormatAudio from "../../components/post/post-format/PostFormatAudio";
import PostFormatGallery from "../../components/post/post-format/PostFormatGallery";
import PostFormatQuote from "../../components/post/post-format/PostFormatQuote";
import PostFormatText from "../../components/post/post-format/PostFormatText";
import PostFormatVideo from "../../components/post/post-format/PostFormatVideo";
import PostFormatStandard from "../../components/post/post-format/PostFormatStandard";


const PostDetails = ({ data, type }) => {

	const PostFormatHandler = () => {
		if (type === 'video') {
			// return <PostFormatVideo postData={data} allData={data} />
		} else if (type === 'gallery') {
			return <PostFormatGallery postData={data} allData={data} />
		} else if (type === 'audio') {
			// return <PostFormatAudio postData={data} allData={data} />
		} else if (type === 'quote') {
			// return <PostFormatQuote postData={data} allData={data} />
		} else if (type === 'text') {
			// return <PostFormatText postData={data} allData={data} />
		} else {
			return <PostFormatStandard postData={data} allData={data} />
		}
	}

	return (
		<>
			<HeadMeta metaTitle="The Cricket Co" />
			<HeaderOne />
			<Breadcrumb bCat={type} aPage={data.title} />
			<PostFormatHandler />
			{/* <PostSectionSix postData={allPosts} /> */}
			<FooterOne />
		</>
	);
}

export default PostDetails;

export async function getServerSideProps({ params, query }) {
	const title_slug = params.slug;
	const { id, type } = query;

	let data = {};
	switch (type) {
		case 'Matches':
			data = {};
			return {
				props: {
					data,
					type
				}
			}
			break;
		case 'Stories':
			data = await getStorieById({id}).then(res => res.data);
			return {
				props: {
					data,
					type
				}
			}
			break;
		case 'Articles':
			data = await getArticleById({id}).then(res => res.data);
			return {
				props: {
					data,
					type
				}
			}
			break;
		default:
			return {
				props: {
					data,
					slug
				}
			}
	}
}