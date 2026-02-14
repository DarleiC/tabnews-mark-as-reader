let lastUrl = location.href

const regrasTitulos = [
	{ term: "[PITCH]", color: "#6e7681" }, //Rage mark use color #0D1117
	{ term: "Pitch", color: "#6e7681" },
	{ term: "pitch", color: "#6e7681" },
	{ term: "IA", color: "#f8b806" },
	{ term: "AI", color: "#f8b806" },
	{ term: "SaaS", color: "#f80606" }
]

const regrasAutores = [
	{ authorDefault: "authorDefault", color: "#3685f3" },
	{ author: "NewsletterOficial", color: "#3fb950" }
]

function colorLinks() {
	document.querySelectorAll("article a").forEach((link) => {
		const text = link.textContent?.trim()

		if (link.closest("address")) {
			// Links de autor
			const regraAutor = regrasAutores.find((r) => text.includes(r.author))
			if (regraAutor) {
				link.style.color = regraAutor.color
			} else {
				link.style.color = regrasAutores.find((r) => r.authorDefault === "authorDefault").color
			}
		} else {
			// Links de título
			const regraTitulo = regrasTitulos.find((r) => text.includes(r.term))
			if (regraTitulo) {
				link.style.color = regraTitulo.color
			}
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

observer.observe(document.body, {
	childList: true,
	subtree: true
})

checkUrlChange()
