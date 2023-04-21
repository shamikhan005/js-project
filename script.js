const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberofPeopleDiv = document.getElementById('numberOfPeople')
const perPersontotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberofPeopleDiv.innerText)

const calculateBill = () => {
  const bill = Number(billInput.value)

  const tipPercentage = Number(tipInput.value) / 100

  const tipAmount = bill * tipPercentage

  const total = tipAmount + bill

  const perPersonTotal = total / numberOfPeople
  console.log({perPersonTotal})

  perPersontotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`

}

const increasePeople = () => {
  numberOfPeople += 1

  numberofPeopleDiv.innerText = numberOfPeople

  calculateBill()
}

const decreasePeople = () => {

  if(numberOfPeople <= 1){
    return 
  }
  numberOfPeople -= 1

  numberofPeopleDiv.innerText = numberOfPeople

  calculateBill()
}