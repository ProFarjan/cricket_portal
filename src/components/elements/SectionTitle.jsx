import Link from "next/link";

const SectionTitle = ({title, btnText, btnUrl, pClass, fSize}) => {
    return ( 
        <div className={`section-title m-0 ${pClass ?? "m-b-xs-5"}`}>
            <h3 className={`${fSize ?? "fs-2"} p-0 m-0`}>{title}</h3>
            <Link href={btnUrl ?? "#"}>
                <a className="btn-link">{btnText}</a>
            </Link>
        </div>
     );
}
 
export default SectionTitle;