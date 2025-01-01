// import { ApexOptions } from "apexcharts"

// export const chartOptions1: ApexOptions = {
//   chart: {
//     id: "stepline-chart",
//     type: "line",
//     toolbar: {
//       show: false,
//     },
//     animations: {
//       enabled: true,
//     },
//   },
//   stroke: {
//     curve: "stepline",
//     width: 2,
//     colors: ["#afafaf"],
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   markers: {
//     size: 4,
//     colors: ["#fefefe"],
//     strokeColors: "#006e7e",
//     strokeWidth: 2,
//     hover: {
//       sizeOffset: 6,
//     },
//   },
//   grid: {
//     show: false,
//   },
//   xaxis: {
//     categories: [],
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   tooltip: {
//     enabled: false,
//   },
//   title: {
//     text: undefined,
//   },
// }

// export const chartSeries1 = [
//   {
//     name: "",
//     data: [10, 20, 15, 30, 25],
//   },
// ]

// export const chartOptions2: ApexOptions = {
//   chart: {
//     type: "bar",
//     toolbar: {
//       show: false,
//     },
//     animations: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       distributed: true, // Ensure that each bar gets a different color
//     },
//   },
//   grid: {
//     show: false,
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   xaxis: {
//     categories: [], // Add appropriate categories here if needed
//     labels: {
//       show: false,
//     },
//     axisBorder: {
//       show: false,
//     },
//     axisTicks: {
//       show: false,
//     },
//   },
//   yaxis: {
//     show: false,
//   },
//   tooltip: {
//     enabled: false,
//   },
//   legend: {
//     show: false, // Hide the legend
//   },
//   title: {
//     text: undefined,
//   },
//   colors: ["#131437", "#4c4e7c"], // Set colors for the series to remove gray areas
// }

// export const chartSeries2 = [
//   {
//     name: "Series 1", // Add meaningful names or leave as an empty string if not needed
//     data: [10, 20, 15, 30, 25],
//   },
//   {
//     name: "Series 2",
//     data: [10, 20, 15, 30, 25],
//   },
// ]

// export const chartOptions3: ApexOptions = {
//   chart: {
//     type: "bar",
//     toolbar: {
//       show: false,
//     },
//     animations: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true, // Bars are horizontal
//     },
//   },
//   stroke: {
//     width: 1, // Width of the line separating each bar
//     colors: ["#78c4d4"], // Set the color of the line separating each bar
//   },
//   dataLabels: {
//     enabled: false, // Disable data labels on bars
//   },
//   xaxis: {
//     categories: [],
//     labels: {
//       show: false, // Hide labels on the x-axis
//     },
//     axisBorder: {
//       show: false, // Hide the axis border
//     },
//     axisTicks: {
//       show: false, // Hide ticks on x-axis
//     },
//   },
//   grid: {
//     xaxis: {
//       lines: {
//         show: false, // Hide grid lines on x-axis
//       },
//     },
//   },
//   yaxis: {
//     reversed: false, // Do not reverse the order of the y-axis
//     labels: {
//       show: false, // Hide labels on the y-axis
//     },
//     axisTicks: {
//       show: false, // Hide ticks on y-axis
//     },
//   },
//   legend: {
//     show: false, // Hide the legend
//   },
//   colors: ["#4a7fce"],
// }

// export const chartSeries3 = [
//   {
//     data: [10, 20, 15, 30, 25], // Data points for the bars
//   },
// ]

// export const chartSeries4 = [
//   {
//     name: "Funnel Series",
//     data: [1380, 1100, 990, 880, 740, 548, 330],
//   },
// ]

// export const chartOptions4: ApexOptions = {
//   chart: {
//     type: "bar",
//     toolbar: {
//       show: false,
//     },
//     animations: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 0,
//       horizontal: true,
//       barHeight: "80%",
//       isFunnel: true,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   xaxis: {
//     categories: [], // Your categories go here
//   },
//   fill: {
//     type: "gradient",
//     gradient: {
//       shade: "light",
//       type: "vertical",
//       shadeIntensity: 0.5,
//       gradientToColors: ["#f9c416", "#f9c416"], // Ensure both colors are the same
//       inverseColors: false, // Set this to false if not using inverse colors
//       opacityFrom: 1,
//       opacityTo: 1,
//       stops: [0, 100],
//     },
//   },
//   legend: {
//     show: false,
//   },
//   colors: ["#f9c416"], // Ensure the bar color is also set to yellow
// }

// export const chartOptions5: ApexOptions = {
//   chart: {
//     type: "bar",
//     toolbar: {
//       show: false,
//     },
//     animations: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 10,
//       columnWidth: "50%",
//     },
//   },
//   dataLabels: {
//     enabled: false, // Disables data labels
//   },
//   stroke: {
//     width: 0, // No stroke around bars
//   },
//   grid: {
//     show: false, // Hide the grid background
//   },
//   xaxis: {
//     labels: {
//       show: false, // Hide x-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the x-axis line
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on x-axis
//     },
//   },
//   yaxis: {
//     labels: {
//       show: false, // Hide y-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the y-axis line
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on y-axis
//     },
//   },
//   fill: {
//     type: "gradient", // Use gradient fill
//     gradient: {
//       shade: "light",
//       type: "vertical", // Gradient direction (vertical for top-to-bottom)
//       shadeIntensity: 0.5,
//       gradientToColors: ["#4a7fce"], // Second color in gradient
//       inverseColors: false,
//       opacityFrom: 0.9,
//       opacityTo: 0.9,
//       stops: [0, 100], // Start at first color, end at second color
//     },
//   },
// }

// export const chartSeries5 = [
//   {
//     data: [44, 55, 41, 67], // Data points for the bars
//   },
// ]

// export const chartOptions6: ApexOptions = {
//   chart: {
//     height: 350,
//     type: "rangeBar",
//     zoom: {
//       enabled: false, // Disable zooming
//     },
//     toolbar: {
//       show: false, // Hide the toolbar
//     },
//     animations: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       isDumbbell: true,
//       columnWidth: "5%", // Adjust the width of the bars
//       dumbbellColors: [["#4c4e7c", "#f9c416"]], // Specify two colors for the dumbbell ends
//     },
//   },
//   legend: {
//     show: false, // Hide the legend
//   },
//   fill: {
//     type: "solid", // Use a solid fill
//     colors: ["#131437"], // Specify the solid color
//   },
//   grid: {
//     show: false, // Hide grid lines
//   },
//   xaxis: {
//     labels: {
//       show: false, // Hide x-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the x-axis border
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on x-axis
//     },
//     tickPlacement: "on",
//   },
//   yaxis: {
//     labels: {
//       show: false, // Hide y-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the y-axis border
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on y-axis
//     },
//   },
//   tooltip: {
//     enabled: false, // Disable tooltips
//   },
// }

// export const chartSeries6 = [
//   {
//     data: [
//       {
//         x: "2008",
//         y: [2800, 6500],
//       },
//       {
//         x: "2009",
//         y: [3200, 6100],
//       },
//       {
//         x: "2010",
//         y: [2950, 7800],
//       },
//       {
//         x: "2011",
//         y: [3000, 5600],
//       },
//     ],
//   },
// ]

// export const chartOptions7: ApexOptions = {
//   chart: {
//     height: 350,
//     type: "rangeBar",
//     toolbar: {
//       show: false, // Hide the toolbar
//     },
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true, // Horizontal bars
//       colors: {
//         ranges: [
//           { from: new Date("2019-01-02").getTime(), to: new Date("2019-10-04").getTime(), color: "#4a7fce" }, // First bar color
//           { from: new Date("2019-04-04").getTime(), to: new Date("2019-12-08").getTime(), color: "#4a7fce" }, // Second bar color
//           { from: new Date("2019-06-08").getTime(), to: new Date("2020-03-12").getTime(), color: "#4a7fce" }, // Third bar color
//           { from: new Date("2019-08-12").getTime(), to: new Date("2020-05-18").getTime(), color: "#4a7fce" }, // Fourth bar color
//         ],
//       },
//     },
//   },
//   xaxis: {
//     type: "datetime", // X-axis based on datetime
//     labels: {
//       show: false, // Hide x-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the x-axis border
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on x-axis
//     },
//   },
//   yaxis: {
//     labels: {
//       show: false, // Hide y-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the y-axis border
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on y-axis
//     },
//   },
//   grid: {
//     show: false, // Hide grid lines
//   },
//   legend: {
//     show: false, // Hide the legend
//   },
//   tooltip: {
//     enabled: false, // Disable tooltips
//   },
//   fill: {
//     type: "solid", // Solid fill for bars
//   },
// }

// export const chartSeries7 = [
//   {
//     data: [
//       {
//         x: "Code",
//         y: [new Date("2019-01-02").getTime(), new Date("2019-10-04").getTime()],
//       },
//       {
//         x: "Test",
//         y: [new Date("2019-04-04").getTime(), new Date("2019-12-08").getTime()],
//       },
//       {
//         x: "Validation",
//         y: [new Date("2019-06-08").getTime(), new Date("2020-03-12").getTime()],
//       },
//       {
//         x: "Deployment",
//         y: [new Date("2019-08-12").getTime(), new Date("2020-05-18").getTime()],
//       },
//     ],
//   },
// ]

// export const chartOptions8: ApexOptions = {
//   chart: {
//     height: 350,
//     type: "rangeBar",
//     zoom: {
//       enabled: false, // Disable zooming
//     },
//     toolbar: {
//       show: false, // Hide the toolbar
//     },
//     animations: {
//       enabled: true,
//     },
//   },
//   plotOptions: {
//     bar: {
//       isDumbbell: true,
//       columnWidth: "5%", // Adjust the width of the bars
//       dumbbellColors: [["#78c4d4", "#4a7fce"]], // Specify two colors for the dumbbell ends
//     },
//   },
//   legend: {
//     show: false, // Hide the legend
//   },
//   fill: {
//     type: "gradient",
//     gradient: {
//       type: "horizontal",
//       gradientToColors: ["#4a7fce"], // Gradient color
//       inverseColors: true,
//       stops: [0, 50], // Gradient stops
//     },
//   },
//   grid: {
//     show: false, // Hide grid lines
//   },
//   xaxis: {
//     labels: {
//       show: false, // Hide x-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the x-axis border
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on x-axis
//     },
//     tickPlacement: "on",
//   },
//   yaxis: {
//     labels: {
//       show: false, // Hide y-axis labels
//     },
//     axisBorder: {
//       show: false, // Hide the y-axis border
//     },
//     axisTicks: {
//       show: false, // Hide the ticks on y-axis
//     },
//   },
//   tooltip: {
//     enabled: false, // Disable tooltips
//   },
// }

// export const chartSeries8 = [
//   {
//     data: [
//       {
//         x: "2008",
//         y: [2800, 6500],
//       },
//       {
//         x: "2009",
//         y: [3200, 6100],
//       },
//       {
//         x: "2010",
//         y: [2950, 7800],
//       },
//       {
//         x: "2011",
//         y: [3000, 5600],
//       },
//     ],
//   },
// ]
