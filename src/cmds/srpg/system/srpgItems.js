// "#" : { id : #, value : #, type : "", name : "", desc : "", stats : {}}

/**
 * Type = item, armor, weapon, toy
 * stats = { hp : #, def : #, atk : # } // 1 or multiple.
*/

exports.items = {
    "1" : { "id" : 1, "value" : 1, "type" : "item", "name" : "Gold", "desc" : "It's Shiny!!"},
    "2" : { "id" : 2, "value" : 3, "type" : "item", "name" : "Cookie", "desc" : "Who doesn't like Cookies??"},
    "3" : { "id" : 3, "value" : 5, "type" : "armor", "name" : "Shirt",  "desc" : "", "stats" : { "def" : 1 } },
    "4" : { "id" : 4, "value" : 7, "type" : "weapon", "name" : "Short Dagger", "desc" : "Like a dagger. But shorter!!", "stats" : { "atk" : 1 } },
    "5" : { "id" : 5, "value" : 0, "type" : "toy", "name" : "BoogyBear", "desc" : "........"},
    "6" : { id : 6, value : 10, type : "item", name : "Criminale", desc : "The Finest Ale this side of the Galaxy... Wait... Galaxy?!?!?!"},
};
