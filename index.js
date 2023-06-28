// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  console.log(distanceFromHqInBlocks(50));
  console.log(distanceFromHqInFeet(50));
  console.log(distanceTravelledInFeet(34, 38)); 
  
