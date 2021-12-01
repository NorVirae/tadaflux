const USDTFormat = (price) => {
    return "USDC " +price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export default USDTFormat