var questionElement = document.getElementById('question')
var answerElement = document.getElementById('answer')

var answers = [
    'John Stockton',
    'Black Mamba',
    'Klay Thompson'
  ]

  var questionMap = {
    'Black Mamba': 'Number three scorer in nba history?',
    'John Stockton': 'All time leader in assists?',
    'Klay Thompson': 'Who scored 37 points in a quarter?'
  }

  var randomIndex = getRandomInt(0, (answers.length - 1))

  var randomAnswer = answers[randomIndex]

  var question = questionMap[randomAnswer]

  questionElement.innerHTML = question

  var underscores = []

 var answerArray = randomAnswer.split('')

 function generateUnderscores () {
    underscores = []
    for (var i = 0; i < answerArray.length; i++) {
      answerArray[i] === ' ' ? underscores.push(' ') : underscores.push('_')
    }
    answerElement.innerHTML = underscores.join('')
  }

  generateUnderscores()

  function checkIfLetterExists (letter) {
    var originalBlanks = checkForBlanks()
    
    for (var i = 0; i < answerArray.length; i++) {
      if (letter.toLowerCase() === answerArray[i].toLowerCase()) {
        underscores[i] = answerArray[i]

        answerElement.innerHTML = underscores.join('')
    } 
  }
  
  if (checkForBlanks() === 0) {
    setTimeout(function () {
      resetGame()
    }, 1000)
  } else if (originalBlanks === checkForBlanks()) {
    console.log('You ate turtle soup!')
  }
}

function checkForBlanks () {
  var blanks = 0

  for (var i = 0; i < underscores.length; i++) {
    if (underscores[i] === '_') {
      blanks += 1
    }
  }
  
  return blanks
}

function resetGame () {
  randomIndex = getRandomInt(0, (answers.length - 1))
  randomAnswer = answers[randomIndex]
  answerArray = randomAnswer.split('')
  question = questionMap[randomAnswer]
  questionElement.innerHTML = question
  generateUnderscores()
}

document.addEventListener('keydown', function (e) {
  checkIfLetterExists(e.key)
})