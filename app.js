(function () {
    let counterValue = 0
    const buttons = document.querySelectorAll('.counterBtn')
    const counter = document.getElementById('counter')

    buttons.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            const value = e.target

            if (value.classList.contains('prevBtn')) {  
                counterValue--
            } else if (value.classList.contains('nextBtn')) {
                counterValue++
            }

            counter.textContent = counterValue
            
            if (counterValue === 0) {
                counter.style.color = "blue"
            } else if (counterValue < 0) {
                counter.style.color = "red"
            } else {
                counter.style.color = "green"
            }
        })
    })












    


})();