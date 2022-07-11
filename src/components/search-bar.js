import { html, css, LitElement } from 'lit'

class SearchBar extends LitElement {
	static get properties() {
		return {
			handleSearch: { type: Function },
		}
	}

	static styles = css`
		.search-bar {
			font-weight: bold;
			display: block;
			box-sizing: border-box;
			width: 90%;
			padding: 10px 20px;
			margin: 0 auto;
			margin-top: 20px;
			border: 1px solid green;
		}
	`

	render() {
		console.log(typeof this.handleSearch)
		return html`
			<input
				type="text"
				class="search-bar"
				placeholder=${`Busca por nombre`}
				@keyup=${this.handleSearch}
			/>
		`
	}
}

customElements.define('search-bar', SearchBar)
