import { html, LitElement } from 'lit'

class ListComponent extends LitElement {
	constructor() {
		super()
		this.currentItems = []
		this.items = []

		document.addEventListener('response-api', (items) => {
			this.items = items.detail.results
			this.currentItems = this.items
		})
	}

	static get properties() {
		return {
			items: { type: Array },
			currentItems: { type: Array },
		}
	}

	get itemsLength() {
		return this.currentItems.length
	}

	searchItem({ text, findBy }) {
		const searchResult = this.items.filter((item) =>
			item[findBy].toLowerCase().includes(text.toLowerCase())
		)

		this.currentItems = searchResult
	}

	render() {
		if (this.itemsLength <= 0) return html`<p>Cargando...</p>`
		return html`
			<input
				type="text"
				placeholder=${`(${this.itemsLength}) Buscar por nombre`}
				@keyup=${(e) =>
					this.searchItem({
						text: e.target.value,
						findBy: 'name',
					})}
			/>
			<div>
				${this.currentItems.map(
					(item) => html`<div>
						<p>${item.name}</p>
						<img src=${item.image} alt=${`foto de ${item.name}`} />
						<p>${item.status}</p>
					</div>`
				)}
			</div>
		`
	}
}

customElements.define('list-component', ListComponent)
