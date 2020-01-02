# FLAPPY BIRD

**Flappy Bird** - An exact replica of the popular game **Flappy Bird** where the player controls a bird, attempting to fly between columns of green pipes without hitting them.


## GETTING STARTED :pencil:
To start playing:
  - Clone the repository 
    - Clone or download the repository **'Flappy-Bird'** by clicking on the Clone or Download button
    - Open the 'index.html' file and start playing!
    
    **or**

  - Visit the link: [https://verma-anushka.github.io/Flappy-Bird/](https://verma-anushka.github.io/Flappy-Bird/)

    **or**
  
  - You can also find **Flappy Bird** and many more cool games at the link: 
    [https://verma-anushka.github.io/Gaming-Zone/](https://verma-anushka.github.io/Gaming-Zone/)


## INSTRUCTIONS :interrobang:
- Direct the flying bird **"Faby"**, who moves continuously to the right, between sets of Mario-like pipes without touchimg the pipes.
- Faby briefly flaps upward each time that the player taps the screen; if the screen is not tapped, Faby falls because of gravity.
- Each pair of pipes that he navigates between earns the player a single point, with medals awarded for the score at the end of the game.
  - No medal is awarded to scores less than ten. 
  - A bronze medal is given to scores between ten and twenty. 
  - In order to receive the silver medal, the player must reach twenty points. 
  - The gold medal is given to those who score at least thirty points. 
  - Players who achieve a score of forty or higher receive a platinum medal.


## TO-DO :clipboard:
- [x] Add sounds
- [x] Fix bugs
- [ ] Mobile friendly


## TECHNOLOGIES USED :speech_balloon:

- **HTML5**: 
    - **HTML5** is current major version of HTML that subsumes XHTML.
    - `<canvas>`
        - <canvas> is an HTML element which can be used to draw graphics via scripting (usually JavaScript)
        - The <canvas> element is only a container for graphics. JavaScript is required to actually draw the graphics.

- **VANILLA JS**: 

    - **VANILLA JS**: JavaScript without any additional libraries like jQuery.
    - Using the HTML5 **canvas** element
        ```javascript
        const canvas = document.getElementById('gameCanvas')
        const ctx = canvas.getContext('2d')
        ```
        - document.getElementById('gameCanvas') — searches for an HTML element that has the id of gameCanvas. Once it finds the element,          we can then manipulate it with JavaScript.
        
        - canvas.getContext() — context is our toolbox of paintbrushes and shapes. The 2D context contains the set of tools we want. If         you were working with 3D, you would use WebGL instead.


## SNAPSHOTS :camera:
![Flappy Bird](/flappyBird1.png)
![Flappy Bird](/flappyBird2.png)


## CONTRIBUTE :shipit:
Issues, PRs, and all your suggestions and discussions are very welcome!

