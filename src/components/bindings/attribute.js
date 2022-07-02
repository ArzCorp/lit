import { html, render } from '/node_modules/lit-html/lit-html.js'

const bindingsAttribute = ({ text, isVisible }) => html` <div class="container">
	<p>${text}</p>
	<p ?hidden=${!isVisible}>Hola mundo</p>
</div>`

render(
	bindingsAttribute({ text: 'binding attribute', isVisible: ' ' }),
	document.querySelector('#bindings-attribute')
)
