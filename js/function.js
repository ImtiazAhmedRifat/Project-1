//  common function to call
function getInputValue(id) {
  return document.getElementById(id).value;
}
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

// common variables
// const balanceNumber = parseFloat(getInputValue('my-balance'));

// const amountNumber1 = parseFloat(getInputValue('donation-amount-1'));
let balance = getInnerText("my-balance");
let balanceNumber = parseFloat(balance);
let donationAmount1 = getInnerText("donation-amount-1");
let amountNumber1 = parseFloat(donationAmount1);
// console.log(balance);
// button-1 clicked
document
  .getElementById("donation-btn-1")
  .addEventListener("click", function () {
    const firstInputAmount = parseFloat(getInputValue("donation-input-1"));

    if (firstInputAmount <= 0 || isNaN(firstInputAmount)) {
      alert("invalid amount");
      return;
    }
    if (firstInputAmount > balanceNumber) {
      alert("you do not have enough money");
      return;
    }
    const remainBalanceOne = balanceNumber - firstInputAmount;

    const totalDonation1 = amountNumber1 + firstInputAmount;

    document.getElementById("my-balance").innerText =
      remainBalanceOne.toFixed(2);

    document.getElementById("donation-amount-1").innerText =
      totalDonation1.toFixed(2);

    document.getElementById("donation-input-1").value = "";

const p = document.createElement('p');
p.className = 'bg-white text-xl text-center font-bold my-8'
p.innerText =  `At ${new Date().toLocaleDateString()} You donated ${totalDonation1.toFixed(2)} BDT and remaining balance ${remainBalanceOne.toFixed(2)} BDT`;
document.getElementById('history-container').append(p);

  });
// button 1 end

// button 2 start

document
  .getElementById("donation-btn-2")
  .addEventListener("click", function () {
    const secondInputAmount = parseFloat(getInputValue("donation-input-2"));

    if (secondInputAmount <= 0 || isNaN(secondInputAmount)) {
      alert("invalid amount");
      return;
    }
    if (secondInputAmount > balanceNumber) {
      alert("you do not have enough money");
      return;
    }
    const remainBalanceSecond = balanceNumber - secondInputAmount;

    const totalDonation2 = amountNumber1 + secondInputAmount;

    document.getElementById("my-balance").innerText =
      remainBalanceSecond.toFixed(2);

    document.getElementById("donation-amount-2").innerText =
      totalDonation2.toFixed(2);

    document.getElementById("donation-input-2").value = "";

    
const p = document.createElement('p');
p.className = 'bg-white text-xl text-center font-bold my-8'
p.innerText =  `At ${new Date().toLocaleDateString()} You donated ${totalDonation2.toFixed(2)} BDT and remaining balance ${remainBalanceSecond.toFixed(2)} BDT`;
document.getElementById('history-container').append(p);
  });

// button 2 end

// button 3 start

document
  .getElementById("donation-btn-3")
  .addEventListener("click", function () {
    const thirdInputAmount = parseFloat(getInputValue("donation-input-3"));

    if (thirdInputAmount <= 0 || isNaN(thirdInputAmount)) {
      alert("invalid amount");
      return;
    }
    if (thirdInputAmount > balanceNumber) {
      alert("you do not have enough money");
      return;
    }
    const remainBalanceThird = balanceNumber - thirdInputAmount;

    const totalDonation3 = amountNumber1 + thirdInputAmount;

    document.getElementById("my-balance").innerText =
      remainBalanceThird.toFixed(2);

    document.getElementById("donation-amount-3").innerText =
      totalDonation3.toFixed(2);

    document.getElementById("donation-input-3").value = "";


    const p = document.createElement('p');
    p.className = 'bg-white text-xl text-center font-bold my-8'
    p.innerText =  `At ${new Date().toLocaleDateString()} You donated ${totalDonation3.toFixed(2)} BDT and remaining balance ${remainBalanceThird.toFixed(2)} BDT`;
    document.getElementById('history-container').append(p);
  });

// button 3 end

// history button

document.getElementById("history").addEventListener("click", function () {
  const cardContainer = document.getElementById("card-container");
  cardContainer.classList.add("hidden");
  const historyButton = document.getElementById("history");
  historyButton.classList.add("bg-lime-400");
  const donationButton = document.getElementById("donation");
  donationButton.classList.remove("bg-[#B2F36D]");
  donationButton.classList.add("bg-white");
  document.getElementById('history-container').classList.remove("hidden")
});

// donation button
document.getElementById("donation").addEventListener("click", function () {
  const cardContainer = document.getElementById("card-container");
  cardContainer.classList.remove("hidden");
  const historyButton = document.getElementById("history");
  historyButton.classList.remove("bg-lime-400");
  const donationButton = document.getElementById("donation");
  donationButton.classList.add("bg-[#B2F36D]");
  donationButton.classList.remove("bg-white");
  document.getElementById('history-container').classList.add("hidden")
});
