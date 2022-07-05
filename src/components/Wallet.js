import { html, LitElement } from 'lit'
import { Currency } from '../utils/currency'
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
			<style>
				h2 {
					font-weight: 600;
					color: #1e40af;
					margin: 2px 0px;
				}
			</style>
			<div>
				<h2>${this.name}</h2>
				<p>Disponible: ${Currency.mxnFormat(this.money)}</p>
			</div>
		`
	}

	deposit(amount) {
		this.money += amount
	}

	Withdrawal(amount) {
		this.money -= amount
	}
}

customElements.define('wallet-component', WalletComponent)
