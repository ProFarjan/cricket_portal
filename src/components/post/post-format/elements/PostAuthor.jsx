import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../../utils";


const PostAuthor = ({ authorData }) => {

  return (
    <div className="about-author m-b-xs-60">
      <div className="media">
        <Link href="#">
          <a>
            <Image
              src={process.env.NEXT_PUBLIC_IMGPATH + authorData.image}
              alt={authorData?.created_by}
              height={105}
              width={105}
              className="author-img"
            />
          </a>
        </Link>
        <div className="media-body">
          <div className="media-body-title">
            <h3>
              <Link href="#">
                <a>{authorData?.created_by}</a>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAuthor;
