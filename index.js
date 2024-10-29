// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
      return array.slice(0,2)
}
const returnLastTwoDrivers = function (array) {
    return array.slice(array.length-2)
}
function createFareMultiplier(int){return function(multiply)
    {return int*multiply}}

    
const fareDoubler = function (int){return createFareMultiplier(int)(2)}
const fareTripler = function (int){return createFareMultiplier(int)(3)}
function selectDifferentDrivers(arrayOfDrivers, funct) {
    if (funct === returnFirstTwoDrivers){
        return arrayOfDrivers.slice(0,2)}
    else if (funct === returnLastTwoDrivers){
        return arrayOfDrivers.slice(length-2)}
    }
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
   