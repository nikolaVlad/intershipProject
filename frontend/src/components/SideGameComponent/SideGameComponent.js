import {
    faDesktop,
    faFilm,
    faGamepad,
    faGlobe,
    faHeadset,
    faInfoCircle,
    faKey,
    faSignOutAlt,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import BlurredGameCard from '../BlurredGameCard/BlurredGameCard';
import {
    MainGamePic,
    Sidenav,
    SidenavLinkComponent,
    SidenavSection,
    Wrapper,
    SidenavIcon,
} from './SideGameComponentElements';
import PropTypes from 'prop-types';
import AuthStore from '../../stores/AuthStore'
import { observer } from 'mobx-react';


const SideGameComponent = observer( ({ mainProduct }) => {
    return (
        <Wrapper>
            <Sidenav>
                <SidenavSection>
                    <SidenavLinkComponent to='/news'>
                        <SidenavIcon icon={faGamepad} />
                        News
                    </SidenavLinkComponent>
                    <SidenavLinkComponent to='/products'>
                        <SidenavIcon icon={faGlobe} />
                        Games
                    </SidenavLinkComponent>
                    <SidenavLinkComponent to='/video'>
                        <SidenavIcon icon={faFilm} />
                        Video
                    </SidenavLinkComponent>
                    <SidenavLinkComponent to='/screenshots'>
                        <SidenavIcon icon={faDesktop} />
                        Screenshots
                    </SidenavLinkComponent>
                </SidenavSection>

                <SidenavSection>
                    <SidenavLinkComponent to='/support'>
                        <SidenavIcon icon={faHeadset} />
                        Support
                    </SidenavLinkComponent>
                    <SidenavLinkComponent to='/about'>
                        <SidenavIcon icon={faInfoCircle} />
                        About
                    </SidenavLinkComponent>
                </SidenavSection>

                {!AuthStore.isLogged ? (
                    <SidenavSection>
                        <SidenavLinkComponent to='/log-in'>
                            <SidenavIcon icon={faKey} />
                            Login
                        </SidenavLinkComponent>
                        <SidenavLinkComponent to='/registration'>
                            <SidenavIcon icon={faUser} />
                            Create account
                        </SidenavLinkComponent>
                    </SidenavSection>
                ) : (
                    <SidenavSection>
                        <SidenavLinkComponent to='/profile'>
                            <SidenavIcon icon={faUser} />
                            My Account
                        </SidenavLinkComponent>
                        <SidenavLinkComponent to='/log-out'>
                            <SidenavIcon icon={faSignOutAlt} />
                            Log out
                        </SidenavLinkComponent>
                    </SidenavSection>
                )}
            </Sidenav>

            <MainGamePic>
                <BlurredGameCard product={mainProduct} CoverVariant />
            </MainGamePic>
        </Wrapper>
    );
});

SideGameComponent.propTypes = {
    mainProduct: PropTypes.object,
};

export default SideGameComponent;
