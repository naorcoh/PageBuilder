const btnSend = document.querySelector("#btnSend")
const btnSave = document.querySelector("#btnSave")

btnSend.addEventListener("click", (event) => {
  event.preventDefault()

  //user input/ css properties
  const elmType = document.querySelector("#elmType").value
  const width = document.querySelector("#elmWidth").value
  const wUnits = document.querySelector("#widthUnits").value
  const height = document.querySelector("#elmHeight").value
  const hUnits = document.querySelector("#heightUnits").value
  const bgColor = document.querySelector("#elmBgColor").value
  const textContent = document.querySelector("#txtContent").value
  const fontColor = document.querySelector("#fontColor").value
  const font = document.querySelector("#font").value
  const fontSize = document.querySelector("#fontSize").value
  const sizeUnits = document.querySelector("#sizeUnits").value

  //element CSS rules set
  const cssRulesMap = new Map([
    ["width", `${width}${wUnits}`],
    ["height", `${height}${hUnits}`],
    ["background", bgColor],
    ["margin", "1rem"],
    ["color", fontColor],
    ["fontFamily", font],
    ["fontSize", `${fontSize}${sizeUnits}`],
  ])

  //element creations
  let elm = createElm(elmType)

  //add style to element
  elm = addStyle(elm, cssRulesMap)

  //add content
  elm.innerHTML += sanitizeInput(textContent)

  //page element
  const page = document.querySelector("#page")

  page.appendChild(elm)
})

function createElm(elmType) {
  try {
    return document.createElement(elmType)
  } catch (e) {
    e = "the element you try to create it not HTML element"
    console.log(e)
  }
}

const sanitizeInput = (inputValue) => {
  const div = document.createElement("div")
  div.textContent = inputValue
  return div.innerHTML
}

const addStyle = (elmStyleObj, cssRulesMap) => {
  for (let [key, value] of cssRulesMap.entries()) {
    elmStyleObj.style[key] = value
  }

  return elmStyleObj
}
