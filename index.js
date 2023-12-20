const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // let result = returnFirstTwoDrivers(drivers);
  // console.log(result);
  

  function returnLastTwoDrivers(drivers) {
  return drivers.slice(2, 4);
  }
  
  // let result = returnLastTwoDrivers(drivers);
  // console.log(result);
  
  

  function returnFirstTwoDrivers(drivers) {
    return [drivers[0], drivers[1]];
  }
  
  // const selectingDrivers = [returnFirstTwoDrivers];
  // console.log(selectingDrivers[0](drivers));
  
  

function returnLastTwoDrivers(drivers) {
  return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(returnFirstTwoDrivers(drivers)); 
console.log(returnLastTwoDrivers(drivers)); 




function createFareMultiplier(multiplier) {
   
    return function (fare) {
      return fare * multiplier;
    };
  }
  
   const fareDoubler = createFareMultiplier(2);
  // console.log(fareDoubler(15)); 
  
  const fareTripler = createFareMultiplier(3);
// console.log(fareTripler(15)); 




function returnFirstTwoDrivers(drivers) {
  return [drivers[0], drivers[1]];
}

function returnLastTwoDrivers(drivers) {
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
 
  return selectingFunction(arrayOfDrivers);
}



