import React from 'react';
import { Logo } from '../Common/GlobalStyles';
import { LinkComponent } from '../Navbar/NavbarElements';
import {
    LinkPlace,
    Wrapper,
    ContactPlace,
    ContentWrapper,
} from './FooterElements';

function Footer() {
    return (
        <ContentWrapper>
            <Wrapper>
                <LinkPlace>
                    <div>
                        <LinkComponent to='/news'>New</LinkComponent>
                        <LinkComponent to='/games'>Games</LinkComponent>
                        <LinkComponent to='/video'>Video</LinkComponent>
                        <LinkComponent to='/screenshot'>
                            Screenshot
                        </LinkComponent>
                    </div>

                    <div>
                        <LinkComponent to='/community'>Community</LinkComponent>
                        <LinkComponent to='/forum'>Forum</LinkComponent>
                        <LinkComponent to='/support'>Support</LinkComponent>
                        <LinkComponent to='/about'>About</LinkComponent>
                    </div>

                    <div>
                        <LinkComponent to='/blogs'>Blogs</LinkComponent>
                        <LinkComponent to='/store'>Store</LinkComponent>
                        <LinkComponent to='/faqs'>FAQS</LinkComponent>
                        <LinkComponent to='/contact-us'>
                            Contact US
                        </LinkComponent>
                    </div>

                    <div style={{ width: '10%' }}>
                        <img src={Logo} />
                    </div>
                </LinkPlace>

                <ContactPlace>
                    <div>
                        <LinkComponent to='/fb'>Facebook </LinkComponent>
                        <LinkComponent to='/tw'>Twitter </LinkComponent>
                        <LinkComponent to='/twc'>Twich </LinkComponent>
                        <LinkComponent to='/youtube'>Youtube </LinkComponent>
                    </div>

                    <div style={{ color: 'gray' }}>
                        <span style={{ marginRight: '20px' }}>381xxxxx</span>
                        <span>381xxxxx</span>
                    </div>
                </ContactPlace>
            </Wrapper>
        </ContentWrapper>
    );
}

export default Footer;
