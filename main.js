let lastUrl = location.href

function colorLinks() {
  document.querySelectorAll('a').forEach(link => {
    if (link.textContent?.includes('[PITCH]')) {
      link.style.color = '#6e7681'
    }
  })
}

function checkUrlChange() {
  if (location.href !== lastUrl) {
    lastUrl = location.href
    colorLinks()
  }
  requestAnimationFrame(checkUrlChange)
}

colorLinks()

const observer = new MutationObserver(() => {
  colorLinks()
})

observer.observe(document.body, { childList: true, subtree: true })

checkUrlChange()