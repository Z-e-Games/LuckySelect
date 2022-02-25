const EasyElement = document.getElementById('easy radio')
const VeryEasyElement = document.getElementById('very easy radio')
const MediumElement = document.getElementById('medium radio')
const HardElement = document.getElementById('hard radio')
const guessInput = document.getElementById('number input')
const bettingInput = document.getElementById('bet input')
const finalDisplay = document.getElementById('numbershow')
let randomNumberGenerated
let timeRunning = 0
let guess

function randomNum(min, max){
    let num = Math.random() * (max - min) + min;

    return Math.floor(num);
};

function startGame(){
    amountBet = parseInt(bettingInput.value)
    guess = parseInt(guessInput.value)
    if(EasyElement.checked === true && amountBet >= 50 && guess >= 1 && guess <= 100 && amountBet <= parseInt(localStorage.getItem('gold coins'))) {
        localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins') - amountBet))
            const a = setInterval(() => {
            randomNumberGenerated = randomNum(1,10)
            finalDisplay.innerHTML = randomNumberGenerated
            timeRunning += 0.1
            if(timeRunning >= 5){
                clearInterval(a)
                if(randomNumberGenerated === guess){
                    alert('you won')
                    localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins')) + amountBet * 5)

                    setTimeout(() => {
                
                    location.reload()
                    },1000)    
                }else{
                    alert('you lost :(')
                    setTimeout(() => {     
                        location.reload()
                    }, 1000);
                }
            }
        },100)
    }else if(MediumElement.checked === true && amountBet >= 50 && guess >= 1 && guess <= 100 && amountBet <= parseInt(localStorage.getItem('gold coins'))) {
        localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins') - amountBet))
        const a = setInterval(() => {
        console.log('asd')
        randomNumberGenerated = randomNum(1,50)
        finalDisplay.innerHTML = randomNumberGenerated
        timeRunning += 0.1
        if(timeRunning >= 5){
            clearInterval(a)
            if(randomNumberGenerated === guess){
                alert('you won')
                localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins')) + amountBet * 20)
                setTimeout(() => {

                location.reload()                })    

            }else{
                setTimeout(() => {
                   
                alert('you lost :(')
                location.reload()
             
                }, 1000);
            }
        }
    },100)
    }else if(HardElement.checked === true && amountBet >= 50 && guess >= 1 && guess <= 100 && amountBet <= parseInt(localStorage.getItem('gold coins'))) {
        localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins') - amountBet))
        const a = setInterval(() => {
        console.log('asd')
        randomNumberGenerated = randomNum(1,100)
        finalDisplay.innerHTML = randomNumberGenerated
        timeRunning += 0.1
        if(timeRunning >= 5){
            clearInterval(a)
            if(randomNumberGenerated === guess){
                alert('you won')
                localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins')) + amountBet * 30)
                setTimeout(() => {

                location.reload()                })    

            }else{
                setTimeout(() => {
                   
                alert('you lost :(')
                location.reload()
             
                }, 1000);
            }
        }
    },100)
    }else if(VeryEasyElement.checked === true && amountBet >= 50 && guess >= 1 && guess <= 100 && amountBet <= parseInt(localStorage.getItem('gold coins'))) {
        localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins') - amountBet))
        const a = setInterval(() => {
            console.log('asd')
            randomNumberGenerated = randomNum(1,5)
            finalDisplay.innerHTML = randomNumberGenerated
            timeRunning += 0.1
            if(timeRunning >= 5){
                clearInterval(a)
                if(randomNumberGenerated === guess){
                    alert('you won')
                    localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins')) + amountBet * 3)

                    setTimeout(() => {
                
                    location.reload()
                    })    
                }else{
                    alert('you lost :(')
                    setTimeout(() => {     
                        location.reload()
                    }, 1000);
                }
            }
        },100)
    }else if(amountBet < 50){
        alert('bet at least 50 coins')
    }else if(amountBet > parseInt(localStorage.getItem('gold coins'))){
        alert('you do not have enough gold coins')
    }else if(guess > 100){
        alert('guess too high')
    }else if(guess < 1){
        alert('guess too low')
    }
}
