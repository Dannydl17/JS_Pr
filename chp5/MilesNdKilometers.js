let Kilometers = 1.609;
let Miles = 10;

for(let count = 0; count < 1; count++){
        console.log("Miles     Kilometers")
}


for(let index = 1; index < 2; index++){
        for(let counter = 1; counter < Miles; counter++){
                while(counter <= 2){
                    let result = counter * Kilometers;
                    console.log("  ", counter, "        ",result.toFixed(3));
                    counter+=1;     
                }
        }
}

for(let index = 0; index < 1; index++){
        for(let counter = 1; counter < Miles; counter+=1){
                while(counter > 2 && counter < 8){
                        if (counter == 7){
                              console.log("  ...");
                        }
                        counter+=1;
                }
        }
}



for(let index = 1; index < 2; index++){
        for(let counter = 9; counter <= Miles; counter++){
                while(counter <= 10){
                    let result = counter * Kilometers;
                    console.log("  ", counter, "       ",result.toFixed(3));
                    counter+=1;     
                }
        }
}