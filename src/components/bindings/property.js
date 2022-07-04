import { html, render } from '/node_modules/lit-html/lit-html.js'

const bindingsProperty = ({ text, className }) => html` <div class=${className}>
	<p .property=${text} id="property">${text}</p>
</div>`

render(
	bindingsProperty({ text: 'Binding property', className: 'container' }),
	document.querySelector('#bindings-property')
)

const getProperty = () => {
	const element = document.querySelector('#property').property
	console.log({ element })
}

getProperty()
