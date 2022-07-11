import { html, css, LitElement } from 'lit'

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

	static styles = css`
		.list {
			padding: 20px 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: 50px 80px;
		}
	`

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
		return html`
			<search-bar
				.handleSearch=${(e) =>
					this.searchItem({
						text: e.target.value,
						findBy: 'name',
					})}
			/></search-bar>
			<div class="list">
				${this.currentItems.map(
					(item) =>
						html`<character-component
							name=${item.name}
							image=${item.image}
							status=${item.status}
						></character-component>`
				)}
			</div>
		`
	}
}

customElements.define('list-component', ListComponent)
