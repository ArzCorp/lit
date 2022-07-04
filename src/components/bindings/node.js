import { html, render } from '/node_modules/lit-html/lit-html.js'

const title = () => {
	const p = document.createElement('p')
	p.innerHTML = 'Binding dinamic node'
	return p
}

const bindingsNode = () => html` <div class="container" }>${title()}</div>`

render(bindingsNode(), document.querySelector('#bindings-node'))
