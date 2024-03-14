console.log('JS Connected')
const allTheKarma = document.getElementById('karma')
const karmaForm = document.getElementById('karma-form')
const yourKarma = document.getElementById('displayedKarma')
const leaveUser = document.getElementById('signOutBtn')

const postKarma = (e) => {
    e.preventDefault()

    if(localStorage.getItem('correctUser') === null){
        alert("Please log in to continue")
        return
    }
    const newKarma = {
        text: allTheKarma.value,
        user_id: localStorage.getItem('correctUser')
    }

    axios.post('http://localhost:4000/api/karma', newKarma)
        .then(res => {
            console.log(res.data)
            alert("Thank you for spreading your karma!")
            grabKarma()
        })
        .catch(err => console.log(err))
}

const removeKarma = (id) => {
    axios.delete(`http://localhost:4000/api/karma/${id}`)
    .then(res => {
        yourKarma.innerHTML = ''
        res.data.forEach(createBox)
    })
    .catch(err => console.log(err))
}

const createBox = karma => {
    console.log(karma)
    let box = document.createElement('div')
    box.classList += 'karma-card'

    let boxHeader = document.createElement('div')
    boxHeader.classList += 'karma-header'

    let karmaName = document.createElement('h3')
    karmaName.classList.add('karma-name')
    karmaName.textContent = karma.text

    let options = document.createElement('div')
    options.classList += 'karma-options'

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => removeKarma(karma.id))

    
    box.appendChild(boxHeader)
    boxHeader.appendChild(karmaName)
    boxHeader.appendChild(options)
    options.appendChild(deleteBtn)

    yourKarma.appendChild(box)
}

const grabKarma = () => {
    axios.get('http://localhost:4000/api/list')
    .then(res => {
        console.log(res.data)
        yourKarma.innerHTML = ''
        res.data.forEach((karma) => createBox(karma))
    })
}

const signOut = () => {
    if(localStorage.getItem('correctUser')){
        localStorage.removeItem('correctUser')
        alert('You successfully signed out')
        yourKarma.innerHTML = ''
    //     document.getElementsByClassName('karma-card').remove 
    //     document.getElementsByClassName('').remove
    //     document.getElementsByClassName('').remove
    //     document.getElementsByClassName('').remove
    }
}

grabKarma()

const init = function(e) {
    console.log(localStorage.getItem('correctUser'))
}

document.addEventListener('DOMContentLoaded', function() {
    let loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        window.location.href = './log-in.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    init()
})
karmaForm.addEventListener('submit', postKarma)
leaveUser.addEventListener('click', signOut)