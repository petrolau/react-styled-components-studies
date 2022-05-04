import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles";

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://twitter.com">
          <FaTwitter></FaTwitter>
        </a>
      </li>
      <li>
        <a href="https://facebook.com">
          <FaFacebook></FaFacebook>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin></FaLinkedin>
        </a>
      </li>
    </StyledSocialIcons>
  );
};
