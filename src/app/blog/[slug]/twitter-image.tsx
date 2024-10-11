import { getImageUrl } from "@/utils/getPostImage";
import { ImageResponse } from "next/og";

export const contentType = "image/png";

export const size = {
    width: 800,
    height: 418,
}

export default async function Image({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const imageUrl = await getImageUrl(slug);

    return new ImageResponse(
        <img
            src={imageUrl}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
