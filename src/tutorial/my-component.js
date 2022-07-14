import { html, LitElement } from 'lit'

class MyComponent extends LitElement {
	constructor() {
		super()
		this._text = 'Este es un componente'
	}

	static properties = {
		_text: { state: true },
	}

	render() {
		return html`<p>${this._text}</p> `
	}
}

customElements.define('my-component', MyComponent)
