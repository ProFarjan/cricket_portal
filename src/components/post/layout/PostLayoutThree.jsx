import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutThree = ({ data, postSizeLg, pClass, videoPost }) => {
	return (
		<div className={`axil-img-container ${pClass ?? "m-b-xs-30"}`}>
			<Link href={`/post/${data.id}`}>
				<a className={`d-block ${videoPost === true ? "h-100" : ""}`}>
					<Image
						src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
						alt={data.title}
						width={postSizeLg === true ? 730 : 350}
						height={postSizeLg === true ? 550 : 260}
						className="w-100"
					/>
					<div className={`grad-overlay ${videoPost === true ? "grad-overlay__transparent" : ""}`} />
				</a>
			</Link>
			<div className="media post-block position-absolute">
				<div className={`media-body ${postSizeLg === true ? "media-body__big" : ""}`}>
					<div className="post-cat-group m-b-xs-10">
						<Link href={`/category/${slugify(data.title)}`}>
							<a className={`post-cat cat-btn ${data.title ?? "bg-color-blue-one"}`}>{data.title}</a>
						</Link>
					</div>
					<div className="axil-media-bottom">
						<h3 className="axil-post-title hover-line hover-line">
							<Link href={`/post/${data.title}`}>
								<a>{data.title}</a>
							</Link>
						</h3>
						<div className="post-metas">
							<ul className="list-inline">
								<li>
									<span>By</span>
									<Link href={`/author/${(data.created_by)}`}>
										<a className="post-author">{data.created_by}</a>
									</Link>
								</li>
								{postSizeLg === true ?
									<>
										<li>
											<i className="dot">.</i>{data.created_at}
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

export default PostLayoutThree;
