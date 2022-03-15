# Rock, Paper, Scissors, Lizard, Spock

## Description

Rock, Paper, Scissors is a game played to settle differences between two people. The game is taught to kids to resolve their own disputes without adult intervention. However, this game requires quick thinking and perceptive reasoning.

Rock, Paper, Scissors, Lizard, Spock is an improved version of the standard game of chance "Rock Paper Scissors". It got popular when it was mentioned in the comedy 'The Big Bang Theory', but initially it was created by Sam Kass and Karen Bryla.

> I invented this game (with Karen Bryla) because it seems like when you know someone well enough, 75-80% of any Rock-Paper-Scissors games you play with that person end up in a tie. Well, here is a slight variation that reduces that probability.
>
> *-Sam Kass*

The game is available in [here.](https://iama3191.github.io/rock-paper-scissors-lizard-spock/)

### How to play?

This game has the following combinations for the victory:

- Scissors cut paper.
- Paper covers rock.
- Rock crushes lizard.
- Lizard poisons Spock.
- Spock smashes scissors.
- Scissors decapitate lizard.
- Lizard eats paper.
- Paper disproves Spock.
- Spock vaporizes rock.
- Rock crushes scissors.

And with three possible results:

- Win
- Lose
- Draw

// Add pictures from Am I responsive.

## Table of content

- [RPS(LS)](#description)

- [Table of content](#table-of-content)

- [UX Design](#ux-design)
  - [User Stories](#user-stories)
  - [Colour Theory](#colour-theory)
  - [Typography](#typography)
  - [Features](#features)
    - [Navigation bar](#navigation-bar)
    - [Help button](#help-button)
    - [RPS(LS): The game itself](#rpsls-the-game-itself)
    - [Wireframes](#wireframes)

- [Technologies Used](#technologies-used)
  - [Lenguages used](#lenguages-used)
  - [Tools](#tools)
- [Testing](#testing)
  - [Navigation](#navigation)

  - [Game Functionality Test 1: Handling Clicks](#game-functionality-test-1-handling-clicks)
  - [W3C HTML Test:](w3c-html-test)
  - [W3C Jigsaw CSS Test:](#w3c-jigsaw-css-test)
  - [JSHint Test:](#jshint-test)
  - [Google Lighthouse Test #1: Performance:](google-lighthouse-test-1-performance)

- [Deployment](#deployment)
- [Credits](#credits)
- [Aknowlodgements](#aknowlodgements)

## UX Design

- ## Strategy

### User Stories

Reasons a user may visit the website

- Trying an advanced level of the classic 'Rock Paper Scissors' game.

- Distracting for a few minutes from regular tasks (e.g: job).

- Playing an online game of chance against the computer.

Reasons for the website

- Give the user the opportunity to play a few rounds against a machine.

- Give the user a mentally challenging game with more options to remember.

- ## Scope

What a user may expect

- A simple way for choosing an option and facing his opponent.

- Score and round counters.

- See the computer's choice.

What a user may want

- A help button for checking the rules of the game.

- A restart button for starting a new game at any moment without waiting until the last round.

- The availability to activate the next round or a new game after the 'Game Over' screen is shown.

As a developer I expect

- To provide an easy and logical navigation of the game.
- To provide recreational and fun time with a chance game.
- To provide the opportunity for changing the main colors and fonts easily in the CSS file.

- ## Structure

The website will consist of one page:

The first layout consists in the five possible choices for the user to click on. After the user makes a decision, this container isn't displayed anymore and a new one is shown where user and computer are facing each other with the final result of the game.  
This layout is hidden once again after the user clicks on the 'next round' button.

- ## Designs

### Surface

Colour Theory

The colors used for this game were chosen according to how they are appreciated in various aspects of daily life. The color-coding in the game is familiar to us, and we already know their meanings, so the game can be pretty intuitive by the colors.

![Color Palette](assets/images/images-readme/color-palette.png)

The background of the web is a background image where the main color is 'Xiketic' with triangles in a clearer shade of blue from [SVGBackgrounds](SVGBackgrounds.com.) . The color 'Xiketic' is a mix of black and a little purple. Black is associated with mystery and can be easily combined with any color as well. The background has a unique and mysterious design related to the game, but the user doesn't get distracted of the web's goal.

The color green evokes powerful emotions, and it's a dominant color in nature that makes us think of growth. It is also associated with rest, security and progress. This color will highlight who is winning on each round.

The red color on nature is a warning sign, usually when something is red, it is poisonous or harmful in some way. This color will be used to highlight who is losing on each round.

The white color is bright and can create a sense of space or add highlights. This color can symbolize a new beginning or fresh start. This color will be used to highlight user's decision and for texts.

The yellow stimulates our nerves, glands and brains, makes us more alert and energetic, stimulates our memory and promotes communication. It is a color that promotes activity and interaction. For this reason, it is used for the rule button at the top of the page and to highlight a draw.

### Typography

For headings and important texts, Mclaren regular 400 is used because it is a readable font with a slightly playful look that complements the rest of the site.
And for paragraphs Open San Serif is used, it is a clear and simple font that does not distract the user. And it is readable for the most important text (rules).

These fonts are imported from Google Fonts.

>`@import url('https://fonts.googleapis.com/css2?family=McLaren&family=Open+Sans:wght@300;400&display=swap');`

### Features

1. ### Call to action

2. ### RPS(LS): The game itself

3. ### Wireframes

- #### MOBILE

*Wireframe for when the user clicks on an option and how the design changes to a new one displaying the decisions of both players.*  

![how the user clicks on an option](assets/images/images-readme/wireframes/mobile-1.png)

*Wireframe for when the user reaches the 5th round and the final winner is picked. The user can start a new game clicking on the 'Play Again' button.*

![Game over](assets/images/images-readme/wireframes/mobile-3.png)

*Wireframe for how the help is displayed when the user clicks on the help ('?') button.*

![Modal screen for help button, showing rules](assets/images/images-readme/wireframes/mobile-2.png)

- #### DESKTOP

*Wireframe for when the user clicks on an option and how the design changes to a new one displaying the decisions of both players.*  

![How the user clicks on an option. Desktop screen](assets/images/images-readme/wireframes/desktop-1.png)

*Wireframe for when the user reaches the 5th round and the final winner is picked. The user can start a new game clicking on the 'Play Again' button.*

![Game over. Desktop screen](assets/images/images-readme/wireframes/desktop-3.png)

*Wireframe for how the help is displayed when the user clicks on the help ('?') button.*

![Modal screen for help button](assets/images/images-readme/wireframes/desktop-2.png)

## Technologies Used

### - Lenguages used

- HTML5: Mark-up language using semantic structure.
- CSS: Cascading style sheet used to style.
- JavaScript: Programming language.

### - Tools

- [Am I responsive](http://ami.responsivedesign.is/#): Was used to simulate how the game looks at different screen sizes.
- [Balsamiq wireframes](<https://balsamiq.com/>) : Was used for making wireframes of the game.
- [Beautifier](https://beautifier.io/) : Was used to organize in a better way the codes.
- [Coolors](https://coolors.co/3c3843-57db57-ede56e-ee5252-fafdf6) : Was used for checking the color contrast and finding the right shade of each color.
- [FontAwesome](https://fontawesome.com/) : Was used to add icons  and download images for a more playful website.
- [GitHub](https://github.com/) : Was used as the repository for the project's code after being pushed from Git.
- [Google fonts](https://fonts.google.com/) : Was used to import the fonts.
- [iTerm](https://iterm2.com/) : Was uset as a terminal to commit and Push to GitHub.
- [Jigsaw validator](https://jigsaw.w3.org/css-validator/) : Was used to validate the CSS file.
- [JSHint](https://jshint.com/) : Was used to validate the JavaScript file.
- [Lighthouse](https://developers.google.com/web/tools/lighthouse?hl=es) : Was used for performance tetsing.
- [Outwrite](https://www.outwrite.com/) : Was used for checking the grammar and spelling of the README file.
- [SVG Backgrounds](https://www.svgbackgrounds.com/) : Was used for selecting a background image and adapting the colors to match the color palette.
- [Visual Studio Code](https://code.visualstudio.com/) : Was used for version control.
- [WAVE](https://wave.webaim.org/): Was used for checking accessibility and color constrast.
- [W3C validator](https://validator.w3.org/): Was used to validate that the HTML file hasn't mistakes.

## Testing

1. ### Navigation

2. ### Game Functionality Test 1: Handling Clicks

3. ### Google Lighthouse Test #1: Performance

4. ### Browsers

5. ### Validators

- W3C HTML Test: Code passed the test without warnings or erros.

- W3C Jigsaw CSS Test: Code passed the test without errors.

- JSHint Test: Code passed the test without any important warnings.

## Deployment

### HOW THIS SITE WAS DEPLOYED

1. In the GitHub repository of the website, go to the "Settings", and click.

2. In the menu on the left side of the screen, go to the "Code and Automation" and click on "Pages".

3. Under the GitHub Pages, select the Main Branch from the dropdown menu.

4. Optionally select the folder in the following dropdown menu.

5. Save and automatically the site is published.

![Link of pusblished site](assets/images/images-readme/link-deploy-web.png)

### HOW TO FORK THE REPOSITORY

1. Go to the website's repository on Github.

2. Go to the "Fork" button on the right side of the screen and click.

3. Now you have a copy of the repository into your own GitHub account to make changes without affecting the original repository.

### HOW TO CLONE THIS SITE

1. Go to the website's repository  <https://github.com/iama3191/rock-paper-scissors-lizard-spock> on GitHub.

2. Click the "Code" button on the left side of the green "Gitpod" button.

3. Click the HTTPS and copy the link.

4. Open Gitbash.

5. Change the current working directory to where you want the cloned directory to be.

6. Type `git clone`, and then paste the URL you copied earlier.

7. To make changes to the website:

    7.1. Update the code as needed.

    7.2. Go to the terminal and add `git add .`

    7.3. Add `git commit -m "brief description of the update"`

    7.4. Add `git push`

Any updates commited to the Main Branch inmediately reflect in the hosted site.

## Credits

- Mentor support, guidance, and tips to improve my coding skills throughout the project:
  - Brian Macharia

- Information of the game:

  - <https://cjleo.com/2020/05/25/why-we-dont-play-rock-paper-scissors-lizard-spock/>

- Checking code information:
  - <https://developer.mozilla.org/>
  - <https://www.w3schools.com/>

- Checking use on mobile (iPhone SE 2nd generation):

  - Anna Mara Hrgetić Vitols

- Tutorial for using an array of objects for the game, and adapting to my vision:

  - [Web Dev Simplified](https://www.youtube.com/watch?v=1yS-JV4fWqY&t=783s)

- Information for color psychology:

  - <https://www.sensationalcolor.com/color-psychology/>
  - <https://www.colormatters.com/color-and-design/why-color-matters>

- Information for checking how to use markdown for the README file:

  - <https://www.markdownguide.org/basic-syntax/#images-1>

## Aknowlodgements
