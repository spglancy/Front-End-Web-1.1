/********************************

        COOKIE clicker

********************************/
let cookieCount = 500;
let cookieCounter = document.getElementById('cookieCounter');
let cookieClicker = document.getElementById('cookieClicker');
let throwErr = document.getElementById('error');

cookieClicker.onclick = (e) => {
    cookieCount += clickPower;
    refreshCookieCount();
    throwErr.innerHTML = '';
}

let refreshCookieCount = function() {
    cookieCounter.innerHTML = 'Cookies: ' + cookieCount;
}
/********************************

        Click Power

********************************/
let clickPower = 1;
let upgradePower = document.getElementById('buy-click-power');
let upgradeCost = document.getElementById('click-power-price');

let upgradePrice = Number(upgradeCost.innerHTML);

upgradePower.onclick = (e) => {
    if(cookieCount >= upgradePrice) {
        cookieCount -= upgradePrice;
        clickPower += 1;
        upgradePrice = Math.floor(upgradePrice * 1.3);
        refreshUpgradePrice();
        refreshCookieCount();
    } else {
        throwErr.innerHTML = 'You do not have enough cookies to complete this transaction';
    }
}

let refreshUpgradePrice = function() {
    upgradeCost.innerHTML = 'Buy for ' + upgradePrice;
}
/********************************

          Grandmas

********************************/
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

buyGrandma.addEventListener("click", function() {
    if (cookieCount >= grandmaPriceAmount) {
        autoGrandma = true
        autoGrandmaStart();
        cookieCount -= grandmaPriceAmount;
        grandmaLevelNumber += 1;
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
        refreshCookieCount();
        refreshGrandma();
    }
})

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower * grandmaLevelNumber;
}

let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}
