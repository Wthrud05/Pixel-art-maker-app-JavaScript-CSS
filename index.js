const board = document.querySelector('#board')

const createBtn = document.querySelector('#create')
const deleteBtn = document.querySelector('#delete')
const clearBtn = document.querySelector('#clear')

const pixelColor = document.querySelector('#inp_pixel-color')
const squareNum = document.querySelector('#inp_square')
const chooseBg = document.querySelector('#inp_bg-color')
const pixelSize = document.querySelector('#inp_pixel-size')


createBtn.addEventListener('click', () => {
  createBtn.disabled = true

  let size = +pixelSize.value

  let SQUARE_NUMBER = 0
  SQUARE_NUMBER = +squareNum.value

  for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.background = chooseBg.value
    square.style.width = size +'px'
    square.style.height = size + 'px'

    square.addEventListener('click', setColor)

    board.append(square)

    deleteBtn.addEventListener('click', deleteBoard)

    function deleteBoard()  {
      SQUARE_NUMBER = 0
      square.style.display = 'none'
      createBtn.disabled = false
    }

    clearBtn.addEventListener('click', clear)

    function clear() {
      square.style.background = chooseBg.value
    }
  }

  function setColor(event) {
    const el = event.target
    const color = pixelColor.value
    el.style.backgroundColor = color
  }
})



