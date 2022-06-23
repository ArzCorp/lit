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
			ul {
				max-width: 800px;
				margin: 0px auto;
				padding: 10px 20px;
				background-color: #e5e7eb;
				list-style: none;
				display: flex;
				flex-direction: column;
				gap: 20px;
			}
		`
	}

	static get properties() {
		return {
			data: { type: Array },
		}
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
			<ul>
				${this.data.map(
					(item) => html`<list-element name="${item.name}"></list-element>`
				)}
			</ul>
		</section> `
	}
}

window.customElements.define('list-container', ListContainer)
