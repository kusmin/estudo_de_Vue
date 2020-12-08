new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classeCSS: 'azul',
		classe: '',
		verdadeiro: true,
		classe2: {
			width: '300px',
			height: '400px',
		},
		cor2: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 3000)
		},
		iniciarProgresso() {

		},
		setVerdadeiro(event) {
			if(event.target.value == "true"){
				this.verdadeiro = true
			}else if(event.target.value == "false"){
				this.verdadeiro = false
			}
		}
	}
})
