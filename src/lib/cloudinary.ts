import { v2 as cloudinary } from "cloudinary";
import type { PortfolioImage } from "./portfolio";

export type { PortfolioImage };

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const FOLDER = "portfolio";

export async function uploadToCloudinary(
  imageUrl: string,
  category: string,
  caption: string
): Promise<string> {
  const result = await cloudinary.uploader.upload(imageUrl, {
    folder: `${FOLDER}/${category}`,
    context: `caption=${caption}`,
    transformation: [
      { quality: "auto", fetch_format: "auto" },
    ],
  });
  return result.secure_url;
}

export async function getPortfolioImages(
  category?: string
): Promise<PortfolioImage[]> {
  const folder = category ? `${FOLDER}/${category}` : FOLDER;

  const result = await cloudinary.api.resources({
    type: "upload",
    prefix: folder,
    max_results: 500,
    context: true,
  });

  return result.resources
    .filter((r: Record<string, unknown>) => {
      const publicId = r.public_id as string;
      const parts = publicId.replace(`${FOLDER}/`, "").split("/");
      return parts.length >= 2;
    })
    .map((r: Record<string, unknown>) => {
      const publicId = r.public_id as string;
      const categorySlug = publicId.replace(`${FOLDER}/`, "").split("/")[0];
      const context = r.context as Record<string, Record<string, string>> | undefined;

      return {
        url: (r.secure_url as string).replace(
          "/upload/",
          "/upload/c_fill,w_800,h_600,q_auto,f_auto/"
        ),
        width: r.width as number,
        height: r.height as number,
        caption: context?.custom?.caption ?? "",
        category: categorySlug,
        createdAt: r.created_at as string,
      };
    })
    .sort((a: PortfolioImage, b: PortfolioImage) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
