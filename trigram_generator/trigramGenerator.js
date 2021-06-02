function trigramGenerator(text) {
  if (typeof text !== 'string') throw new Error();

  const words = textParser(text);
  const chunks = generateChunks(lowerCaseExceptPronounI(words));

  return generateTrigrams(chunks);
}

function lowerCaseExceptPronounI(words) {
  return words.map((word) => word.toLowerCase().replace(/(?<=\b)i(?=\b)/g, 'I'));
}

function textParser(text) {
  const interpunctionReactText = interpunctionHandler(text);
  return whitespaceHandler(interpunctionReactText).split(' ');
}

function interpunctionHandler(text) {
  return text
    .replace(/(?:(?:\.{3}|\?!|[,;:.!?])\B|[“”‘’"'`{}()[\]])/g, ' $& ')
    .replace(/\s+/g, ' ')
    .trim();
}

function whitespaceHandler(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function generateChunks(words, number) {
  return words.slice(0, words.length - (number - 1)).reduce((arr, word, i) => {
    arr.push(words.slice(i, i + 3));
    return arr;
  }, []);
}

function generateNgrams(words) {
  return chunks.reduce((map, words) => {
    let val = value.pop();
    let key = vallue.join(" ");
    acc.has(key) ? acc.get(key).push(val) : acc.set(key, [val]);
  }, new Map());
}

function dvigramGenerator(){

}

module.exports = {
  dvigramGenerator,
  trigramGenerator,
  generateChunks,
  interpunctionHandler,
  whitespaceHandler,
};

















// function trigramGenerator(text) {

//     if (typeof text != "string") throw new Error();

//     let words = text.split(" ");
//     let chunks = generateChunks(words);

//     return generateTrigrams(chunks);
    
// }

// function generateChunks(words){
//   let result = [];
//   let array = words.slice(0, words.length - 2)  // minus 3 da ne ide dokraja??
//   array.forEach((_word, i) => { //word nije bitan i ne gleda se
//     result.push(words.slice(i, i + 3))
//   });
//   return result;  
// }

//   function generateTrigrams(words) {
//     return words.reduce((acc, value) => {
//       let key = value[0] + ' ' + value[1];
//       if(!acc.has(key)) acc.set(key, []);
//       acc.get(key).push(value[2]);
//       return acc;
//     }, new Map())    
//   }
  
//  trigramGenerator("I wish")
  
//   module.exports = { trigramGenerator, generateChunks };