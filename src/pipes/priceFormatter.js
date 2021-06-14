export const formatMoney = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
};
export const formatDate = (d) => {
    return d.toDateString()
}