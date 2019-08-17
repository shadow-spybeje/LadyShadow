// "#" : { id : #, value : #, type : "", name : "", desc : "", stats : {}}

/**
 * Type = item, armor, weapon, toy
 * stats = { hp : #, def : #, atk : # } // 1 or multiple.
*/

exports.items = [
    { hide : true, id : 1, value : 1, type : "Item", name : "Gold", color : "ffff00", desc : "It's Shiny!!"},
    { id : 2, value : 3, type : "Item", name : "Cookie", color : "", desc : "Who doesn't like Cookies??", buffs : "+2 hp"},
    { id : 3, value : 5, type : "Armor", name : "Shirt",  color : "ffffff", desc : "", stats : { def : 1 } },
    { id : 4, value : 7, type : "Weapon", name : "Short Dagger", color : "a9a9a9", desc : "Like a dagger.\n- But shorter!!", stats : { atk : 1 } },
    { hide : true, id : 5, "value" : 0, type : "Toy", name : "BoogyBear", color : "d3d3d3", desc : "Is something following you??", buffs : "+17 Paranoia"},
    { hide : true, id : 6, value : 10, type : "Item", name : "Criminale", color : "39ff14", desc : "The Finest Ale this side of the Galaxy... Wait... Galaxy?!?!?!", buffs : "^+3 Avoidance"},
];
