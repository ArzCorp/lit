import { html, css, LitElement } from 'lit'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ListContainer extends LitElement {
	static get styles() {
		return css`
			:host {
				display: block;
				border: solid 1px gray;
				padding: 16px;
				max-width: 800px;
			}
		`
	}

	static get properties() {
		return {}
	}

	constructor() {
		super()
		this.data = []
	}

	async getData() {
		const response = await fetch(
			'https://db.ygoprodeck.com/api/v7/cardinfo.php'
		)
		const data = await response.json()
		console.log(data)
		this.data = data.data
	}

	connectedCallback() {
		super.connectedCallback()
		this.getData()
	}

	render() {
		console.log(this.data)
		return html`<section>
			${this.data.map(
				(item) => html`<list-element data="${item}"></list-element>`
			)}
		</section> `
	}
}

window.customElements.define('list-container', ListContainer)
