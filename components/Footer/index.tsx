import React from 'react'
import {
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube
} from 'react-icons/bs'
import {
    Container,
    Logo,
    SocialIconLink,
    SocialIcons,
    WebsiteRights,
    Wrapper
} from './FooterElements'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Container>
            <Wrapper>
                <Logo href='/'>
                    OV Travels
                </Logo>

                <WebsiteRights>
                    OV Travels © {new Date().getFullYear()}
                </WebsiteRights>

                <SocialIcons>
                    <SocialIconLink href='//www.linkedin.com' target="_blank" aria-label='Linkedin'>
                        <BsLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href='//www.instagram.com' target="_blank" aria-label='Instagram'>
                        <BsInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='//www.twitter.com' target="_blank" aria-label='Twitter'>
                        <BsTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='//www.yotube.com' target="_blank" aria-label='Youtube'>
                        <BsYoutube />
                    </SocialIconLink>
                </SocialIcons>
            </Wrapper>
        </Container>
    )
}

export default Footer