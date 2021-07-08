Vue.config.devtools = true;

new Vue (
    {
        el:'#app',
        data: {
            emails:[],
        },
        created() {
            getEmail();
        },
        methods:{

            getEmail: function() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                // Nelle arrow function non va la scritta function!!!
                .then((response) => {
                    // Devo pushare l'email all'interno della array in data:
                    // Grazie alla arrow function posso usare .this:
                    for (i = 0; i < 10; i++) {
                        this.emails.push(response.data.response)
                    };
                });
            }



            
        }


    }

)