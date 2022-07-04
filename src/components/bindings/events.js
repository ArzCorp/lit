import { html, render } from '/node_modules/lit-html/lit-html.js'

const handleClick = () => alert('Hello, world!')

const bindingsEvents = ({ text, className }) => html` <div class=${className}>
	<p>${text}</p>
	<p class="click" @click=${handleClick}>Click me</p>
</div>`

render(
	bindingsEvents({ text: 'Binding event', className: 'container' }),
	document.querySelector('#bindings-events')
)
