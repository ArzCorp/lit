import { LitElement, html } from 'lit'

class MyPage extends LitElement {
	constructor() {
		super()
		this.text = 'Hello World'
	}

	static properties = {
		text: { type: String },
	}

	render() {
		console.log('Render MyPage')
		return html`
			<p>${this.text}</p>
			<p>${this.name}</p>
			<p>${this.lastName}</p>
		`
	}
}

customElements.define('my-page', MyPage)
