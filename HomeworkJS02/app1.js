console.log("wanna be web developer")
/**
 * 1.write down the possible years ex.from 1960 to 2023
 * 2.write down the formula for calculating the chinese zodiac
 * 3.write down the possible values from 0 to 11
 * 4.write down user input prompt "Please enter your birth date to calculate your Chinese Zodiac"
 */

let year = (1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023)
let calculations = (year - 4) % 12;
let possibleValues = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
let userInput = prompt("Please enter your birth year to calculate your Chinese Zodiac");

if (calculations >= 0) {
    console.log("You are Rat")

}
if (calculations >= 1) {
    console.log("You are Ox")
}
if (calculations >= 2) {

    console.log("You are Tiger")
}
if (calculations >= 3) {

    console.log("You are Rabbit")
}
if (calculations >= 4) {

    console.log("You are Dragon")
}
if (calculations >= 5) {

    console.log("You are Snake")
}
if (calculations >= 6) {

    console.log("You are Horse")
}
if (calculations >= 7) {

    console.log("You are Goat")

}
if (calculations >= 8) {

    console.log("You are Monkey")
}
if (calculations >= 9) {

    console.log("You are Rooster")
}
if (calculations >= 10) {

    console.log("You are Dog")
}
if (calculations >= 11) {

    console.log("You are Pig")
}