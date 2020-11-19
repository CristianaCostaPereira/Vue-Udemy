const app = Vue.createApp({
    data() {
        return {
            // Store the user input
            userInput: '',
            visibleParagraph: true,
        }
    },

    // Because we added more classes
    computed: {
        paragraphClasses() {
            return {
                user1: this.userInput === 'user1',
                user2: this.userInput === 'user2',
                visible: this.visibleParagraph,
                hidden: !this.visibleParagraph
            };
        },
    },

    // We want to change this property on every click
    methods: {
        toggleVisible() {
            this.visibleParagraph = !this.visibleParagraph
        }
    }
});

app.mount('#assignment');