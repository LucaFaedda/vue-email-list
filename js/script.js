const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            response: null,
            emailArray: [],
        }
    },
    methods: {
        createEmail(){
            for(let i = 0 ; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                    this.emailArray.push(result.data.response)
                    this.response = result.data.response
                })
                
            }
            console.log(this.emailArray)
            
            
        }
    },
  

}).mount('#app')
