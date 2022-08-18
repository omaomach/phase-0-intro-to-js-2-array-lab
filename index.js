const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    name = cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    name = cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat(name) {
    const newCats = [...cats,`${name}`];
    return newCats;
}

console.log(appendCat('Broom'));

function prependCat(name) {
    const newCats = [`${name}`,...cats];
    return newCats;
}

console.log(prependCat('Arnold'));

function removeLastCat() {
    const newCats = cats.slice(0,2);
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}



