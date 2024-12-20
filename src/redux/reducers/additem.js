// const addItem = [];

// const addItems = (state = addItem, action) => {
//     switch (action.type) {
//         case "ADDITEM" : return [
//             ...state,
//             action.payload
//         ]
//         break;

//         case "DELITEM" :
//             return state = state.filter((x)=>{
//                 return x.id !== action.payload.id
//             })
//         break;

//         default: return state;
//         break;

        
//     }
// }

// export default addItems;





const addItem = [];

const addItems = (state = addItem, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            // Check if product already exists in the cart
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // If exists, increase the quantity by 1
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // If doesn't exist, add the product to the cart with qty: 1
                return [
                    ...state,
                    { ...product, qty: 1 }
                ];
            }

        case "DELITEM":
            // Remove the product from the cart by filtering it out
            return state.filter((x) => x.id !== action.payload.id);

        default:
            return state;
    }
};

export default addItems;
