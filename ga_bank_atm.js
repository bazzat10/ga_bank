console.log('JAVASCRIPT ONLINE BANK');

var savings = 30000.00;
var checking = 15000.00;

document.querySelector('.checking-balance-output').innerHTML = '$' + checking;
document.querySelector('.savings-balance-output').innerHTML = '$' + savings;


document.querySelector('.checking-input').addEventListener('click', function(){
    document.querySelector('.checking-input').value = '';
});

document.querySelector('.savings-input').addEventListener('click', function(){
  document.querySelector('.savings-input').value = '';
});



var accountZeroBalance = function(accountHasZeroBalance){
  switch(accountHasZeroBalance) {

    case 0:
      document.querySelector('.checking-account').style.backgroundColor = '#A30000';
      checking = 0;
      document.querySelector('.checking-balance-output').innerHTML = '$' + checking;
      break;

    case 1:
      document.querySelector('.savings-account').style.backgroundColor = '#A30000';
      savings = 0;
      document.querySelector('.savings-balance-output').innerHTML = '$' + savings;
      break;

    };

};


var accountDecider = function (decider){


  switch(decider){

      case 0:

          var checkingAccountValidator = checking - (+document.querySelector('.checking-input').value);

          if(checkingAccountValidator > 0){
            checking = checking - (+document.querySelector('.checking-input').value);
            document.querySelector('.checking-balance-output').textContent = '$' + checking;
          };

          if(checkingAccountValidator <= 0){
            savingsAccountValidator = savings + checkingAccountValidator // this will subtract savings from -negative number

            if (savingsAccountValidator<0){
              break;
            }

            if(savingsAccountValidator === 0){
              accountZeroBalance(1);
            };

            if(savingsAccountValidator>0){
              savings = savings + checkingAccountValidator; // this will subtract savings from -negative number
              document.querySelector('.savings-balance-output').textContent = '$' + savings;
              accountZeroBalance(0);
            };

            if(checkingAccountValidator === 0){
              accountZeroBalance(0);
            };
          };

          break;

      case 1:

          checking = checking + (+document.querySelector('.checking-input').value);
          document.querySelector('.checking-balance-output').textContent = '$' + checking;
          document.querySelector('.checking-account').style.backgroundColor = 'gray';
          break;

      case 2:
          var savingsAccountValidator = savings - (+document.querySelector('.savings-input').value);


          if(savingsAccountValidator > 0){
            savings = savings - (+document.querySelector('.savings-input').value);
            document.querySelector('.savings-balance-output').textContent = '$' + savings;
          };

          if(savingsAccountValidator <= 0){
            checkingAccountValidator = checking + savingsAccountValidator // this will subtract savings from -negative number

            if (checkingAccountValidator<0){
              break;
            }

            if (checkingAccountValidator == 0){
              accountZeroBalance(0);
            };

            if(checkingAccountValidator > 0){
              checking = checking + savingsAccountValidator; // this will subtract savings from -negative number
              document.querySelector('.checking-balance-output').textContent = '$' + checking;
              accountZeroBalance(1);
            };

            if(savingsAccountValidator === 0){
              accountZeroBalance(1);
            };
          };



          break;

      case 3:

          savings = savings + (+document.querySelector('.savings-input').value);
          document.querySelector('.savings-balance-output').textContent = '$' + savings;
          document.querySelector('.savings-account').style.backgroundColor = 'gray';

          break;

      };
};



// checking account
document.querySelector('.checking-withdraw-btn').addEventListener('click', function(){
  if(isNaN(document.querySelector('.checking-input').value)){
    document.querySelector('.checking-input').value = 'PLEASE ENTER A NUMBER';
  } else {
    accountDecider(0)};
});

document.querySelector('.checking-deposit-btn').addEventListener('click', function(){
  if(isNaN(document.querySelector('.checking-input').value)){
    document.querySelector('.checking-input').value = 'PLEASE ENTER A NUMBER';
  } else {
    accountDecider(1)};
});

// savings account
document.querySelector('.savings-withdraw-btn').addEventListener('click', function(){
  if(isNaN(document.querySelector('.savings-input').value)){
    document.querySelector('.savings-input').value = 'PLEASE ENTER A NUMBER';
  } else {
    accountDecider(2)};
});

document.querySelector('.savings-deposit-btn').addEventListener('click', function(){
  if(isNaN(document.querySelector('.savings-input').value)){
    document.querySelector('.savings-input').value = 'PLEASE ENTER A NUMBER';
  } else {
    accountDecider(3)};
});
