const {reverseString} = require('./reverseString')


test("that a string can be reverse", ()=>{
   let word = "ABCD"
   let expected = reverseString(word);
   expect(expected).toBe("DCBA");
})