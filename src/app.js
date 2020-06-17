import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
      data: {
        exchange: [],

      },
      mounted(){
        this.fetchExchange();

      // },
      // computed: {
      // exchange: function(){
      //   return this.allCountries.reduce((runningTotal, total) => {
      //     return runningTotal + total.population
      //   }, 0)
      // },
    },
    methods: {
      fetchExchange: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.exchange = data)
        console.log(this.exchange);
      },
    }
    })
  })
