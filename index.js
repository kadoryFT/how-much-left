function lifeInWeeks(age) {
    

    var left  = 90 -age;
    var outday =  left *365;
    var outweek =left *52;
    var outmonth =left*12;
    
    console.log("You have "+ outday +" days, " + outweek+ " weeks, and "+ outmonth + " months left." )  
    
}
lifeInWeeks(51)