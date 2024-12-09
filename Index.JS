
const btnReset = document.getElementById(`btnReset`)
const btnSubmit = document.getElementById(`btnSubmit`)
const lblCorrection = document.getElementById(`lblCorrection`)
const lblLeft = document.getElementById(`lblLeft`)
const edtBox = document.getElementById(`edtBox`)

let sguess = ``
let iguesses_left = 10

const imax = 1000
const imin = 0
let iRandom = Math.floor(Math.random() * (imax - imin + 1)) + imin

btnReset.onclick = function () {
    sguess = ``
    iguesses_left = 10
    iRandom = Math.floor(Math.random() * (imax - imin + 1)) + imin
    lblLeft.textContent = `You have ${iguesses_left} guesses`
    lblCorrection.textContent = ``
    edtBox.value = ``
}

btnSubmit.onclick = function () {
    sguess = edtBox.value

    if (iguesses_left > 0) {
        if (sguess.length > 1000) {
            sguess = 0
            edtBox.value = sguess
            alert(`You cant guess more than what is possible.`)
        } else {

            if (Number(sguess) == iRandom) {
                alert(`Congrats, You won! The awnser was ${sguess}`)
                sguess = ``
                iguesses_left = 10
                iRandom = Math.floor(Math.random() * (imax - imin + 1)) + imin
                lblLeft.textContent = `You have ${iguesses_left} guesses`
                lblCorrection.textContent = ``
                edtBox.value = ``
            }
            else if (Number(sguess) > iRandom) {
                lblCorrection.textContent = `Guess Smaller`
                iguesses_left--
                lblLeft.textContent = `You have ${iguesses_left} guesses`
            } else {
                lblCorrection.textContent = `Guess Bigger`
                iguesses_left--
                lblLeft.textContent = `You have ${iguesses_left} guesses`
            }
        }
    } else {
        alert(`Sorry, you lost. The awnser was ${iRandom}.`)
        sguess = ``
        iguesses_left = 10
        iRandom = Math.floor(Math.random() * (imax - imin + 1)) + imin
        lblLeft.textContent = `You have ${iguesses_left} guesses`
        lblCorrection.textContent = ``
        edtBox.value = ``
    }



}

