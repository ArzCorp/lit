import { html, render } from '../node_modules/lit-html/lit-html.js'

const template = ({ title }) => {
	return html`
		<div class="container">
			<p>${title}</p>
		</div>
	`
}

render(template({ title: 'Soy un template' }), document.getElementById('app'))
