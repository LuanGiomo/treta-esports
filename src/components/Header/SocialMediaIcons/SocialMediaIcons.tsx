import styles from "./SocialMediaIcons.module.css";

interface Props {
  socialMediaInfo: string[];
}

const SocialMediaIcons = ({ socialMediaInfo }: Props) => {
  return (
    <div className={styles.socialMedia}>
      {socialMediaInfo.map((sm) => (
        <img
          className={styles.socialMedia__image}
          src={`/src/assets/social-media/${sm}.svg`}
          alt={`${sm} logo`}
        />
      ))}
    </div>
  );
};

export default SocialMediaIcons;
