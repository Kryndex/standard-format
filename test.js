#!/usr/bin/env node

// This file is automatically ran through standard-format
// and checked by standard. Add test cases for the formatter by adding
// to this file

// eol semicolons
var x = 1;

// eol whitespace
x = 2 

// standard-format has nothing to say about unused vars
// so this is here to prevent invalid test cases
console.log(x)

//bad comment -- needs a space after slashes
var test = "what";

if (test) {
  // test: infix commas
  ["a","b","c"].forEach(function (x) { 
    console.log(x*2); 
  })
}

var obj = {val: 2}

// space after function name and arg paren
;[1].forEach(function(){})

// space after argument paren
function f2 (){}
function   fooz() {}
function   foox () {}
function   foos   () {}

f2( obj)
f2(obj )
f2( obj )
f2( obj, obj )
f2( obj,obj )
fooz()
foox()
foos()

function foo(){}
function bar() {}
function quux()  {}


foo()
bar()
quux()


function food (){}
function foot ()  {}


food()
foot()


// test: no block padding
var lessThanThreeNewlines = function () {

  return 2;
}
lessThanThreeNewlines()

// at most one newline after opening brace
function noExtraNewlines() {


  return 2;
}
noExtraNewlines()

// at most one newline after opening brace
function noExtraSingle() { return 2 }
noExtraSingle()

// at most one newline after opening brace
function noExtraBraces() {


  if (noExtraBraces != null) 

  {

    return 42
  }

  else 

  {

    return 42
  }

  switch(noExtraBraces) 

  {

  case null:
    return 42
  }

  try 

  {

    return 42
  }
  catch (e) 

  {


    return 43
  }

  for (var i in noExtraBraces) {

    return i
  }
}
noExtraBraces()
