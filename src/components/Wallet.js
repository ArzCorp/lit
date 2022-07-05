import { html, LitElement } from 'lit'

class WalletComponent extends LitElement {
	constructor() {
		super()
		this.money = 0
		this.name = 'Wallet'
	}

	static get properties() {
		return {
			money: { type: Number },
			name: { type: String },
		}
	}

	render() {
		return html`
			<div>
				<h2>${this.name}</h2>
				<p><b>Disponible:</b> ${this.money}</p>
			</div>
		`
	}

	firstUpdated() {}

	deposit(amount) {
		this.money += amount
	}

	Withdrawal(amount) {
		this.money -= amount
	}
}

customElements.define('wallet-component', WalletComponent)
