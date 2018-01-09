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

new Vue({
  el: '#keyboard-event-app',
  data:{

  },
  methods:{
    logName: function(){
      console.log('you netered your name');
    },
    logAge: function(){
      console.log('enters your wafe');
    }
  }
})

new Vue({
  el: '#data-bind-app',
  data:{
    name: '',
    age: ''
  },
  methods:{
  }
})

new Vue({
  el: '#computed-app',
  data: {
    age:20,
    a: 0,
    b: 0
  },
  methods: {

  },
  computed:{
    addToA: function(){
      console.log('method a');
      return this.a + this.age;
    },
    addToB: function(){
      console.log('emthod b');
      return this.b + this.age;
    }
  }
})

new Vue({
  el: '#dynamic-css',
  data: {
    available: false,
    nearby: false
  },
   computed: {
     compClasses: function(){
       return {
         available: this.available,
         nearby: this.nearby
       }
     }
   }
})

new Vue({
  el: '#loop-for',
  data:{
    characters: [1,2,3,4,5,6],
    ninjas: [
      {name: 'Rian', age: 24},
      {name: 'Ashik', age: 23},
      {name: 'Manu', age: 22},
      {name: 'Hari', age: 21}
    ]
  },

  methods:{

  },
  computed:{
    
  }
})
