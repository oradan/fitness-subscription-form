
export const DATA = {
  defaultPlanId:2,
  plans:[
    {
      id: 1,
      name: "default"
    },
    {
      id: 2,
      name: "silver"
    },
    {
      id: 3,
      name: "gold"
    },
    {
      id: 4,
      name: "custom",
    }
  ],
  options:{
    type:{
      id: 11,
      name: "type",
      articles: [{
        id: 111,
        name: "day-time",
        price: 25
      }, {
        id: 112,
        name: "full-time",
        price: 36
      }]
    },
    classes:{
      id: 22,
      name: "classes",
      articles: [{
        id: 222,
        name: "cicling",
        price: 10
      }, {
        id: 211,
        name: "yoga",
        price: 20
      }, {
        id: 212,
        name: "body-pump",
        price: 50
      }, {
        id: 213,
        name: "aerobic",
        price: 70
      }, {
        id: 214,
        name: "trx",
        price: 35
      }]
    },
    accesses:{
      id: 33,
      name: "accesses",
      articles: [{
        id: 333,
        name: "pool-acces",
        price: 66
      }, {
        id: 331,
        name: "spa-acces",
        price: 99
      }]
    },
    personalTrainer:{
      id: 44,
      name: "personal-trainer",
      articles: [{
        id: 444,
        name: "20-hours",
        price: 10
      }, {
        id: 441,
        name: "10-hours",
        price: 20
      }, {
        id: 442,
        name: "5-hours",
        price: 66
      }]
    }
    },
  offers:[
    {name:"pilate-classes",imgUrl:"../assets/img/1-studio-de-pilates.png"},
    {name:"swimming",imgUrl:"../assets/img/clase-de-inot-pentru-copii.png"},
    {name:"cardio-classes",imgUrl:"../assets/img/42-de-studiouri-de-aerobic.png"},
    {name:"relax-area",imgUrl:"../assets/img/zone-de-relaxare.png"},
    {name:"wet-saunas",imgUrl:"../assets/img/saune-umede.png"}
  ]
}

