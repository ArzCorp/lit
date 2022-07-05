import { html, render } from '/node_modules/lit-html/lit-html.js'

const otherTemplate = html`<p>SOY OTRO TEMPLATE</p>`

const bindingTemplate = () =>
	html`<div class="container">Soy template padre ${otherTemplate}</div> `

render(bindingTemplate(), document.querySelector('#bindings-template'))
