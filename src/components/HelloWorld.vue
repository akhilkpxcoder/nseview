<template>
<div>
  <vue-suggestion
    :items="items"
    v-model="item"
    :setLabel="setLabel"
    @changed="inputChange"
    @selected="itemSelected"
  >
  </vue-suggestion>
  <div>
   <li v-for="item in this.items" :key="item">{{item}}</li>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item: {},
      items: [],
    };
  },
  methods: {
    itemSelected(item) {
      this.item = item;
    },
    Itemlist(list){
      console.log(list);
     let i =0;
     while(i<list.length)
     {
          console.log(list[i].Name);
      this.items.push(list[i].Name);
      
      i++;
    
   
  
     }
      console.log(this.items);
    },
    setLabel(item) {
      return item.name;
    },
    inputChange(text) {
      this.items=[];
      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      axios
        .get(`http://localhost:3001/stock/${text}`)
        .then((response) => (this.Itemlist(response.data)));
      
      // your search method
      //this.items = this.items.filter((item) => item.name.indexOf(text) > -1);
      // now `items` will be showed in the suggestion list
    }, 
  },
};
</script>