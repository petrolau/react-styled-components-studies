import { Container } from "../MiddleText/styles";
import { Flex } from "../Flex/styles";
import { StyledFooter } from "./styles";
import { SocialIcons } from "../SocialIcons";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>Hello There!</li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          {/* Social Icons */}
          <SocialIcons></SocialIcons>
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved.</p>
      </Container>
    </StyledFooter>
  );
};
