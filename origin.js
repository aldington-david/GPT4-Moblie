// ==UserScript==
// @name        Use GPT-4 Mobile
// @namespace   NijikaMyWaifu
// @match       *://chat.openai.com/*
// @grant       none
// @version     1.0
// @author      NijikaMyWaifu
// ==/UserScript==

(() => {
    let replaceFetch = localStorage.getItem('replaceFetch') !== 'false'

    const origFetch = window.fetch
    window.fetch = async function (resource, options) {
        if (replaceFetch && resource === "https://chat.openai.com/backend-api/conversation") {
            const body = JSON.parse(options.body)
            body.model = "gpt-4-mobile"
            options = { ...options, body: JSON.stringify(body) }
        }
        return origFetch.apply(this, arguments)
    }

    // Create a checkbox to control whether to replace fetch
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = 'replaceFetchCheckbox'
    checkbox.checked = replaceFetch
    checkbox.addEventListener('change', (event) => {
        replaceFetch = event.target.checked
        localStorage.setItem('replaceFetch', replaceFetch)
    })

    const label = document.createElement('label')
    label.htmlFor = 'replaceFetchCheckbox'
    label.appendChild(document.createTextNode('Use GPT-4 Mobile'))

    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.bottom = '0'
    container.style.left = '50%'
    container.style.transform = 'translateX(-50%)'
    container.appendChild(checkbox)
    container.appendChild(label)

    // Observe DOM changes and add the checkbox when the main element appears
    const observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const mainElement = document.querySelector('main')
                if (mainElement && !mainElement.contains(container)) {
                    mainElement.style.position = 'relative'
                    mainElement.appendChild(container)
                    break
                }
            }
        }
    })

    observer.observe(document.body, { childList: true, subtree: true })
})()
