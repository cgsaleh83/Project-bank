
    // const currentDeposite = document.getElementById('currentDeposite').innerText;
    // const currentDepositeNumber = parseFloat(currentDeposite);
    // const totalDeposite = depositeNumber + currentDepositeNumber;
    // document.getElementById('currentDeposite').innerText = totalDeposite;

                //login btn event handler

    const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', function(){
        const loginArea = document.getElementById('loging-area');
        loginArea.style.display = 'none';
        const tranjectionArea = document.getElementById('tranjection-area');
        tranjectionArea.style.display = 'block';
    })

            //deposite btn event handler
        
    const depositeBtn = document.getElementById('addDeposite');
    depositeBtn.addEventListener('click', function(){
        const depositeNumber = getInputNumber('depositeAmount');

        updateSpantext('currentDeposite', depositeNumber)
        updateSpantext('currentBalance', depositeNumber)
    

        document.getElementById('depositeAmount').value = "";

    })
                //Withdrow btn event handler

    const withdrowBtn = document.getElementById('addWithdrow');
        withdrowBtn.addEventListener('click', function(){
            const withdrowNumber = getInputNumber('withdrowAmount');

            updateSpantext('currentWithdrow', withdrowNumber);
            updateSpantext('currentBalance',-1*  withdrowNumber)

            document.getElementById('withdrowAmount').value = "";
    })

    function getInputNumber(id){
        const Amount = document.getElementById(id).value;
        const amountNumber = parseFloat(Amount);
        return amountNumber;
    }

    function updateSpantext(id, depositeNumber){
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = depositeNumber + currentNumber;
        document.getElementById(id).innerText = total;
    }


