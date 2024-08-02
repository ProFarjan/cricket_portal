import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";
import { useState } from "react";
import VideoPopup from "../../videos/VideoPopup";

const PostVideoTwo = ({ data, pClass, videoIcon }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className={`media post-block post-block__small ${pClass ?? "post-block__on-dark-bg m-b-xs-30"}`}>

      <a className="align-self-center" onClick={setIsPopupOpen}>
        <Image
          src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
          alt={data.title}
          width={100}
          height={100}
        />
        {videoIcon === true ? <span className="video-play-btn video-play-btn__small" /> : ""}
      </a>

      <div className="media-body">
        <h3 className="axil-post-title hover-line hover-line" style={{color: '#000'}}>
          <Link href={`/post/${slugify(data.title)}`}>
            <a>{data.title}</a>
          </Link>
        </h3>
        {/* <div className="post-metas">
          <ul className="list-inline">
            <li>
              <span>By</span>
              <Link href={`/author/${slugify(data.author_name)}`}>
                <a className="post-author">{data.author_name}</a>
              </Link>
            </li>
          </ul>
        </div> */}
      </div>

      <VideoPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        videoUrl={data.link}
      />
    </div>
  );
};

export default PostVideoTwo;
