// export const PLANS = {
//   default: {
//     id: 1,
//     name: "Default"
//   },
//   silver: {
//     id: 2,
//     name: "Silver"
//   },
//   gold: {
//     id: 3,
//     name: "Gold"
//   },
//   custom: {
//     id: 4,
//     name: "Custom",
//     options: {
//       type: {
//         id: 11,
//         name: "Type",
//         articles: [{
//           id: 111,
//           name: "Day Time",
//           price: 25
//         }, {
//           id: 112,
//           name: "Full Time",
//           price: 36
//         }]
//       },
//       classes: {
//         id: 22,
//         name: "Classes",
//         articles: [{
//           id: 222,
//           name: "Cicling",
//           price: 10
//         }, {
//           id: 211,
//           name: "Yoga",
//           price: 20
//         }, {
//           id: 212,
//           name: "Body Pump",
//           price: 50
//         }, {
//           id: 213,
//           name: "Aerobic",
//           price: 70
//         }, {
//           id: 214,
//           name: "TRX",
//           price: 35
//         }]
//       },
//       accesses: {
//         id: 33,
//         name: "Accesses",
//         articles: [{
//           id: 333,
//           name: "Pool Acces",
//           price: 66
//         }, {
//           id: 331,
//           name: "SPA Acces",
//           price: 99
//         }]
//       },
//       personalTrainer:{
//           id:44,
//           name:"Personal Trainer",
//           articles:[{
//               id:444,
//               name:"20 Hours",
//               price:10
//           },{
//             id:441,
//             name:"10 Hours",
//             price:20
//           },{
//             id:442,
//             name:"5 Hours",
//             price:66
//           }]
//       }
//     }
//   }
// }

export const PLANS = [
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
    options: [{
        id: 11,
        name: "Type",
        articles: [{
          id: 111,
          name: "Day Time",
          price: 25
        }, {
          id: 112,
          name: "Full Time",
          price: 36
        }]
      },
      {
        id: 22,
        name: "Classes",
        articles: [{
          id: 222,
          name: "Cicling",
          price: 10
        }, {
          id: 211,
          name: "Yoga",
          price: 20
        }, {
          id: 212,
          name: "Body Pump",
          price: 50
        }, {
          id: 213,
          name: "Aerobic",
          price: 70
        }, {
          id: 214,
          name: "TRX",
          price: 35
        }]
      },
      {
        id: 33,
        name: "Accesses",
        articles: [{
          id: 333,
          name: "Pool Acces",
          price: 66
        }, {
          id: 331,
          name: "SPA Acces",
          price: 99
        }]
      },
      {
        id: 44,
        name: "Personal Trainer",
        articles: [{
          id: 444,
          name: "20 Hours",
          price: 10
        }, {
          id: 441,
          name: "10 Hours",
          price: 20
        }, {
          id: 442,
          name: "5 Hours",
          price: 66
        }]
      }
    ]
  }
]
