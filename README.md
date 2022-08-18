SIMPLE DUNGEON CRAWLER USING THE 2D ARRAY



※※※※※※※※※※※※CLASSES※※※※※※※※※※※※
Player class -  HP, ATK, DEF -- give the player coordinates
-methods: 
--attack( should use should randomize the % of the attack to be applied then take that % and do math aginst the def to return the DMG), 
--receiveDamage() -- see viking game and mofity it slighlty
--move()-- should be to move using WASD or arrow keys 
NOTES: add a chance for them to miss. like one out of 75

Monster class - HP, ATK, DEF 
--attack( should use should randomize the % of the attack to be applied then take that % and do math aginst the def to return the DMG), 
--receiveDamage() -- see viking game and mofidy it slighlty
--move()-- Perhpas they shouldn't move or should only move randomoly?
NOTES: add a chance for them to miss. like one out of 20

DungeonGame class-
SHOULD CONTAIN
-array of monsters
-should create the "dungeon"

// WIN CONDITION-
5-10 monsters on the map, once array of monsters on the map is zero then 
return (you've slewn all of the moｎsters good job).

// LOOSE CONDITION.
your HP BECOMES zero (you loose the game) --> back to title?



