import { html, LitElement } from 'lit'
import { Currency } from '../utils/currency'
class WalletComponent extends LitElement {
	constructor() {
		super()
		this.money = 20000
		this.name = 'Wallet'
	}

	static get properties() {
		return {
			money: { type: Number },
			name: { type: String },
			message: { type: String },
		}
	}

	render() {
		return html`
			<style>
				.wallet-title {
					font-weight: 600;
					color: #1e40af;
					margin: 2px 0px;
				}
				.wallet-amount {
					margin: 5px 0px;
				}

				.wallet-amount span {
					font-weight: 600;
					color: ${this.money >= 0 ? '#22c55e' : '#dc2626'};
				}

				.wallet-message {
					background-color: #fef3c7;
					border-radius: 8px;
					padding: 10px 15px;
					color: '#1c1917';
					font-weight: 600px;
				}
			</style>
			<div>
				<h2 class="wallet-title">${this.name}</h2>
				<p class="wallet-amount">
					Disponible: <span>${Currency.mxnFormat(this.money)}</span>
				</p>
				${this.message
					? html`<p class="wallet-message">${this.message}</p>`
					: null}
			</div>
		`
	}

	changeWalletName(name) {
		this.name = name
	}

	removeMessage() {
		const clearMessage = setTimeout(() => {
			this.message = ''
			clearTimeout(clearMessage)
		}, 5000)
	}

	setMessage(message) {
		this.message = message
	}

	deposit(amount) {
		this.money += amount
	}

	Withdrawal(amount) {
		if (this.money >= amount) {
			this.money -= amount
		} else {
			this.setMessage('Saldo insuficiente')
			this.removeMessage()
		}
	}
}

customElements.define('wallet-component', WalletComponent)
