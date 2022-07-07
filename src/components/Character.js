import { html, css, LitElement } from 'lit'

class CharacterComponent extends LitElement {
	constructor() {
		super()
	}

	static styles = css`
		.character {
			padding: 50px;
			background-color: #ecfdf5;
			text-align: center;
			width: min-content;
			border: 1px solid #0f172a;
			border-radius: 8px;
		}
		.character-name {
			color: #0f172a;
			font-weight: 600;
		}
		.character-image {
			border-radius: 100%;
		}
	`

	static get properties() {
		return {
			name: { type: String },
			image: { type: String },
			status: { type: String },
		}
	}

	render() {
		return html`
			<div class="character">
				<p class="character-name">${this.name}</p>
				<img
					class="character-image"
					src=${this.image}
					alt=${`foto de ${this.name}`}
				/>
				<p class="character-status">${this.status}</p>
			</div>
		`
	}
}

customElements.define('character-component', CharacterComponent)
