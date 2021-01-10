const fortunes = ["Today it's up to you to create the peacefulness you long for.", 
"A friend asks only for your time not your money.", 
"If you refuse to accept anything but the best, you very often get it." , 
"A smile is your passport into the hearts of others.", 
"A good way to keep healthy is to eat more Chinese food.", 
"Your high-minded principles spell success.", 
"Hard work pays off in the future, laziness pays off now.", 
"Change can hurt, but it leads a path to something better.", 
"Enjoy the good luck a companion brings you.", 
"People are naturally attracted to you.", 
"Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.", 
"A chance meeting opens new doors to success and friendship.", 
"You learn from your mistakes... You will learn a lot today.", 
"If you have something good in your life, don't let it go!", 
"Whatever your goal is in life, embrace it visualize it, and for it will be yours.", 
"Your shoes will make you happy today.", 
"You cannot love life until you live the life you love.", 
"Be on the lookout for coming events; They cast their shadows beforehand.", 
"Land is always on the mind of a flying bird.", 
"The man or woman you desire feels the same about you.", 
"Meeting adversity well is the source of your strength.", 
"A dream you have will come true.", 
"Our deeds determine us, as much as we determine our deeds.", 
"Never give up. You're not a failure if you don't give up.", 
"You will become great if you believe in yourself.", 
"There is no greater pleasure than seeing your loved ones prosper.", 
"You will marry your lover.", 
"A very attractive person has a message for you.", 
"You already know the answer to the questions lingering inside your head.", 
"It is now, and in this world, that we must live."];
let fortuneLength = fortunes.length;
let luckyFortune = Math.floor(Math.random() * fortunes.length);
let fortune = fortunes[luckyFortune];
//console.log(fortune);

const numbers = [0,1,2,3,4,5,6,7,8,9];
let numbersLength = numbers.length;
let luckyNumber = Math.floor(Math.random() * numbersLength);
let number = numbers[luckyNumber];
//console.log(number);

const runes = ["fehu (wealth)", "ūruz (water)", "þurisaz (giant)", "ansuz (the god Wodinaz or Odin)", "raidō (journey)", "kaunan (torch)", "gebō (gift)", "wunjō (joy)", "hagalaz (hail or sleet)", "naudiz (need)", "īsaz (ice)", "jēra- (good year or harvest)", "ī(h)waz (yew-tree)", "perþ- (secrets, destiny, future, feminine, uncertain\/hidden)", "algiz (elk, or protection\/defense)", "sōwilō (sun)", "tīwaz (the god Tīwaz or Tyr)", "berkanan (birch)", "ehwaz (horse)", "mannaz (man)", "laguz (water, lake)", "ingwaz (the god Ingwaz or Freyr)", "ōþala- (heritage, estate, or possession)", "dagaz (day)"]
let runesLength = runes.length;
let luckyRune = Math.floor(Math.random() * runesLength);
let rune = runes[luckyRune];
//console.log(rune);

console.log(`Today's message is, "${fortune}" Your lucky number is ${number} and your lucky rune is ${rune}.`) ;
