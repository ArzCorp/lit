import { html, render } from '/node_modules/lit-html/lit-html.js'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const showNumbers = numbers.map((number) => html` <li>${number}</li> `)

const bindingsMapTeplate = () => html`
	<ul class="container">
		${showNumbers}
	</ul>
`

render(bindingsMapTeplate(), document.querySelector('#bindings-map-template'))
