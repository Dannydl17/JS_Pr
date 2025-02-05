const reverseString =(word)=>{
     let collectWord = "";
     for (let count = word.length - 1; count >= 0; count--){
           collectWord += word.charAt(count);
      }
      return collectWord;
}
module.exports = {reverseString}