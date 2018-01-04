new Vue({
  el: '#vue-app',
  data: {
    name: 'Ashik',
    age: '25',
    job: 'Ninja',
    website: 'https://www.google.co.in/',
    websiteTag: '<a href="https://www.google.co.in/"> Google Site</a>'
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time  + ' ' + this.name;
    }
  }
});

new Vue({
  el: '#vue-data-bind',
  data: {
    age: 26,
    x: 0,
    y: 0
  },
  methods: {
    addYear: function(increment){
      this.age += increment;
    },
    substractYear: function(increment){
      this.age -= increment;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY; 
    }
  }
});
