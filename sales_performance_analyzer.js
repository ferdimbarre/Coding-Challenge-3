
// for loop
function calculateAverageSales (sales) {
    let sumOfSales = sales.reduce((total,sales) => sales + total, 0)
    let average = sumOfSales / sales.length
    return average
} // develop a function that accepts an array: sales is the array. the description gave me the input. 
// output will be the average 

// function to determine performance rating
function determinePerformanceRating (average) {
    let PerformanceRating
if (average > 10000) {
    PerformanceRating = "Excellent" //output excellent
} else if (7000 <= average && average <= 10000) {
   PerformanceRating = "Good" // output good
} else if (4000 <= average && average < 7000) {
    PerformanceRating = "Satisfactory" // output satisfactory
} else {
    PerformanceRating = "Needs Improvement" // output needs improvement
} 
return PerformanceRating 
} 

// function to identify top and bottom performers
// salesPeople [salesFigure, employeeName]
function findTopAndBottomPerformers (salesPeople) {
    let bottomPerformer =
salesPeople.reduce ((accumulator, currentValue) => {
    return currentValue.salesFigure < accumulator.salesFigure ? currentValue : accumulator; // accumulator is min so far. if acc > CV, return acc, if not, CV is new accumulator
},salesPeople[0]); // output will be lowest sales

let topPerformer =
salesPeople.reduce ((accumulator, currentValue) => {
return currentValue.salesFigure < accumulator.salesFigure ? accumulator : currentValue; 
}, salesPeople[0]);

// create an object to return top and bottom performer:
return {topPerformer, bottomPerformer};
}

function generatePerformanceReport (salesData) {
    calculateAverageSales (salesData);
    determinePerformanceRating (salesData);
    findTopAndBottomPerformers (salesData);
return performanceReport = {
    namd: salesData[0].name,
    average_sales: calculateAverageSales(salesData),
    rating: determinePerformanceRating (salesData),
    top_performer_and_bottom_performer: findTopAndBottomPerformers (salesData)
}
}
