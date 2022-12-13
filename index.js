function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(specialChar) {
    return function(string = "special") {
        return `You are ${specialChar}${string}${specialChar}!`
    }
}