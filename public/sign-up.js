console.log('JS connected')

const firstNameInput = document.getElementById('First-name')
const lastNameInput = document.getElementById('Last-name')
const userNameInput = document.getElementById('User-name')
const passWordInput = document.getElementById('Pass-word')
const signForm = document.getElementById('signUpForm')

const postUser = (e) => {
    e.preventDefault()

    if(firstNameInput.value === null || firstNameInput.value === ''){
        alert("Please enter first name")
        return 
    } else if(lastNameInput.value === null || lastNameInput.value === ''){
        alert("Please enter last name")
        return
    } else if(userNameInput.value === null || userNameInput.value.length <= 5){
        alert("Username must be at least 6 characters")
        return
    } else if(passWordInput.value === null || passWordInput.value.length <= 6){
        alert("Password has to have at least 7 characters")
        return
    } 

    const newUser = {
       firstName: firstNameInput.value,
       lastName: lastNameInput.value,
       userName: userNameInput.value,
       passWord: passWordInput.value
    }

    axios.post('http://localhost:4000/api/users', newUser)
        .then(res => {
            console.log(res.data)
            alert("Your info has been submitted!")
        })
        .catch(err => console.log(err))
}

signForm.addEventListener('submit', postUser)