const pekaoButton = document.querySelector('#pekao')

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true }
  const [tab] = await chrome.tabs.query(queryOptions)
  return tab
}


pekaoButton.addEventListener('click', async () => {
  const tab = await getCurrentTab()

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['help.js']
  })
})

document.addEventListener('DOMContentLoaded', async () => {
  const pekaoLoginPageUrl = 'https://www.pekao24.pl/logowanie'

  const tab = await getCurrentTab()
  if (tab.url === pekaoLoginPageUrl) {
    pekaoButton.disabled = false;
  }
})
