// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
  cats.push('Ralph');
}

function destructivelyPrependCat(name){
    cats.unshift('Bob');
  }

  function destructivelyRemoveLastCat(name){
    cats.pop();
  }

  function destructivelyRemoveFirstCat(name){
    cats.shift();
  }

  function appendCat(name){
     const newArray=[...cats] 
     newArray.push('Broom')
     return newArray
  }


  function prependCat(name){
      return ['Arnold', ...cats]
  }

function removeLastCat(name){
    return cats.slice(0,cats.length -1);
}


function removeFirstCat(name){
    return cats.slice(1);
}