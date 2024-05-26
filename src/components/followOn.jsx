import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2"> 
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com">
          <FaLinkedin size={20} />
        </a>
        <a href="https://www.github.com">
          <FaGithub size={20} />
        </a>
        <a href="https://www.twitter.com">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
}

export default FollowOn;

