what features do we want
- list of stores at the hawker centre
- plate of food appears, press left and right buttons to scroll
- list nutritional info + ingredients/allergens
- (if time) ordering system? (display all the dishes ordered before clicking confirm)




objects:

landing page
[v] shop buttons
[ ] text panel for instructions
    - Welcome to Happyfaces Hawker Centre!
    - Step 1: Click on the stall you would like to order from.
    - Step 2: Click the left/right buttons to browse the menu and view information about the dishes. Use the +/- buttons to add dishes to your cart.
    - Step 3: When you are done ordering, click the "Finish Ordering" button.

main page
[v] plate + small text panel for name of dish
[v] left/right buttons
[ ] (top) text panels: one for nutrition info, one for ingredients
[v] (bottom) small text panel with the +- signs for the user to add how many of this thing they want to order
[ ] (bottom) "finish ordering" button

order page
[ ] text panel to tell them to pay to the person who delivers the food to their table
[ ] "confirm order" button


TODO
before lunch:
- FIX OVERLAY
    - reset experience button (show a confirmation dialog and tell them info will be lost)
- make the text boxes / buttons look normal and not strips
- test tracking of plate

after lunch:
- create classes for food items (+stores? iftime?)
- implement actual logic (dependent on classes)
    - +/-
    - left/right
    - nutrition info/ingredients

less if time but still if time:
- ordering system

more if time:
- (bottom) checkbox(es) (for show) for "customisation" options (e.g. no chilli)
- plates to appear on the table (likely can be created by js)