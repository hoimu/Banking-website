document.getElementById('deposit-btn').addEventListener("click", function(){
    const depositInputField = document.getElementById("deposit-input");
    const newDepositInputText = depositInputField.value;
    const newDepositInput = parseFloat(newDepositInputText)
    
    const depositTotalField = document.getElementById('deposit-total');
    const previousDepositTotalText = depositTotalField.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalText)
    
    const currentDepositTotal = previousDepositTotal +  newDepositInput;
    
    depositTotalField.innerText = currentDepositTotal;


    const totalBalanceField = document.getElementById("total-balance");
    const totalBalanceText = totalBalanceField.innerText;
   
    const previousTotalBalance = parseFloat(totalBalanceText);
    const totalBalance = previousTotalBalance + newDepositInput;
    totalBalanceField.innerText = totalBalance;
    depositInputField.value = "";
})


