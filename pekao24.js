const UPPERCASE_INDICATOR = 'data:image/jpeg;base64,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'
const MASKED_MAN_ICON = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTWFzayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE5LjU4MSA1Ljg0YS44MDIuODAyIDAgMCAwLS45Mi0uNzNDMTYuOTE5IDUuMzg4IDEyLjgzNSA3IDEwIDdTMy4wODEgNS4zODggMS4zMzkgNS4xMWEuODAxLjgwMSAwIDAgMC0uOTIuNzI5Qy4yNzcgNy4zNzEgMCAxMS40NSAwIDEyLjA2OGMwIC44MyAzLjQ3MiAyLjczMiA2IDIuNzMyIDIuNDUyIDAgMi45NS0yLjczMiA0LTIuNzMyczEuNTQ4IDIuNzMyIDQgMi43MzJjMi41MjggMCA2LTEuOTAyIDYtMi43MzIgMC0uNjE4LS4yNzctNC42OTctLjQxOS02LjIyOHpNNy42NiAxMC43MmMtLjM1My4zMTgtMS4zMzUgMS4wNy0yLjUzMS44MzUtMS4xOTYtLjIzNS0xLjkxOS0xLjMyMy0yLjE2Ni0xLjc1OGEuMjU5LjI1OSAwIDAgMSAuMDQ0LS4zMTdjLjM1My0uMzE4IDEuMzM1LTEuMDcgMi41MzItLjgzNSAxLjE5Ni4yMzUgMS45MTkgMS4zMjMgMi4xNjYgMS43NThhLjI2LjI2IDAgMCAxLS4wNDUuMzE3em05LjM3Ny0uOTIzYy0uMjQ2LjQzNi0uOTY5IDEuNTIzLTIuMTY2IDEuNzU4LTEuMTk2LjIzNS0yLjE3OS0uNTE3LTIuNTMxLS44MzVhLjI2LjI2IDAgMCAxLS4wNDUtLjMxN2MuMjQ2LS40MzYuOTY5LTEuNTIzIDIuMTY2LTEuNzU4IDEuMTk2LS4yMzUgMi4xNzkuNTE3IDIuNTMxLjgzNWEuMjU4LjI1OCAwIDAgMSAuMDQ1LjMxN3oiLz48bWV0YWRhdGE+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxyZGY6RGVzY3JpcHRpb24gYWJvdXQ9Imh0dHBzOi8vaWNvbnNjb3V0LmNvbS9sZWdhbCNsaWNlbnNlcyIgZGM6dGl0bGU9Im1hc2siIGRjOmRlc2NyaXB0aW9uPSJtYXNrIiBkYzpwdWJsaXNoZXI9Ikljb25zY291dCIgZGM6ZGF0ZT0iMjAxNy0wOS0xNCIgZGM6Zm9ybWF0PSJpbWFnZS9zdmcreG1sIiBkYzpsYW5ndWFnZT0iZW4iPjxkYzpjcmVhdG9yPjxyZGY6QmFnPjxyZGY6bGk+RGFuaWVsIEJydWNlPC9yZGY6bGk+PC9yZGY6QmFnPjwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC9tZXRhZGF0YT48L3N2Zz4='

const PEKAO_INPUT_SELECTOR = 'pekao-masked-input-field input'
const PEKAO_ACTIVE_INPUT_SELECTOR = 'pekao-masked-input-field input.field-active'

function help(password) {
  removeAllHints()

  hideHintsOnSubmit();

  password.split('').forEach((char, index) => {
    const field = document.querySelectorAll(PEKAO_INPUT_SELECTOR)[index]
    if (isActive(field)) {
      showHint(field, char)
    }
  })
}

function showHint(field, char) {
  const rect = field.getBoundingClientRect()

  const hint = document.createElement('div')
  hint.classList.add('maskedManPassword')
  hint.classList.add('hint')
  hint.style.position = 'absolute'
  hint.style.top = `${rect.top + rect.height + 3}px`
  hint.style.left = `${rect.left}px`
  hint.style.width = `${rect.width}px`
  hint.style.height = `${rect.height}px`
  hint.style.background = 'white'
  hint.style.border = '1px solid black'
  hint.style.borderRadius = '4px'
  hint.style.zIndex = 9999
  hint.style.display = 'flex'
  hint.style.flexDirection = 'column'
  hint.style.justifyContent = 'space-between'
  hint.style.padding = '2px 0'
  hint.style.alignItems = 'center'
  hint.style.fontSize = '1.2em'
  hint.style.boxShadow = 'yellow 0px 0px 3px'

  const hintContent = document.createTextNode(char)
  hint.appendChild(hintContent)

  const uppercaseIndicator = document.createElement('img')
  const isUppercase = char.toLowerCase() !== char
  if (!isUppercase) {
    uppercaseIndicator.style.opacity = '0.1'
  }
  uppercaseIndicator.src = UPPERCASE_INDICATOR
  uppercaseIndicator.style.maxWidth = '80%'

  hint.appendChild(uppercaseIndicator)

  document.body.appendChild(hint)
}

function isActive(field) {
  return field.classList.contains('field-active')
}

function removeAllHints() {
  const hints = document.querySelectorAll('.maskedManPassword.hint')
  hints.forEach(hint => hint.remove())
}

function hideHintsOnSubmit() {
  const form = document.querySelector('form')

  form.addEventListener('submit', removeAllHints)
}

function showPassForm() {
  const wrapper = document.querySelector('.masked-input-field-wrapper')
  const rect = wrapper.getBoundingClientRect()

  const passInput = document.createElement('input')
  passInput.type = 'password'
  passInput.name = 'password'
  passInput.id = 'mmp-password'
  passInput.placeholder = 'unmasked password'
  passInput.style.flexGrow = 1

  const passForm = document.createElement('form')
  passForm.style.position = 'absolute'
  passForm.style.left = `${rect.left}px`
  passForm.style.top = `${rect.top + rect.height + 16}px`
  passForm.style.width = '400px'
  passForm.style.maxWidth = '100%'
  passForm.style.height = '30px'
  passForm.style.display = 'flex'
  passForm.style.columnGap = '4px'
  passForm.style.zIndex = '9001'

  const maskedManIcon = document.createElement('img')
  maskedManIcon.src = MASKED_MAN_ICON
  maskedManIcon.style.height = '100%'
  maskedManIcon.style.width = 'auto'
  maskedManIcon.title = 'Icon by https://iconscout.com/contributors/daniel-bruce'

  passForm.addEventListener('submit', e => {
    e.preventDefault()
    e.stopPropagation()

    const formData = new FormData(e.target)

    passForm.remove()
    help(formData.get('password'))

    const firstActiveInput = document.querySelector(PEKAO_ACTIVE_INPUT_SELECTOR)
    firstActiveInput.focus()
  })

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.innerText = 'Submit'

  passForm.appendChild(maskedManIcon)
  passForm.appendChild(passInput)
  passForm.appendChild(submitButton)
  document.body.appendChild(passForm)

  passInput.focus()
}

const getElement = async (selector, options = {}) => {
  const { waitTime = 3, force = false } = options
  let cycleTime = 300
  let watchdog = Math.floor(waitTime * 1000 / cycleTime)
  let element = null

  while(watchdog > 0) {
    watchdog--

    element = document.querySelector(selector)

    if (!element) {
      await new Promise(resolve => setTimeout(resolve, cycleTime))
    } else {
      watchdog = 0
    }
  }

  if (force && !element) {
    throw new Error(`'${selector}' not found`)
  }

  return element
}

const ping = async () =>  {
  while(true) {
    console.log('masked man')
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
}

const letsGo = async () => {
  try {
    ping()

    console.log('looking for masked field pass')
    await getElement('pekao-masked-field-password', {
      force: true,
      waitTime: 10
    })
    console.log('found masked field password')
    showPassForm()
  } catch (e) {
    console.error(e)
  }
}

void letsGo()
