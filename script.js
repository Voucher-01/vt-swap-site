const vtPrice = 0.01;
function calculateUSDT() {
    const vtAmount = parseFloat(document.getElementById("vtAmount").value) || 0;
    const usdtAmount = (vtAmount * vtPrice).toFixed(2);
    document.getElementById("usdtAmount").value = usdtAmount > 0 ? usdtAmount + " USDT" : "";
}
