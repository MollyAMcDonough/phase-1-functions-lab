// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue-42);
}

function distanceFromHqInFeet(someValue) {
  return 264*distanceFromHqInBlocks(someValue);
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start-destination)*264;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let dist = distanceTravelledInFeet(start,destination);
    switch (true){
        case dist>2500:
            return 'cannot travel that far';
        case dist>2000:
            return 25;
        case dist>400:
            return (dist-400) * 0.02;
        default:
            return 0;
    }
}