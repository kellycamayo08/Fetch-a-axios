import { ShowCard } from "../modules/showCard.js"

let btnMarvel = document.getElementById("btnCategory1")
let btnDC = document.getElementById("btnCategory2")
let listarCard = document.getElementById("listarCard")



btnMarvel.addEventListener('click', () => {
    getUrl('http://localhost:4080/marvel')
})

btnDC.addEventListener('click', () => {
    getUrl('http://localhost:4080/dc')
})

const getUrl = async (url) => {

    const { data } = await axios.get(url)
    console.table(data)
    ShowCard(data, listarCard)

}

bt



