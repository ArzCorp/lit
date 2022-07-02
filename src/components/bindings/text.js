import { html, render } from '/node_modules/lit-html/lit-html.js'

const bindingsText = ({ text }) => html`<div>
	<p class="container">${text}</p>
</div>`

render(
	bindingsText({ text: 'Soy un texto' }),
	document.querySelector('#bindings-text')
)
