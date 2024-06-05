import Image from "next/image";
import Link from "next/link";

const MatchCoverageView = ({ data }) => {
    return (
        <div>
            <Link href="#">
                <a className="align-self-center">
                    <Image
                        src={data.featureImg}
                        alt={data.title}
                        width={data.featureImg === null ? 285 : 150}
                        height={data.featureImg === null ? 285 : 150}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                    />
                </a>
            </Link>
        </div>
    );
};
export default MatchCoverageView; 