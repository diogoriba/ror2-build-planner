var itemsByRarity = require('./items-data.js');
console.log(JSON.stringify(itemsByRarity));
console.log();
var ids = {};
var hasDuplicates = false;
for (var category in itemsByRarity) {
    for (var item in category.items) {
        var element = category.items[item];
        if (!ids[element.id]) {
            ids[element.id] = 1;
        } else {
            hasDuplicates = true;
            console.log("Duplicate ID: " + element.id);
        }
    }
}

if (hasDuplicates) {
    console.log("FOUND DUPLICATES!!!!");
} else {
    console.log("No duplicates found.");
}