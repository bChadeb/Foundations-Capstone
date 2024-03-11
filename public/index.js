console.log('JS Connected')
const allTheKarma = document.getElementById('karma')
const karmaForm = document.getElementById('karma-form')

const postKarma = (e) => {
    e.preventDefault()

    const newKarma = {
        text: allTheKarma.value
    }

    axios.post('http://localhost:4000/api/karma', newKarma)
        .then(res => {
            console.log(res.data)
            alert("Thank you for spreading your karma!")
        })
        .catch(err => console.log(err))
}

const init = function(e) {
    console.log(localStorage.getItem('correctUser'))
}

document.addEventListener('DOMContentLoaded', function() {
    init()
})
karmaForm.addEventListener('submit', postKarma)