import { getImageData } from "@/utils/getPostImage";
import { ImageResponse } from "next/og";

export const contentType = "image/png";

export const size = {
    width: 800,
    height: 418,
}

export default async function Image({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const imageData = await getImageData(slug);

    const base64Image = imageData.toString("base64");
    const dataUri = `data:image/png;base64,${base64Image}`;

    return new ImageResponse(
        <img
            src={dataUri}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
