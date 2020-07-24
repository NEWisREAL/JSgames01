document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'burger',
            img: 'img/Slide1.png'
        },
        {
            name: 'burger',
            img: 'img/Slide1.png'
        },
        {
            name: 'coffee',
            img: 'img/Slide2.png'
        },
        {
            name: 'coffee',
            img: 'img/Slide2.png'
        },
        {
            name: 'fries',
            img: 'img/Slide3.png'
        },
        {
            name: 'fries',
            img: 'img/Slide3.png'
        },
        {
            name: 'chicken',
            img: 'img/Slide4.png'
        },
        {
            name: 'chicken',
            img: 'img/Slide4.png'
        },
        {
            name: 'iceCream',
            img: 'img/Slide5.png'
        },
        {
            name: 'iceCream',
            img: 'img/Slide5.png'
        },
        {
            name: 'pizza',
            img: 'img/Slide6.png'
        },
        {
            name: 'pizza',
            img: 'img/Slide6.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardChosen = []
    var cardChosenId = []
    const cardWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/Slide8.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]
        if (optionOneId == optionTwoId) {
            alert('You click the same image!')
            cards[optionOneId].setAttribute('src', 'img/Slide8.png')
            cards[optionTwoId].setAttribute('src', 'img/Slide8.png')
        } else if (cardChosen[0] === cardChosen[1]) {
           //alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            cardWon.push(cardChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/Slide8.png')
            cards[optionTwoId].setAttribute('src', 'img/Slide8.png')
            //alert('Sorry, Try again')
        }
        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = cardWon.length
        if (cardWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratuletions! You win!'
        }
    }

    function flipcard() {
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})