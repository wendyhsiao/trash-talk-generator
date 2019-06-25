// define sample function to randomly return a item in an array
function randomItem(array) {
  return Math.floor(Math.random() * array.length)
}

// define generateRubbish function
function generateRubbish(options) {
  //定義幹話內容
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // 選擇對象 按照對象選擇對應內容
  let taskContent = ''
  if (options === ' ') {
    return '請選擇一個職業'
  }
  if (options.engineer === 'on') {
    taskContent = task.engineer[randomItem(task.engineer)]
  }

  if (options.designer === 'on') {
    taskContent = task.designer[randomItem(task.designer)]
  }

  if (options.entrepreneur === 'on') {
    taskContent = task.entrepreneur[randomItem(task.entrepreneur)]
  }

  // 產生幹話語句
  let phraseContent = phrase[randomItem(phrase)]

  // console.log(`身為一個${Object.keys(options)}，${taskContent}，${phraseContent}吧！`)
  return `身為一個${Object.keys(options)}，${taskContent}，${phraseContent}吧！`
}

// invoke generateRubbish function
// generateRubbish()

// export generateRubbish function for other files to use
module.exports = generateRubbish