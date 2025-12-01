import { SocialLinksType } from "@/interfaces/SocialLinksType";
import "../../envConfig";

export const socialLinks: SocialLinksType = {
  LinkedinLink: process.env.LINKEDIN_LINK,
  GithubLink: process.env.GITHUB_LINK,
  YoutubeLink: process.env.YOUTUBE_LINK,
  XTwitterLink: process.env.TWITTER_LINK,
  InstagramLink: process.env.INSTAGRAM_LINK,
  Gmail: process.env.GMAIL,
};
