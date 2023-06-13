interface Props {
  socialMediaInfo: string[];
}

const SocialMediaIcons = ({ socialMediaInfo }: Props) => {
  return (
    <div className="gap-3 hidden xl:gap-5 lg:gap-3.5 md:flex md:items-center">
      {socialMediaInfo.map((sm) => (
        <img
          key={sm}
          className="w-auto h-3 xl:h-4 lg:h-3.5"
          src={`/src/assets/social-media/${sm}.svg`}
          alt={`${sm} logo`}
        />
      ))}
    </div>
  );
};

export default SocialMediaIcons;
