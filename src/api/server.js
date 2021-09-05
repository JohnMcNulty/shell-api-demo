// src/server.js
import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      date: Model,
      meter: Model,
      energyType: Model
    },

    seeds(server) {

    },

    routes() {
      this.namespace = "api"

      this.get("/meter", () => { //BAR CHART
        return {
          meter: [
            { "meterCode": "214612653", "valueMinimum": -21.88, "valueMedian": 1.89, "valueMaximum": 250.339996 },
            { "meterCode": "214612534", "valueMinimum": 0, "valueMedian": 0, "valueMaximum": 0 },
            { "meterCode": "210095893", "valueMinimum": 0, "valueMedian": 1.25, "valueMaximum": 4.6 },
            { "meterCode": "212621678", "valueMinimum": 100, "valueMedian": 151.05, "valueMaximum": 199.7 },
            { "meterCode": "214667141", "valueMinimum": 100.2, "valueMedian": 149.65, "valueMaximum": 199.5 },
            { "meterCode": "212621147", "valueMinimum": 100.3, "valueMedian": 146.55, "valueMaximum": 199.7 }
          ],
        }
      })

      this.get("/energyType", () => { // BAR CHART
        return {
          energyType: [{ "energyDataType": "Phase Angle B", "valueMinimum": -12.05, "valueMedian": 24.13, "valueMaximum": 34.42 },
          { "energyDataType": "Phase Angle C", "valueMinimum": -8.87, "valueMedian": 7.29, "valueMaximum": 38.77 },
          { "energyDataType": "Phase Angle A", "valueMinimum": -21.88, "valueMedian": 21.205, "valueMaximum": 30.75 },
          { "energyDataType": "Voltage Phase C Min", "valueMinimum": 0, "valueMedian": 239.8450015, "valueMaximum": 244.399994 },
          { "energyDataType": "Voltage Phase C Max", "valueMinimum": 241.699997, "valueMedian": 243.2649995, "valueMaximum": 246.740005 },
          { "energyDataType": "Reactive Power Total (vars)", "valueMinimum": -0.02553, "valueMedian": 0.15724, "valueMaximum": 0.53298 },
          { "energyDataType": "Apparant Power Total (VA)", "valueMinimum": 0.14499, "valueMedian": 0.524815, "valueMaximum": 1.10374 },
          { "energyDataType": "Active Power Total (Watts)", "valueMinimum": 0.13478, "valueMedian": 0.48908, "valueMaximum": 0.95671 },
          { "energyDataType": "Current Total", "valueMinimum": 0.2, "valueMedian": 0.715, "valueMaximum": 1.52 },
          { "energyDataType": "Voltage Total", "valueMinimum": 218.14, "valueMedian": 243.79, "valueMaximum": 247.88 },
          { "energyDataType": "Voltage Phase B Max", "valueMinimum": 244.339996, "valueMedian": 246.3949965, "valueMaximum": 250.339996 },
          { "energyDataType": "Current Phase B Min", "valueMinimum": 0, "valueMedian": 0.58, "valueMaximum": 1.24 },
          { "energyDataType": "Current Phase B Max", "valueMinimum": 0.06, "valueMedian": 0.7, "valueMaximum": 2.17 },
          { "energyDataType": "Current Phase A Max", "valueMinimum": 0.15, "valueMedian": 0.865, "valueMaximum": 3.7 },
          { "energyDataType": "TOU CH1 Export Wh Total", "valueMinimum": 0.0587, "valueMedian": 2.8984, "valueMaximum": 3.8145 },
          { "energyDataType": "Current Phase A Min", "valueMinimum": 0, "valueMedian": 0.81, "valueMaximum": 1.35 },
          { "energyDataType": "Voltage Phase A Max", "valueMinimum": 244.539993, "valueMedian": 245.994995, "valueMaximum": 249.910004 },
          { "energyDataType": "Voltage Phase B Min", "valueMinimum": 0, "valueMedian": 243.18, "valueMaximum": 248.149994 },
          { "energyDataType": "Voltage Phase A Min", "valueMinimum": 0, "valueMedian": 242.095001, "valueMaximum": 246.880005 },
          { "energyDataType": "Current Phase C Min", "valueMinimum": 0, "valueMedian": 0.61, "valueMaximum": 1.49 },
          { "energyDataType": "Current Phase C Max", "valueMinimum": 0.37, "valueMedian": 0.855, "valueMaximum": 2.58 },
          { "energyDataType": "Import Wh Total", "valueMinimum": 0, "valueMedian": 109.55, "valueMaximum": 199.7 },
          { "energyDataType": "Import varh Total", "valueMinimum": 0, "valueMedian": 109.1, "valueMaximum": 198.7 },
          { "energyDataType": "Export Wh Total", "valueMinimum": 0, "valueMedian": 111.8, "valueMaximum": 198.9 },
          { "energyDataType": "Export varh Total", "valueMinimum": 0, "valueMedian": 111.65, "valueMaximum": 199.7 }
          ],
        }
      })

      this.get("/date", () => { // LINE CHART
        return {
          date: [
            { "recordDate": "20180907", "valueMinimum": -21.88, "valueMedian": 1.89, "valueMaximum": 250.339996 },
            { "recordDate": "20180906", "valueMinimum": 0, "valueMedian": 0, "valueMaximum": 0 },
            { "recordDate": "20150907", "valueMinimum": 0, "valueMedian": 0, "valueMaximum": 0 },
            { "recordDate": "20180831", "valueMinimum": 0, "valueMedian": 1.25, "valueMaximum": 4.6 },
            { "recordDate": "20150901", "valueMinimum": 0, "valueMedian": 1.35, "valueMaximum": 4.2 },
            { "recordDate": "20180912", "valueMinimum": 100, "valueMedian": 150.55, "valueMaximum": 199.7 },
            { "recordDate": "20180911", "valueMinimum": 100.2, "valueMedian": 147.55, "valueMaximum": 197.8 },
            { "recordDate": "20180913", "valueMinimum": 101, "valueMedian": 146.75, "valueMaximum": 199.6 },
            { "recordDate": "20180914", "valueMinimum": 100.8, "valueMedian": 145.95, "valueMaximum": 192.1 }
          ],
        }
      })

    },
  })

  return server
}



// /*
// This is a dummy API using MirageJS
// */

// import { createServer } from "miragejs"


// //export function makeServer({ environment = "test" } = {}) {
// export function makeServer() {
//     let server = createServer({
//         routes() {
//             this.namespace = "api"

//             this.get("/date", () => {
//                 return {
//                     date: [
//                         {
//                             "recordDate": "20180907",
//                             "valueMinimum": -21.88,
//                             "valueMedian": 1.89,
//                             "valueMaximum": 250.339996
//                         },
//                         {
//                             "recordDate": "20180906",
//                             "valueMinimum": 0,
//                             "valueMedian": 0,
//                             "valueMaximum": 0
//                         },
//                         {
//                             "recordDate": "20150907",
//                             "valueMinimum": 0,
//                             "valueMedian": 0,
//                             "valueMaximum": 0
//                         },
//                         {
//                             "recordDate": "20180831",
//                             "valueMinimum": 0,
//                             "valueMedian": 1.25,
//                             "valueMaximum": 4.6
//                         },
//                         {
//                             "recordDate": "20150901",
//                             "valueMinimum": 0,
//                             "valueMedian": 1.35,
//                             "valueMaximum": 4.2
//                         },
//                         {
//                             "recordDate": "20180912",
//                             "valueMinimum": 100,
//                             "valueMedian": 150.55,
//                             "valueMaximum": 199.7
//                         },
//                         {
//                             "recordDate": "20180911",
//                             "valueMinimum": 100.2,
//                             "valueMedian": 147.55,
//                             "valueMaximum": 197.8
//                         },
//                         {
//                             "recordDate": "20180913",
//                             "valueMinimum": 101,
//                             "valueMedian": 146.75,
//                             "valueMaximum": 199.6
//                         },
//                         {
//                             "recordDate": "20180914",
//                             "valueMinimum": 100.8,
//                             "valueMedian": 145.95,
//                             "valueMaximum": 192.1
//                         }
//                     ],
//                 }
//             })

//             this.get("/energyType", () => {
//                 return {
//                     energyType: [
//                         {
//                             "energyDataType": "Phase Angle B",
//                             "valueMinimum": -12.05,
//                             "valueMedian": 24.13,
//                             "valueMaximum": 34.42
//                         },
//                         {
//                             "energyDataType": "Phase Angle C",
//                             "valueMinimum": -8.87,
//                             "valueMedian": 7.29,
//                             "valueMaximum": 38.77
//                         },
//                         {
//                             "energyDataType": "Phase Angle A",
//                             "valueMinimum": -21.88,
//                             "valueMedian": 21.205,
//                             "valueMaximum": 30.75
//                         },
//                         {
//                             "energyDataType": "Voltage Phase C Min",
//                             "valueMinimum": 0,
//                             "valueMedian": 239.8450015,
//                             "valueMaximum": 244.399994
//                         },
//                         {
//                             "energyDataType": "Voltage Phase C Max",
//                             "valueMinimum": 241.699997,
//                             "valueMedian": 243.2649995,
//                             "valueMaximum": 246.740005
//                         },
//                         {
//                             "energyDataType": "Reactive Power Total (vars)",
//                             "valueMinimum": -0.02553,
//                             "valueMedian": 0.15724,
//                             "valueMaximum": 0.53298
//                         },
//                         {
//                             "energyDataType": "Apparant Power Total (VA)",
//                             "valueMinimum": 0.14499,
//                             "valueMedian": 0.524815,
//                             "valueMaximum": 1.10374
//                         },
//                         {
//                             "energyDataType": "Active Power Total (Watts)",
//                             "valueMinimum": 0.13478,
//                             "valueMedian": 0.48908,
//                             "valueMaximum": 0.95671
//                         },
//                         {
//                             "energyDataType": "Current Total",
//                             "valueMinimum": 0.2,
//                             "valueMedian": 0.715,
//                             "valueMaximum": 1.52
//                         },
//                         {
//                             "energyDataType": "Voltage Total",
//                             "valueMinimum": 218.14,
//                             "valueMedian": 243.79,
//                             "valueMaximum": 247.88
//                         },
//                         {
//                             "energyDataType": "Voltage Phase B Max",
//                             "valueMinimum": 244.339996,
//                             "valueMedian": 246.3949965,
//                             "valueMaximum": 250.339996
//                         },
//                         {
//                             "energyDataType": "Current Phase B Min",
//                             "valueMinimum": 0,
//                             "valueMedian": 0.58,
//                             "valueMaximum": 1.24
//                         },
//                         {
//                             "energyDataType": "Current Phase B Max",
//                             "valueMinimum": 0.06,
//                             "valueMedian": 0.7,
//                             "valueMaximum": 2.17
//                         },
//                         {
//                             "energyDataType": "Current Phase A Max",
//                             "valueMinimum": 0.15,
//                             "valueMedian": 0.865,
//                             "valueMaximum": 3.7
//                         },
//                         {
//                             "energyDataType": "TOU CH1 Export Wh Total",
//                             "valueMinimum": 0.0587,
//                             "valueMedian": 2.8984,
//                             "valueMaximum": 3.8145
//                         },
//                         {
//                             "energyDataType": "Current Phase A Min",
//                             "valueMinimum": 0,
//                             "valueMedian": 0.81,
//                             "valueMaximum": 1.35
//                         },
//                         {
//                             "energyDataType": "Voltage Phase A Max",
//                             "valueMinimum": 244.539993,
//                             "valueMedian": 245.994995,
//                             "valueMaximum": 249.910004
//                         },
//                         {
//                             "energyDataType": "Voltage Phase B Min",
//                             "valueMinimum": 0,
//                             "valueMedian": 243.18,
//                             "valueMaximum": 248.149994
//                         },
//                         {
//                             "energyDataType": "Voltage Phase A Min",
//                             "valueMinimum": 0,
//                             "valueMedian": 242.095001,
//                             "valueMaximum": 246.880005
//                         },
//                         {
//                             "energyDataType": "Current Phase C Min",
//                             "valueMinimum": 0,
//                             "valueMedian": 0.61,
//                             "valueMaximum": 1.49
//                         },
//                         {
//                             "energyDataType": "Current Phase C Max",
//                             "valueMinimum": 0.37,
//                             "valueMedian": 0.855,
//                             "valueMaximum": 2.58
//                         },
//                         {
//                             "energyDataType": "Import Wh Total",
//                             "valueMinimum": 0,
//                             "valueMedian": 109.55,
//                             "valueMaximum": 199.7
//                         },
//                         {
//                             "energyDataType": "Import varh Total",
//                             "valueMinimum": 0,
//                             "valueMedian": 109.1,
//                             "valueMaximum": 198.7
//                         },
//                         {
//                             "energyDataType": "Export Wh Total",
//                             "valueMinimum": 0,
//                             "valueMedian": 111.8,
//                             "valueMaximum": 198.9
//                         },
//                         {
//                             "energyDataType": "Export varh Total",
//                             "valueMinimum": 0,
//                             "valueMedian": 111.65,
//                             "valueMaximum": 199.7
//                         }
//                     ],
//                 }
//             })

//             this.get("/meter", () => {
//                 return {
//                     meter: [
//                         { "meterCode": "214612653", "valueMinimum": -21.88, "valueMedian": 1.89, "valueMaximum": 250.339996 },
//                         { "meterCode": "214612534", "valueMinimum": 0, "valueMedian": 0, "valueMaximum": 0 },
//                         { "meterCode": "210095893", "valueMinimum": 0, "valueMedian": 1.25, "valueMaximum": 4.6 },
//                         { "meterCode": "212621678", "valueMinimum": 100, "valueMedian": 151.05, "valueMaximum": 199.7 },
//                         { "meterCode": "214667141", "valueMinimum": 100.2, "valueMedian": 149.65, "valueMaximum": 199.5 },
//                         { "meterCode": "212621147", "valueMinimum": 100.3, "valueMedian": 146.55, "valueMaximum": 199.7 }
//                     ],
//                 }
//             })

//         },
//     })

//     return server;
// }