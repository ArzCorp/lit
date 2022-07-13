import { html, LitElement } from 'lit'

class MyComponent extends LitElement {
	constructor() {
		super()
	}

	static properties = {
		myValue: { type: Boolean },
	}

	render() {
		console.log('Render MyComponent:', this.myValue)
		return html`<p></p> `
	}
}

customElements.define('my-component', MyComponent)
