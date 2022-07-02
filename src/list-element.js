import { html, css, LitElement } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ListElement extends LitElement {
	static get styles() {
		return css`
			li {
				background-color: white;
				display: block;
				border: solid 1px gray;
				padding: 16px;
				max-width: 800px;
			}
		`
	}

	static get properties() {
		return {
			name: { type: String },
		}
	}

	constructor() {
		super()
	}

	render() {
		return html`<li>${this.name}</li> `
	}
}

window.customElements.define('list-element', ListElement)
