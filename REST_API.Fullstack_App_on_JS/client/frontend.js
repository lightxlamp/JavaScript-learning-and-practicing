import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

Vue.component('loader', {
    template: `
        <div style="display: flex; justify-content: center; align-items: center; ">
            <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
     `
})

new Vue({
    el: '#app',
    data () {
        return {
            form: {
                name: '',
                value: ''
            },
            isDataLoading: false,
            contacts: []
        }
    },

    computed: {
        isDataValid() {
            // trim() защитит от пробелов ) ... Капара на таком ловил в Highlanders :)
            return this.form.value.trim() && this.form.name.trim();
        }
    },
        
    methods: {
        async  createContact() {
            // console.log(this.form);
            const {...contact} = this.form // destructuring and rest operator :P Я их уже понимаю ) 
            // console.log(contact) 
            const response = await request('api/contacts', 'POST', contact)
            console.log(response)

            //this.contacts.push({...contact, id: Date.now(), isMarked: false}); 
            this.contacts.push(contact); 
            // this.form.name = this.form.value = '' // Clear fields after submit
        },

        async markContact(id) {
            // console.log(id);
            const contact = this.contacts.find(c => c.id === id) 
            const updatedContact = await request(`/api/contacts/${id}`, 'PUT', {
                ...contact, 
                isMarked: true
            }) 
            contact.isMarked = updatedContact.isMarked;
        },

        async deleteContact(id) {
            await request(`/api/contacts/${id}`, 'DELETE') // удаляем на сервере
            this.contacts = this.contacts.filter(c => c.id !== id) // удаляем на фронте
        },
    },
    async mounted () {
        console.log('Mounted');
        this.isDataLoading = true;
        const dataFromDB = await request('/api/contacts')
        console.log('data', dataFromDB);
        this.contacts = dataFromDB;
        this.isDataLoading = false;
    } 
})

// Async / Await - синтаксический сахар, оторый удобнее нам позволяет взаимодействовать с Promise'ами 
async function request(url, method = 'GET', data = null) {
     try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json' 
            body = JSON.stringify(data)
        }

        // метод встроенный в браузер... для AJAX запросов      
        const response = await fetch(url, {method, headers, body  }) 

        return await response.json(); 
     }
     catch(e) {
        console.warn('Error', e.message )
     }
}

