console.log('Js Connected')

const logIn = document.getElementById('loginForm')
const userNameInput = document.getElementById('User-name')
const passWordInput = document.getElementById('Pass-word')

const loginUser = (e) => {
    e.preventDefault()

    const existingUser = {
        userName: userNameInput.value,
        passWord: passWordInput.value
    }

    // console.log(existingUser)

    axios.post('http://localhost:4000/api/users', existingUser)
        .then(res => {
            const {user_id} = res.data[0]
            console.log(res.data[0])
            if(res.data.length === 0 || res === null || res === undefined){
                alert('Incorrect username and/or password')
                return
            } else {
                localStorage.setItem('correctUser', user_id)
                window.document.location = './index.html'
            }
        })
}

logIn.addEventListener('submit', loginUser)