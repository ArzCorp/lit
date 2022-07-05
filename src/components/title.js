import { html, LitElement } from 'lit'

class TitleComponent extends LitElement {
	constructor() {
		super()
		this.title = 'Titulo aqui'
	}

	static get properties() {
		return {
			title: { type: String },
		}
	}

	render() {
		return html`<h2>${this.title}</h2>`
	}
}

customElements.define('title-component', TitleComponent)
