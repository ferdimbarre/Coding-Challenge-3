
// for loop
function calculateAverageSales (sales) {
    let sumOfSales = sales.reduce((total,sales) => sales + total, 0)
    let average = sumOfSales / sales.length
    return average
} // develop a function that accepts an array: sales is the array. the description gave me the input. 
// output will be the average 

