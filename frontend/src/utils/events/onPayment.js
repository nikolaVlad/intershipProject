import {postPayment} from '../../actions/payments'
import CartStore from '../../stores/CartStore';

const onPayment = async () =>
{
        CartStore.emptyCart();
        const result = await postPayment();
        // await CartStore.initCart();
        return result;
}

export default onPayment;