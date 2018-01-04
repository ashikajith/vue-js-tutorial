new Vue({
  el: '#vue-app',
  data: {
    name: 'Ashik',
    job: 'Ninja'
  },

  methods: {
    greet: function (time) {
      return 'Good ' + time  + ' ' + this.name;
    }
  }
});
