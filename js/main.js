const updates = Vue.createApp({
    data(){
        return{
            name:"vue framework f",
            subscribeText: "Subscribe Now",
            persons:[
                {amount:'$899.99', name:'Strawberry', email:'JohnDoeX@.com', src:'./images/card1.jpg'},
                {amount:'$899.99', name:'Chocolate', email:'JaneDoeX@.com', src:'./images/card2.jpg'},
                {amount:'$899.99', name:'Vanilla', email:'KamsiDoeX@.com', src:'./images/card3.jpg'},
                {amount:'$899.99', name:'Crimson', email:'TochiDoeX@.com', src:'./images/card4.jpg'},
                {amount:'$899.99', name:'Straws', email:'EdieDoeX@.com', src:'./images/card5.jpg'},
                {amount:'$899.99', name:'Strayberry', email:'CaraDoeX@.com', src:'./images/card6.jpg'}
            ],
        };
    },
});

updates.mount("#app");
