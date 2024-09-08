
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


