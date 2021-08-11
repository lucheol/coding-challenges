new Vue({
    el: '#app',
    data: {
        content: '',
    },
    methods: {
        autoSave: _.debounce(function () {
            M.toast({html: 'Auto-saving', displayLength: 400});
            this.backendSave(this.content);
        }, 2000),
        backendSave: function(value) {
            setTimeout(function () {
                console.log(value) ;
                M.toast({html: 'Saved', displayLength: 1000});
            }, 1000)
        }
    },

})