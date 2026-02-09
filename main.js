let lastUrl = location.href

function colorLinks() {
  document.querySelectorAll('address a').forEach(link => {
      link.style.color = '#3685f3'
  })

  document.querySelectorAll('a').forEach(link => {
    if (link.textContent?.includes('[PITCH]')) {
      link.style.color = '#6e7681'
    }
    if (link.textContent?.includes('NewsletterOficial')) {
      link.style.color = '#3fb950'
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