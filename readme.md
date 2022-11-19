# Módulo 3 Challenge 1

# GoT DOM

You will need to program a user interface to reflect the following data model.

In Game of Thrones there are characters. All these characters have the following information: - Name - Family they belong to - Age - Status (alive or dead, although initially they are all alive).

All characters can perform the action of communicating, but each type of character (not each character) communicates in a different way. Note: this method returns the string with the phrase, it does not print to the console.

All characters can perform the action of dying, changing their status to dead.

All characters belong to the same series, "Game of Thrones".

Each of these characters can be a king, a fighter, an advisor, or a squire.

A king, in addition to the information he has as a character, has the following information: - Years of reign - When he communicates he says: "You are all going to die".

A fighter, in addition to the information he has as a character, has the following information: - Weapon he uses - Dexterity (a value between 0 and 10) - When communicating he says: "First I hit and then I ask".

An advisor, in addition to the information he has as a character, has the following information: - Character he advises (who can be a king, fighter, advisor or squire) - When communicating he says: "I don't know why, but I think I'm going to die soon".

A squire, in addition to the information he has as a character, has the following information: - Character he serves (who can only be a fighter) - Degree of pelotism (a value between 0 and 10) - When communicating he says: "I'm a loser".

0. Create the following JS files and make them work as modules via import and export:

-   Character.js, King.js, Fighter.js, Advisor.js, Squire.js (put inside each class).
-   characters.js (create an array with the characters inside)
    -   Joffrey Baratheon (king),
    -   Jaime Lannister (fighter),
    -   Daenerys Targaryen (fighter),
    -   Tyrion Lannister (Daenerys's advisor), and
    -   Bronn (Jaime's squire)).
-   index.js (here goes the rest of the statement, and this will be the entry point)

1. Make each character in the array show the corresponding tab in the browser:
    - In the element with class `emoji` one of these emojis has to appear depending on the type of character: 👑 🗡 🎓 🛡
    - If the character is dead, its picture should appear upside down (do the necessary CSS);
    - In the list with class `metadata`, make only the `li` corresponding to the character appear.
2. When the user clicks the `dies` button, the character's state must change, and the interface must reflect the change.
3. When the user clicks the "speaks" button, the element with class `communications` must appear with the corresponding text and image. Make this `communications` element have class `on` for 2 seconds and then remove it.

https://jmonmany-w7challenge.netlify.app/


