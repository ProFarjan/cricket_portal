import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";
import { dateFormat } from "../../../helpers/helper";

const ExclusiveItem = ({ data, postSizeLg, pClass, videoPost, imgWidth = 730, imgHeight = 550, type }) => {
	return (
		<div className={`axil-img-container ${pClass ?? "m-b-xs-25"}`}>
			<Link href={`/post/${data?.title}`}>
				<a className={`d-block ${videoPost === true ? "h-100" : ""}`}>
					<Image
						src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
						alt={data.title}
						width={postSizeLg === true ? imgWidth : 410}
						height={postSizeLg === true ? imgHeight : 310}
						className="w-100"
					/>
					<div className={`grad-overlay ${videoPost === true ? "grad-overlay__transparent" : ""}`} />
				</a>
			</Link>
			<div className="media post-block position-absolute">
				<div className={`media-body ${postSizeLg === true ? "media-body__big" : ""}`}>
					<div className="post-cat-group m-b-xs-10">
						<Link href={`/category/${data?.series_match?.slug}`}>
							<a className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`}>{type ?? 'NOT FOUND'}</a>
						</Link>
					</div>
					<div className="axil-media-bottom">
						<h3 className="axil-post-title hover-line hover-line">
							<Link href={`/post/${data?.title}`}>
								<a title={data?.series?.alternate_name}>{data?.title}</a>
							</Link>
						</h3>
						<div className="post-metas">
							<ul className="list-inline">
								<li>
									<Link href={`/author/`}>
										<a className="post-author">{data?.created_by_user}</a>
									</Link>
								</li>
								{postSizeLg === true ?
									<>
										<li>
											<i className="dot">.</i>{dateFormat(data?.created_at)}
										</li>
									</>
									: ""}
							</ul>
						</div>
					</div>
				</div>
			</div>
			{/* End of .post-block */}
		</div>
	);
};

export default ExclusiveItem;
