import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";

const PostLayoutTwo = ({ data, postSizeMd, postBgDark }) => {
  return (
    <div className={`media post-block m-b-xs-30 ${postSizeMd === true ? "post-block__mid" : ""} ${postBgDark === true ? "post-block__on-dark-bg" : ""}`}>
      <Link href="#">
        <a className="align-self-center">
          <Image
            src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
            alt={data.title}
            width={postSizeMd === true ? 285 : 150}
            height={postSizeMd === true ? 285 : 150}
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </a>
      </Link>
      <div className="media-body">
        <h3 className="axil-post-title hover-line hover-line fs-4">
          <Link href="#">
            <a>{data.title}</a>
          </Link>
        </h3>
        {postSizeMd === true ?
          <p className="mid">{data.title}</p>

          : ""
        }
        <div className="post-metas">
          <ul className="list-inline">
            <li>
              <span>By</span>
              <Link href="#">
                <a className="post-author fw-semibold">{data.created_by_user.name}</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostLayoutTwo;
