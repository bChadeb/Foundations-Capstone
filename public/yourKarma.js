console.log('JS connected')
const karmaList = document.getElementById('list-of-karma')


const yourKarma = () => {
    axios.get('http://localhost:4000/api/list')
        .then(res => {
            console.log(res.data)
            res.data.forEach()
        })
}