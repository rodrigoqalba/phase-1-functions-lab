// Code your solution in this file!
const hq = 42;
const feetInBlock = 264

function distanceFromHqInBlocks(numOfBlocks) {
    if (numOfBlocks > 42) {
        return numOfBlocks - hq;
    } else (numOfBlocks < 42) 
        return hq - numOfBlocks;  
}

function distanceFromHqInFeet(numOfBlocks) {
    return distanceFromHqInBlocks(numOfBlocks) * feetInBlock;
}

function distanceTravelledInFeet(num1, num2) {
    if (num1 > num2) {
        return  (num1 - num2) * feetInBlock
} else (num1 < num2)
    return (num2 - num1) * feetInBlock
}

function calculatesFarePrice(num1, num2) {
    if (distanceTravelledInFeet(num1, num2) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(num1, num2) > 400 && distanceTravelledInFeet(num1, num2) <= 2000) {
        return (distanceTravelledInFeet(num1, num2) -400) * 0.02;
    } else if (distanceTravelledInFeet(num1, num2) > 2000 && distanceTravelledInFeet(num1, num2) <2500) {
        return 25
    } else if (distanceTravelledInFeet(num1, num2) >= 25)
        return 'cannot travel that far'
}