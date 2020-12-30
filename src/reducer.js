export const initialState = {
    basket:[],
    user:null,
}

function reducer( state, action ) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding Item to basket.
            return {
                ...state,
                basket: [ ...state.basket, action.item ]
            }
        
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket.
            // TODO : Need to update logic here.
            return state;

        default :
            return state;
    }
}

export default reducer;