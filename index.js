// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(cat) {
    return cats.push(cat);
}

function destructivelyPrependCat(cat) {
    return cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const newcats = [...cats, name];
    return newcats;
}

function prependCat(name) {
    const newcats = [name, ...cats];
    return newcats;
}

function removeLastCat() {
    const newcats = cats.slice(0, cats.length - 1)
    return newcats
}

function removeFirstCat() {
    const newcats = cats.slice(1)
    return newcats
}