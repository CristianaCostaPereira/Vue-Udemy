const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    
    methods: {
        // So users can toggle the div's and not just set it as activem but also as inactive
        boxSelected(box) {
            if (box === 'A') {
                this.boxASelected = !this.boxASelected; // if box A was selected, was true, it is now false because we added the (!) 
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            } else {
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount('#styling');