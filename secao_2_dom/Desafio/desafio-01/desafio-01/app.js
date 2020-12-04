new Vue ({
    el: '#desafio',
    data:{
        nome: 'Renan Ribeiro Lage',
        idade: 29,
        link: 'https://cdnbr3.img.sputniknews.com/img/1292/38/12923847_0:183:1064:759_1000x0_80_0_1_58f287cc4c0a173f61d5a434135985f0.jpg.webp'
    },
    methods: {
        multiplicar: function() {
            return this.idade * 3;
        },
        randomico: function(){
            return Math.random();
        },
        alterarNome(event) {
            this.nome = event.target.value
        }
    }
});