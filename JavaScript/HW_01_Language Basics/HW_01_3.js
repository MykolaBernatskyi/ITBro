//Basic - TEST DATA
// let scoreDolphins = [96, 108, 89];
// let scoreKoalas = [88,91, 110];


//BONUS 1  - TEST DATA BONUS 1
// let scoreDolphins = [97, 112, 101];
// let scoreKoalas = [109,95, 123];


//BONUS 2  - TEST DATA BONUS 2
let scoreDolphins = [97, 112, 101];
let scoreKoalas = [109,95, 106];

// console.log(averageScore(scoreDolphinsBonus2))

function averageScore(arr){
    let rez = 0;
    for (let i = 0; i < arr.length; i++)
    {
        rez = rez + arr[i];
        // console.log(arr[i]);
        // console.log(rez);
    }
  return (rez/(arr.length));
}

function averageScore100(arr){
    let rez = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i]>=100) {
            count++;
            rez = rez + arr[i];
            // console.log(arr[i]);
            // console.log(rez);
        }
    }
    return (rez/count);
}

// Basic - TEST DATA
let averScoreTeam1 = averageScore(scoreDolphins);
let averScoreTeam2 = averageScore(scoreKoalas);
console.log(`averScoreDolphins ${averScoreTeam1}`);
console.log(`averScoreTeam2 ${averScoreTeam2}`);

if (averScoreTeam1 > averScoreTeam2) {
    console.log(`The Dolphins ${averScoreTeam1} has a higher score than the Koalas ${averScoreTeam2}`);
} else{
    if (averScoreTeam1 === averScoreTeam2) {
        console.log(`The Dolphins ${averScoreTeam1} and the Koalas ${averScoreTeam2} have a draw!!!`);
    } else {
        console.log(`The Koalas ${averScoreTeam2} has a higher score than the Dolphins ${averScoreTeam1}`);
    }

    }

// TEST DATA BONUS 1
let averScoreTeam1only100 = averageScore100(scoreDolphins);
let averScoreTeam2only100 = averageScore100(scoreKoalas);
console.log(`scoreDolphins ${averScoreTeam1only100}`);
console.log(`averScoreTeam2 ${averScoreTeam2only100}`);

if (averScoreTeam1only100 > averScoreTeam2only100) {
    console.log(`The Dolphins ${averScoreTeam1only100} has a higher score than the Koalas ${averScoreTeam2only100}`);
} else{
    if (averScoreTeam1only100 === averScoreTeam2only100) {
        console.log(`The Dolphins ${averScoreTeam1only100} and the Koalas ${averScoreTeam2only100} have a draw!!!`);
    } else {
        console.log(`The Koalas ${averScoreTeam2only100} has a higher score than the Dolphins ${averScoreTeam1only100}`);
    }

}
