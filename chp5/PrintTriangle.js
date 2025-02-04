let num = 7;
for(let counter = 1; counter <= num; counter++){
        const print = '';
        let printStarA = '';
        let printStarB = '';
        let printStarC = '';
        for(let innerCount = 1; innerCount <= counter; innerCount+=1){
              printStarA += "*  ";
        }
        for (let innerNum = 0; innerNum < num - counter + 1; innerNum++) {
                printStarB+= "*  ";
        }
        
        for (let innerCounter = 1; innerCounter <= num - counter + 1; innerCounter++) {
                printStarC+= "*  ";
        }
        //  console.log(printStarA);
         console.log(printStarB);
        //  console.log(printStarC);

 }