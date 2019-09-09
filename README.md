# Welcome to Stardew!
Stardew is a 2D bubble popping survival game. Shoot the bubbles to gain points but beware - they multiply and move faster with each pop - how long can you survive?

![enter image description here](https://lh3.googleusercontent.com/UzyysgK2dHpfbZaMPX1F2nVOrfzWzyeBDQfBWljzLLLx45Zq_I0OtMBcsnaDWZ4cFR5h1Q5tUn4_)

## Features
-   High Scores
    -   Implemented through Google Firebase 
    -   Persists High scores through multiple instantiations of the game

## Implementation

**Collision Algorithm**

Translated over some geometric intersection detections equations to JavaScript and is checked every frame of the HTML Draw function to see if a bubble has collided with the wall/player and if the bullet fired has collided with a bubble.

![enter image description here](https://lh3.googleusercontent.com/je-nOKKIy4PaVceXeXZPP8iSVrwe4P4-utqAmoIcdi0hAABlJzuxiPYxA4IQNjcG0OzJ93rHG11X)



## Technologies Used
-   **HTML Canvas**  to draw the game
-   **Google Firebase** record and perist High Scores
- **Javascript** for efficient handling of media asset storage
-   **SASS/CSS**  for styling

## Planned Future Features
- **Create multiple modes with different shaped other than bubbles**
- **Create different maps which the player can choose from**
- **Add Music**