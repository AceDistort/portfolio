'use client';

import GlowButton from "@/components/utils/GlowButton";
import Image from "next/image";
import downloadIcon from "@/assets/images/download.svg"

const DownloadCVButton = () => {

    return (
        <GlowButton onClick={() => window.open("/CV.pdf", "_blank")}>
            <p style={{fontWeight: "bold"}}>CV</p>
        </GlowButton>
    );
}

export default DownloadCVButton;