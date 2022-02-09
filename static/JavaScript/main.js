var nameInput = document.querySelector('#name')
var phoneInput = document.querySelector('#phone')
var adressInput = document.querySelector('#adress')
var typeInput = document.querySelector('#type')

var form = document.querySelector('form')
var primaryKey = 0



document.querySelector('#newStudent').addEventListener('click', function(event){
    event.preventDefault()

    primaryKey++

    
    var studentsTable = document.querySelector('#students')
    var studentRow = document.querySelector('#student').cloneNode(true)

    studentRow.classList.remove('is-hidden')
    studentRow.querySelector('#tableId').textContent = primaryKey
    studentRow.querySelector('#tableName').textContent = nameInput.value
    studentRow.querySelector('#tablePhone').textContent = phoneInput.value
    studentRow.querySelector('#tableAdress').textContent = adressInput.value
    studentRow.querySelector('#tableType').textContent = typeInput.value

    studentsTable.appendChild(studentRow)
    form.reset()
})