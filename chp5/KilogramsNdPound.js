let pound = 2.2;
let num = 200;

for(let count = 0; count < 1; count++){
        console.log("Kilogram     Pound")
}


for(let index = 1; index < 2; index++){
        for(let counter = 1; counter < num; counter+=2){
                while(counter <= 3){
                    let result = counter * pound;
                    console.log("  ", counter, "        ",result.toFixed(1));
                    counter+=2;     
                }
        }
}

for(let index = 0; index < 1; index++){
        for(let counter = 1; counter < num; counter+=2){
                while(counter > 3 && counter < 196){
                        if (counter == 195){
                              console.log("  ...");
                        }
                        counter+=2;
                }
        }
}



for(let index = 1; index < 2; index++){
        for(let counter = 197; counter < num; counter+=2){
                while(counter <= 199){
                    let result = counter * pound;
                    console.log("  ", counter, "    ",result.toFixed(1));
                    counter+=2;     
                }
        }
}
