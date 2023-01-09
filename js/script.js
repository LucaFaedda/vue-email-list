const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            response: null,
        }
    },
    methods: {
        createEmail(){
            for(i = 1 ; i<11; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                    this.response = result.data.response
                    console.log(this.response)
                  
                })

            }

        }
    },
  

}).mount('#app')
