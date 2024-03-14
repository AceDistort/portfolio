import Image from "next/image";

interface LinkImageProps {
    href: string;
    src: string;
    alt: string;
}

const LinkImage = (props: LinkImageProps) => {
    return (
        <a href={props.href} target="_blank">
            <Image src={props.src} alt={props.alt} width={50} height={50} priority />
        </a>

    );
}

export default LinkImage;