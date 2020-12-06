new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('botao clicado')
        },
        atualizarValor(event) {
            this.valor = event.target.value
        }
    }
})