import { html, render } from '../node_modules/lit-html/lit-html.js'

const template = () => {
	return html`
		<div class="container">
			<p>Soy un componente</p>
		</div>
	`
}

render(template(), document.getElementById('app'))
