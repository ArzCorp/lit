import { LitElement, html } from 'lit'

import './my-component.js'
class MyPage extends LitElement {
	constructor() {
		super()
		this.value = 'Titulo aqui'
	}

	static properties = {
		value: { type: String },
	}

	render() {
		return html`<div>
			<my-component myValue=${null}></my-component>
		</div> `
	}
}

customElements.define('my-page', MyPage)
