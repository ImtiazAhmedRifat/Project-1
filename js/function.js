//  common function to call
function getInputValue(id){
    return document.getElementById(id).value;
}
function getInnerText(id){
    return document.getElementById(id).innerText;
}

// common variables
const balance = getInnerText('my-balance');
const balanceNumber = parseFloat(balance);
const donationAmount1 = getInnerText('donation-amount-1');
const amountNumber1 = parseFloat(donationAmount1);
// console.log(balance);
// button-1 clicked
document.getElementById('donation-btn-1')
.addEventListener("click" , function(){
   const firstInputAmount = parseFloat(getInputValue('donation-input-1'));
  
   const remainBalance = balanceNumber - firstInputAmount;

   const totalDonation1 = amountNumber1 + firstInputAmount;

   if (firstInputAmount <= 0 || isNaN(firstInputAmount)){
    alert('invalid amount');
    return;
   }

   document.getElementById('donation-amount-1').innerText = totalDonation1;

   document.getElementById('my-balance').innerText = remainBalance;

   document.getElementById('donation-input-1').value = ' ';
})