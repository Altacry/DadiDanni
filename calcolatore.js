let app = new Vue({
    data:{
        danniBase:"",
    },
    methods:{
        calcolaDanni: function (){
            if(!this.controllaCampi())
                return false;

        },

        controllaCampi: function (){
            if(this.danniBase=="")
                return false;
            if(this.danniBase.search("[0-9+]+")==-1) {
                console.log("non matcha");
                return false;
            }
        },
    },
});