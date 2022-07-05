export class Currency {
	constructor() {}

	static mxnFormat(value) {
		return new Intl.NumberFormat('es-mx', {
			currency: 'MXN',
			style: 'currency',
		}).format(value.toFixed(2))
	}
}
