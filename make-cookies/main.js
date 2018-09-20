/********************************

        COOKIE clicker

********************************/
let cookieCount = 0;
let cookieCounter = document.getElementById('cookieCounter');
let cookieClicker = document.getElementById('cookieClicker');
let throwErr = document.getElementById('error');
let throwFErr = document.getElementById('ferror');
let throwGErr = document.getElementById('gerror');

cookieClicker.onclick = (e) => {
    cookieCount += clickPower;
    refreshCookieCount();
    throwErr.innerHTML = '';
    throwGErr.innerHTML = '';
    throwFErr.innerHTML = '';
}

let refreshCookieCount = function() {
    cookieCounter.innerHTML = 'Cookies: ' + cookieCount;
}
/********************************

        Click Power

********************************/
let clickPower = 1;
let clickLevel = 0;
let upgradePower = document.getElementById('buy-click-power');
let upgradeCost = document.getElementById('click-power-price');
let clickMultiple = document.getElementById('click-power-multiple');
let upgradePrice = Number(upgradeCost.innerHTML);

upgradePower.onclick = (e) => {
    if(cookieCount >= upgradePrice) {
        cookieCount -= upgradePrice;
        clickLevel += 1;
        clickPower += Math.floor(1 + (clickLevel * .3));
        upgradePrice = Math.floor(upgradePrice * 1.3);
        clickMultiple.innerHTML = clickPower;
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
let grandmaPower = 10;
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
        grandmaPower +=  (grandmaLevelNumber * 10);
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
        grandmaMultiple.innerHTML = grandmaPower;
        refreshGrandma();
        refreshCookieCount();
    } else {
        throwGErr.innerHTML = 'You do not have enough cookies to complete this transaction';
    }
})

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;

}

let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}
/********************************

          Facilities

********************************/
let facilityPower = 600;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

buyFacility.addEventListener("click", function() {
    if (cookieCount >= facilityPriceAmount) {
      cookieCount -= facilityPriceAmount;
      refreshCookieCount()
      facilityLevelNumber += 1;
      facilityPower += facilityLevelNumber * 60;
      facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
      facilityAuto = true
      facilityMultiple.innerHTML = facilityPower * facilityLevelNumber;
      autoFacilityStart();
      refreshFacility();
  } else {
      throwFErr.innerHTML = 'You do not have enough cookies to complete this transaction';
    }
    })

let refreshFacility = function() {
        facilityLevel.innerHTML = facilityLevelNumber;
        facilityPrice.innerHTML = facilityPriceAmount;
}

let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000);
}
