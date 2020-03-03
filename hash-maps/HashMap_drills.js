const HashMap = require('./assign7')

const main = function(){

    const lotr = new HashMap()

    lotr.set("Hobbit","Bilbo")
    lotr.set("Hobbit","Frodo")
    lotr.set("Wizard","Gandolf")
    lotr.set("Human","Aragorn")
    lotr.set("Elf","Legolas")
    lotr.set("Maiar","The Necromancer")
    lotr.set("Maiar","Sauron")
    lotr.set("RingBearer","Gollum")
    lotr.set("LadyOfLight","Galadriel")
    lotr.set("HalfElven","Arwen")
    lotr.set("Ent","Treebeard")

    console.log(lotr.get("Maiar")) //Sauron, not The Necromancer
    console.log(lotr.get("Hobbit")) //Frodo, not Bilbo

    return lotr
}

console.log(main())