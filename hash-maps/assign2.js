//WhatDoesThisDo

const HashMap = require('./assign1')

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

WhatDoesThisDo()

// creates one hashmap map1 and sets two key-value pairs. Key to both is "Hello World." The output for map1.get will be 20 --> correct
// then, creates one hashmap map2 and sets the two key-value pairs. Key to both is also "Hello World.". The outpur for map2.get will be 10 --> correct