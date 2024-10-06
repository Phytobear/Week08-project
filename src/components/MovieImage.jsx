import Image from "next/image";

export default function MovieImage({
  image_url,
  sorry,
  width = 150,
  height = 200,
}) {
  const placeholderImage = `/images/landscape-placeholder-svgrepo-com.svg`;

  return (
    <Image
      src={image_url || placeholderImage}
      alt={sorry}
      width={width}
      height={height}
    />
  );
}
