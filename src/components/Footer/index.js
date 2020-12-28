import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Fodizz</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://github.com/kumard3' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/KumarDe06313740'
                target='_blank'
                aria-label='Twitter'              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/kumar-deepanshu-55a7721a5/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
