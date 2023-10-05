const MyNameApp ={
    data(){
        return{
            name: "",
            idade:30,
            sexo:"Masculino",
            input_name:"" //input modelo do v-model
        }
    },
    methods: {
        submitForm(e){//não envia o formulario so depois de cair aqui
            e.preventDefault();
            this.name = this.input_name;
            
        }
    },
}
Vue.createApp(MyNameApp).mount("#app");