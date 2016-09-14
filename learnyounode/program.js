// OFFICIAL SOLUTION

    // var result = 0
    
    // for (var i = 2; i < process.argv.length; i++)
    //   result += Number(process.argv[i])
    
    // console.log(result)

// MY FUNCTION

function babySteps(stdout){
  var total = 0;

  for( var i = 0 ; i < stdout.length ; i++ ) {
    
    if ( i > 1) {
      total += +stdout[i];
    }
  }
  console.log(total);
}

babySteps(process.argv);