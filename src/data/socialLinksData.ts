import "../../envConfig";

interface SocialLinksType {
  LinkedinLink: string | unknown;
  GithubLink: string | unknown;
  YoutubeLink: string | unknown;
  XTwitterLink: string | unknown;
  InstagramLink: string | unknown;
  Gmail: string | unknown;
}

export const socialLinks: SocialLinksType = {
  LinkedinLink: process.env.LINKEDIN_LINK,
  GithubLink: process.env.GITHUB_LINK,
  YoutubeLink: process.env.YOUTUBE_LINK,
  XTwitterLink: process.env.TWITTER_LINK,
  InstagramLink: process.env.INSTAGRAM_LINK,
  Gmail: process.env.GMAIL,
};
