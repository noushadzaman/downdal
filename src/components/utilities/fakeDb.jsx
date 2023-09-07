const getAppliedJobs = () => {
    let appliedJobs = {};
    //get the shopping cart from local storage
    const storedJobs = localStorage.getItem('applied-jobs');
    if (storedJobs) {
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

const addToDb = id => {
    let appliedJobs = getAppliedJobs();
    // add quantity
    const quantity = appliedJobs[id];
    if (!quantity) {
        appliedJobs[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJobs[id] = newQuantity;
    }
    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

// const removeFromDb = id => {
//     const shoppingCart = getShoppingCart();
//     if (id in shoppingCart) {
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     }
// }
// const deleteShoppingCart = () => {
//     localStorage.removeItem('shopping-cart');
// }

export {
    addToDb,
    getAppliedJobs,
    // removeFromDb,
    // deleteShoppingCart
}