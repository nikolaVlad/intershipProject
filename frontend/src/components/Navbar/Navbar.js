import { faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Logo, primaryColor } from '../Common/GlobalStyles';

import {
    LogoSection,
    Nav,
    NavGroup,
    NavSecondary,
    LinkComponent,
    Wrapper,
} from './NavbarElements';
import DropDownComponent from '../Common/DropDownComponent/DropDownComponent';
import DropDownCartContent from '../DropDownCart/DropDownCartContent';
import CartStore from '../../stores/CartStore';
import { observer } from 'mobx-react';
import DropDownWishListContent from '../DropDownWishListContent/DropDownWishListContent';
import WishListStore from '../../stores/WishListStore';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import SearchBar from '../Common/SearchBar/SearchBar';
import AuthStore from '../../stores/AuthStore';

const Navbar = observer(() => {

    return (
        <Wrapper>
            <Nav>
                <LogoSection>
                    <LinkComponent to='/'>
                        <img src={Logo} />
                    </LinkComponent>
                </LogoSection>

                <NavGroup>
                    <SearchBar />
                </NavGroup>

                <NavGroup>
                    <LinkComponent to='/contact'>Contact</LinkComponent>
                    <LinkComponent to='/forum'>Forum</LinkComponent>

                    <LinkComponent to='/about'>About</LinkComponent>
                </NavGroup>

                {AuthStore.isLogged && 
                <NavSecondary>
                    <NavGroup>
                        <DropDownComponent
                            countSource={CartStore.CartProductsList.length}
                            linkIcon={faShoppingBag}
                            linkTo='/shoping-cart'
                            content={<DropDownCartContent />}
                            iconColor='gray'
                        />
                        <DropDownComponent
                            countSource={WishListStore.WishListProducts.length}
                            linkIcon={faHeart}
                            linkTo='/wish-list'
                            content={<DropDownWishListContent />}
                            iconColor='gray'
                            style={{ borderTop: '1px solid white' }}
                        />
                    </NavGroup>
                </NavSecondary>
                }

                <NavGroup>
                    {AuthStore.isLogged ? (
                        <>
                            <LinkComponent
                                to={`/profile`}
                                color={primaryColor}
                                hovercolor='yellow'
                            >
                                <FaUserCircle size='20px' />
                            </LinkComponent>
                            <span style={{ color: 'gray' }}>|</span>
                            <LinkComponent
                                to='/log-out'
                                color={primaryColor}
                                hovercolor='yellow'
                            >
                                <FaSignOutAlt size='20px' />
                            </LinkComponent>
                        </>
                    ) : (
                        <>
                            <LinkComponent
                                to='/log-in'
                                color={primaryColor}
                                hovercolor='yellow'
                            >
                                Log in
                            </LinkComponent>
                            <span style={{ color: 'gray' }}>|</span>
                            <LinkComponent
                                to='/registration'
                                color={primaryColor}
                                hovercolor='yellow'
                            >
                                Registration
                            </LinkComponent>
                        </>
                    )}
                </NavGroup>
            </Nav>
        </Wrapper>
    );
});

export default Navbar;
