export const formatMoney = (price) => {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
};
export const formatDate = (d) => {
    return d.toDateString()
}