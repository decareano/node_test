//getting a cumulative value. it traverses the array and gets a 
//cumulative value from each callback



var points_scored_49ers = [
    { game:'Rams', points:28 },
    { game:'Seahawks', points:18 },
    { game:'Cardinals', points:21 },
    { game:'Buccaneers', points:17 },
    { game:'Panthers', points:27 },
    { game:'Cowboys', points:17 }
];

var sum = points_scored_49ers.reduce(function(prevVal, elem) {
    return prevVal + elem.points;
}, 0);

console.log(sum);


//A TEST for the above piece of software would be something like this in
//pseudo code. 

describe("a reduce function", function () {
	it('adds the scores for all the games', function() {
		expect(scores).toEqual(blablabla);
	});
});