import { SocialIconType } from "@/interfaces/SocialIconType";
import Image from "next/image";
import Link from "next/link";

const SocialIcon = ({
  href = "#",
  src,
  alt,
  className = "",
  size = 24,
}: SocialIconType) => {
  return (
    <Link
      href={typeof href === "string" ? href : "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500/50 "
      aria-label={alt}
    >
      <div
        role="img"
        aria-hidden="true"
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
      >
        <Image
          src={src}
          alt=""
          width={size}
          height={size}
          className={className}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          quality={75}
          placeholder="empty"
        />
      </div>
      <div className="absolute inset-0 bg-sky-500/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
};

export default SocialIcon;
