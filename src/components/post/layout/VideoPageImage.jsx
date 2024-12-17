import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../../utils";
import { useState } from "react";
import VideoPopup from "../../videos/VideoPopup";

const PostVideoimage = ({ data, pClass, videoIcon }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className={` media post-block  post-block__small ${pClass ?? "post-block__on-dark-bg "}`}>

      <a className="" onClick={setIsPopupOpen}>
        <Image
        
          src={process.env.NEXT_PUBLIC_IMGPATH + data.image}
          alt={data.title}
          width={420}
          height={420}
        />
        {videoIcon === true ? <span className="video-play-btn video-play-btn__small" /> : ""}
      </a>

      <div className="media post-block grad-overlay__transparent position-absolute m-b-xs-30" onClick={setIsPopupOpen}>
        <div className="media-body media-body__big">
          <div className="axil-media-bottom mt-auto">
            <h3 className="axil-post-title hover-line hover-line">
              <Link href={`/post/${slugify(data.title)}`}>
                <a className="text-2xl p-1">{data.title}</a>
              </Link>
            </h3>
           
          </div>
        </div>
      </div>

      <VideoPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        videoUrl={data.link}
      />
    </div>
  );
};

export default PostVideoimage;
