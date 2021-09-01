import React, { useEffect, useState } from 'react';
import EditProfile from '../../ProfileForms/EditProfile/EditProfile';
import ViewProfile from '../../ProfileForms/ViewProfile/ViewProfile';
import HistoryPayment from './HistoryPayment/HistoryPayment';
import {
    GamesInfoPlace,
    HistoryMenuBtn,
    MenuButtons,
    PursacheMenuBtn,
    Wrapper,
} from './ProfileElements';
import PurshachedGamesCard from './PurshachedGamesCard/PurshachedGamesCard';
import { getUser } from '../../../actions/user'
import LoadingComponent from '../../Common/LoadingComponent/LoadingComponent';
import { observer } from 'mobx-react';



const Profile = observer(() => 
{
    const [profileData, setProfileData] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [historyMenu, setHistoryMenu] = useState(false);


    useEffect(async () =>
    {
        let data = await getUser();
        setProfileData(data);
        
    }, [])


    useEffect(async () =>
    {
        let data = await getUser();
        setProfileData(data);
    }, [isEdit])


    return (
        <>
            {Object.keys(profileData).length === 0 ? (
                <LoadingComponent />
            ) : (
                <Wrapper>
                    {isEdit ? (
                        <EditProfile
                            profileData = {profileData}
                            onClickCancelBtn={() => setIsEdit(false)}
                        />
                    ) : (
                        <ViewProfile
                            profileData={profileData}
                            onClickEditBtn={() => setIsEdit(true)}
                        />
                    )}

                    <GamesInfoPlace>
                        <MenuButtons>
                            <PursacheMenuBtn
                                className={historyMenu && 'disabledClass'}
                                onClick={() => setHistoryMenu(false)}
                            >
                                Pursached Games
                            </PursacheMenuBtn>
                            <HistoryMenuBtn
                                className={!historyMenu && 'disabledClass'}
                                onClick={() => setHistoryMenu(true)}
                            >
                                History of payment
                            </HistoryMenuBtn>
                        </MenuButtons>

                        {!historyMenu ? (
                            <PurshachedGamesCard />
                        ) : (
                            <HistoryPayment />
                        )}
                    </GamesInfoPlace>
                </Wrapper>
            )}
        </>
    );
});

export default Profile;
