var a = 123;
var b = 'abc';

var fnExpression = function() {
	var c = 456;
	var d = 'def';
}

function fnDeclaration() {
	var e = 789;
}

//engine renders it like below

function fnDeclaration() {
	var e;
	e = 789;
}

var a;
var b;
var fnExpression;

a = 123;
b = 'abc';


fnExpression = function() {
	var c;
	var d;
	c = 456;
	d = 'def';
}