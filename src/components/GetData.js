import { LitElement } from 'lit'

class GetData extends LitElement {
	static get properties() {
		return {
			url: { type: String },
		}
	}

	sendData(data) {
		this.dispatchEvent(
			new CustomEvent('response-api', {
				detail: {
					...data,
				},
				bubbles: true,
				composed: true,
			})
		)
	}

	firstUpdated() {
		this.getData()
	}

	getData() {
		fetch(this.url)
			.then((response) => response.json())
			.then((data) => this.sendData(data))
	}
}

customElements.define('get-data', GetData)
