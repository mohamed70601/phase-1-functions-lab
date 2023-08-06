// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
    var distBlocks = distanceFromHqInBlocks(location);
    return distBlocks * 264;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    var distBlocks = Math.abs(destinationBlock - startBlock);
    return distBlocks * 264;
}

function calculatesFarePrice(startBlock, destinationBlock) {
    var distFeet = distanceTravelledInFeet(startBlock, destinationBlock);
    if (distFeet <= 400) {
        return 0;
    } else if (distFeet > 2500) {
        return 'cannot travel that far';
    } else if (distFeet > 400 && distFeet <= 2000) {
        return (distFeet - 400) * 0.02;
    } else if (distFeet > 2000 && distFeet < 2500) {
        return 25;
    }
}