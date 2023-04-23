#About#
Made using create-react-app
This treasure hunt game consists of 5 levels.
Each level has some set of riddles which are fetched from the mongodb database.
Users need to answer the riddles by reading the statements.
After two failed attempts of answer a hint option will be active from where the user can get a hint to solve the riddle.
Two of the level does not contain any hint for the riddle and can be a dead end for the user.
Only 1 riddle from the two levels have the hint so its on the luck of the user to get the riddle with clue or without clue to pass the level.

#Features#
Users can register by giving name, email and password which will be stored in mongodb database
Users can login and move to play game
This game has 5 levels where 2 level contains set of riddles without clue which can act as dead end for users.
These 2 levels also have some riddles with clue so its upto the algorithm to fetch the riddle randomly with or without clue.
Admin can see the list of users and update the riddles in the database
On refreshing the website the game restarts from the level 1
