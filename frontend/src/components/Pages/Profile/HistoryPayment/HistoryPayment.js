import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import UserPurchasesStore from '../../../../stores/UserPurchasesStore';
import HistoryPaymentCard from './HistoryPaymentCard/HistoryPaymentCard';
import { HPHeader, PaymentsPlace } from './HistoryPaymentElements';


const HistoryPayment = observer (() => {

    useEffect( async () =>
    {
        await UserPurchasesStore.init();
        console.log(UserPurchasesStore.purchases);
    } , [])


    return (
        <div>
            <HPHeader>
                Total purchases : <span style={{ color: 'orange' }}> {UserPurchasesStore.purchases ? UserPurchasesStore.purchases.length :   'Loading...'} </span>
            </HPHeader>

            <PaymentsPlace>
                {UserPurchasesStore.purchases.length > 0 ?  
                UserPurchasesStore.purchases.map((purchase) =>
                {
                    return  (<HistoryPaymentCard key = {purchase.id} purchase = {purchase} /> ) 
                }
                   
                    
                )
                : 'No purchased.' }
              
              

                
            </PaymentsPlace>


        </div>
    );
});

export default HistoryPayment;
