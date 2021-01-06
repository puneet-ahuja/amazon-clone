export const initialState = {
    basket:[],
    user:null,
}

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);

function reducer( state, action ) {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'ADD_TO_BASKET':
            // Logic for adding Item to basket.
            return {
                ...state,
                basket: [ ...state.basket, action.item ]
            }
        
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket.
            // TODO : Look for another better way of doing this.
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(basketItem => basketItem.id === action.id)
            if(index >= 0) {
                // item existes in nasket, remove it..
                newBasket.splice(index,1)
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not available oin basket.`
                )
            }
            return { ...state, basket: newBasket};

        default :
            return state;
    }
}

export default reducer;