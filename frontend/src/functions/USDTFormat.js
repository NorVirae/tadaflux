const USDTFormat = (price) => {
    return "USDT " +price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export default USDTFormat