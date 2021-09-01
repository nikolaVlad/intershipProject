import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Erro404Component from '../Common/Erro404Component/Erro404Component';
import PageLoadEffects from '../Common/PageLoadEffects/PageLoadEffects';
import Footer from '../Footer/Footer';
import LogIn from '../Pages/LogIn/LogIn';
import Navbar from '../Navbar/Navbar';
import AllProducts from '../Pages/AllProducts';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import ShopingCart from '../Pages/ShopingCart';
import WishList from '../Pages/WishList';
import Test from '../Test/Test';
import { AppWrapper, PageContentWrapper } from './AppElements';
import Registration from '../Pages/Registration/Registration';
import Forum from '../Pages/Forum/Forum';
import Profile from '../Pages/Profile/Profile';
import { AlertContainer } from '../Common/Alert/Alert';
import LogOut from '../Pages/LogOut';
import PrivateRoute from '../Common/PrivateRoute/PrivateRoute';

import onMountedApp from '../../utils/events/onMountedApp';
import Contact from '../Pages/Contact';

function App() {

    
    useEffect(async () =>
    {
        await onMountedApp();
    }, [])

    


    return (
        <AppWrapper>
            <BrowserRouter>
                <PageLoadEffects>
                    <Navbar />
                    <AlertContainer />
                    <Switch>
                        <PageContentWrapper>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/test' component={Test} />
                            <Route
                                exact
                                path='/products'
                                component={AllProducts}
                            />
                            <Route
                                exact
                                path='/products/:productId'
                                component={Product}
                            />
                            <PrivateRoute
                                exact
                                path='/shoping-cart'
                                component={ShopingCart}
                            />
                            <Route
                                exact
                                path='/wish-list'
                                component={WishList}
                            />

                            <Route
                                path='/error404'
                                component={Erro404Component}
                            />

                            <Route exact path='/log-in' component={LogIn} />

                            <Route
                                exact   
                                path='/registration'
                                component={Registration}
                            />

                            <PrivateRoute exact path='/forum' component={Forum} />

                            <PrivateRoute
                                exact
                                path='/forum/:topicId'
                                component={Forum}
                            />

                            <PrivateRoute
                                exact
                                path='/forum/:topicId/:postId'
                                component={Forum}
                            />

                            <PrivateRoute exact path='/profile' component={Profile} />

                            <Route exact path = '/log-out' component = {LogOut} />

                            <PrivateRoute exact path = '/contact' component = {Contact} />

                        </PageContentWrapper>
                    </Switch>
                    <Footer />
                </PageLoadEffects>
            </BrowserRouter>
        </AppWrapper>
    );
}

export default App;
