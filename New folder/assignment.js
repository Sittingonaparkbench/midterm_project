
var FIRSTNAME = "Glen";
var LASTNAME = " Apfelstadt";
var a = (2+2).toString();
var b = (56/7).toString();
var c = (42.6*18.3).toString();
var d = (83.97-34.86).toString();
var e = (49 % 8).toString();

function practice1(){
	
	console.log("Hello, My name is "+FIRSTNAME+LASTNAME);
	console.log("2 plus 2 equals: " + a);
	console.log("56 divided by 7: " + b);
	console.log("42.6 times 18.3: " + c);
	console.log("83.97 minus 34.86: " + d);
	console.log("49 mod 8: " + e);
	
}

practice1();

var a = (5 + 4 + 3 / 2 * 6 -1).toString();
var b = (4 % 3).toString();
var c = (33.00 - 15.87).toString();

function practice2(){
	
	console.log("5 plus 4 plus 3 divided by 2 times 6 minus 1: " + a);
	console.log("4 mod 3: " + b);
	console.log("$33.00 minus $15.87: " + "$" + c);
	
}

practice2();

var a = 56;
var b = 43.211;
var c = "2";
var d = "two";
var e = new Date();
var f = [];
var g = {};
var h = true;
var i = false;
var j = null;
var k = undefined;
var l = NaN;
var m = 0;
var n = "0";
var o = "";
var p = ""||1;
var q = 3 > 2;
var r = 2 > 3;
var s = new Number("some text");

function practice3() {
	
	console.log(typeof(a));
	console.log(typeof(b));
	console.log(typeof(c));
	console.log(typeof(d));
	console.log(typeof(e));
	console.log(typeof(f));
	console.log(typeof(g));
	console.log(typeof(h));
	console.log(typeof(i));
	console.log(typeof(j));
	console.log(typeof(k));
	console.log(typeof(l));
	console.log(typeof(m));
	console.log(typeof(n));
	console.log(typeof(o));
	console.log(typeof(p));
	console.log(typeof(q));
	console.log(typeof(r));
	console.log(typeof(s));
	
}

practice3();

var foo = 2;
var bar = 3;

function practice4() {
	
	console.log((foo).toString());
	console.log((bar).toString());
	console.log((foo + bar).toString());
	console.log((foo*bar).toString());
	console.log((foo/bar).toString());
	
}

practice4()