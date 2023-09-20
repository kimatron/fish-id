![Animal Shelter Logo](documentation/yingwen_logo.png)

# *YINGWEN*

YINGWEN app was build in order to ease the struggles that Chinese students experience daily. Since Chinese children are not allowed to study English besides school facilities nowadays, they have to attain tons of information for a short period by themselves. This app will help them to learn English and get the highest grades in their final exams. YINGWEN app is mainly aimed at enhancing English skills and passing the final English exams at primary and middle schools.

The site can be accessed by this [link](https://iuliiakonovalova.github.io/flash_cards/)

![Responsive Mockup](documentation/responsive_mockup.png)


---
## User Stories

### First Time Visitor Goals:

* As a First Time Visitor, I want to easily understand the main purpose of the app, so I can learn more about this app.
* As a First Time Visitor, I want to be able to easily navigate through the app, so I can find the content.
* As a First Time Visitor, I want to engage in learning, so I can boost my knowledge in English.

### Returning VisitorGoals:

* As a Returning Visitor, I want to see various quiz, so I can practice different skills in English.
* As a Returning Visitor, I want to access information at one click, so I can learn at my own pace.

### Frequent Visitor Goals:
* As a Frequent User, I want to get constant access to learning materials, so I can continue learning.
* As a Frequent User, I want to have different options for studying, so I can develop my English skills. 

## Features

+ ### Menu Page

    - Represent: 

        * the main goal of the application.
        * Emphasize the the easiness of the using the application.
        * Provides options for learning.

    ![Menu Page](documentation/app_features/menu_page_screenshot.png)



    - Menu page has 3 main buttons:

        1. Flash Cards Button leads to the page where the user can learn and practice English vocabulary;

        1. Grammar Quiz Button leads to the page where the user can learn and practice English grammar;

        1. Spelling Quiz Button leads to the page where the user can practice spelling of English words.

    - It also has a button at the top right corner of the screen, which opens modal window with contact information;

    ![Flash Card Page](documentation/app_features/menu_page_contact_screenshot.png)
​
---

+ ### Flash Cards Page

    - It has a button at the top left corner of the screen, which leads to the menu page;

    - It has a button at the top right corner of the screen, which opens modal window with instructions for the quiz;

    ![Flash Card Page](documentation/app_features/cards_page_info_screenshot.png)

    - It has Flash Cards, which consist a word's topic and a descriptive picture of word;

    - It has a button, which replace the current word with another one; 

    ![Flash Card Page](documentation/app_features/cards_page_front_screenshot.png)

    - After clicking on the card:  

        - Card has the key word, IPA of the word, and sound buttons, which allow the user to listen to the correct American and British pronunciation of the word:

    ![Flash Card Back Page](documentation/app_features/cards_page_back_screenshot.png)

---

+ ### Grammar Quiz Page

    - It has a button at the top left corner of the screen, which leads to the menu page;

    - It has a button at the top right corner of the screen, which opens modal window with instructions for the quiz;

    ![Grammar Quiz Info Page](documentation/app_features/grammar_quiz_page_info_screenshot.png)

    - It has a card with a question and a grammar task;
    
    - It has 4 probable answers for the question;
    
    - It has a button and the card to go to another question;

    ![Grammar Quiz Page](documentation/app_features/grammar_quiz_page_screenshot.png)

    - When the user click on the right answer, the answer's background color changes to green:

    ![Grammar Quiz Page Correct Answer](documentation/app_features/grammar_quiz_page_correct_answer_screenshot.png)


    - When the user click on the wrong answer, the answer's background color changes to light-pink, but the user allowed to find the correct answer anyway:

    ![Grammar Quiz Page Wrong Answer](documentation/app_features/grammar_quiz_page_wrong_answer_screenshot.png)

---

+ ### Spelling Quiz Page

    - It has a button at the top left corner of the screen, which leads to the menu page;

    - It has a card with a an audio question;

    - Card has 2 sound buttons -  allows the user to listen to American and British pronunciation in order to guess the right word:
    
    - It has input where the user can type his or her guess;

    - It has a check button to check whether the spelling of the user was correct;

    - It has a button at the bottom, which leads to another audio task:

    ![Spelling Quiz Page](documentation/app_features/spelling_quiz_page_screenshot.png)
    
    - When the user the spelling of the word is correct, the input background color changes to green and the user can see the original word;

    ![Spelling Quiz Page Correct Answer](documentation/app_features/spelling_quiz_page_correct_answer_screenshot.png)

     When the user the spelling of the word is wrong, the input background color changes to pink and the user can see the original word;

    ![Spelling Quiz Page Wrong Answer](documentation/app_features/spelling_quiz_page_wrong_answer_screenshot.png)

---

## Flowchart

The flowchart represent the logic of the application:

  ![Flash Card Page](documentation/app_flowchart.png)

---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used to add the styles and layout of the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - was used to arrange items simmetrically on the pages.
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) - was used to make "gallery" and "contact" pages responsive.
- [CSS roots](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) was used to declaring global CSS variables and apply them throughout the project. 
- [Balsamiq](https://balsamiq.com/) was used to make wireframes for the website.
- [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.
- [GIMP](https://www.gimp.org/) was used to make and resize images for the README file.


---
## Design

![Background Color](documentation/design/background_color.png)
Deep Dark Purple Color was used to reduce visual pressure for the user.

![Main Blue Color](documentation/design/main_blue_color.png)
Soft blue color was used as the main color for educational content due to its psychological effect: help the user to calmly concentrate on the question.

![Accent Text Color](documentation/design/accent_text_color.png)
Dark Purple color was used to increase the contrast between the background and the text and boost the readability of the content.

![Neutral Text Color](documentation/design/neutral_text_color.png)
Soft pinkish color was used for the title and call to action content in order to attract more user's attention toward educational content.

![Highlight Color](documentation/design/highlight_color.png)
Yellow Color was used to highlight the task in the grammar quiz question in order to draw user's attention how to answer the question.

![Input Color](documentation/design/input_color.png)
Light Blue Color was used as a background color of the input in order to calm down the user as he or she is about to answer question since this color creates a sense of tranquility.

![Input Correct Answer Color](documentation/design/input_color_correct_answer.png)
Soft Green Color was used to highlight the correct answer in quiz.

![Input Wrong Answer Color](documentation/design/input_color_wrong_answer.png)
Soft Pink Color was used to highlight the wrong answer in quiz, but at the same time reduce psychological pressure on the user.

![Font](documentation/design/primary_font.png)
'Segoe UI' (Tahoma, Geneva, Verdana, sans-serif) Font was used as the main font of the application in order to increase readability of the content on the pages.

---

### Bugs
+ **Solved bugs**


1. The function that initiates the flipping of a flashcard did not allow the click on the pronunciation buttons to listen to the correct pronunciation of a word.

    - *Solutions:* Add ```event.stopPropagation();``` method to the speakFunction(), which takes two parameters: event and lang.
    
1. The audio played '/' as "slash" for the words that had two spelling variations.
        
    - *Solution:* Add ```replace();``` method with two parameters ```currentWord.replace('/', 'or');```to the speakFunction().

1.  The settings for input required in spelling_quiz.html did not work; therefore, if the input was empty, the user could check the spelling without typing a word in the input area.

    - *Solution:* Add if-else statement to the checkSpelling function that disables Check button if the input is empty and enable Check button if the input is not empty.

```js
const checkSpelling = function () {

  let answerInput = document.querySelector('#word__key--input');
  if (answerInput.value === '') {
    btnCheck.getAttribute("aria-disabled") === "true";
  } else {
    document.getElementsByClassName('word__key')[0].innerText = currentWord;
    btnCheck.getAttribute("aria-disabled") === "false";
    if (answerInput.value.toLowerCase() === currentWord) {
      answerInput.style.backgroundColor = '#008a5a';
    } else {
      answerInput.style.backgroundColor = '#c26ee3';
    }
  }
}
```

+ **Unsolved bugs**

    - None.

---

+ **Mistakes**

    - Mistakes were made while committing changes.

    - There were 5 mistakes in the following commits:

        + **4489f6d**: Fixed size of the cards for small screens

        *Supposed to be:* Fix size of the cards for small screens

        + **5d24aaa**: Added images for the chrome browser in readme file
        
        *Supposed to be:* Add images for the chrome browser in readme file

        + **cc83772**: Ad header element to html files
        
        *Supposed to be:* Add header element to html files

        + **9cb8fa5**: Removed back side of the card when the new card is loaded
        
        *Supposed to be:* Remove back side of the card when the new card is loaded

        + **cdbd9b6**: Tyding up css file
        
        *Supposed to be:* Tidy up css file

        + **e5c938b**: Styling menu page and contact button
        
        *Supposed to be:* Style menu page and contact button


## Testing


**COMPATIBILITY:**

+ The app was tested on the following browsers: Chrome, Firefox, Brave, Edge:

  - Chrome:

  ![Menu Page](documentation/compatibility/chrome_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/chrome_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/chrome_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/chrome_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/chrome_spelling_quiz_page.png)
  
  - Firefox:

  ![Menu Page](documentation/compatibility/firefox_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/firefox_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/firefox_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/firefox_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/firefox_spelling_quiz_page.png)

  - Brave:

  ![Menu Page](documentation/compatibility/brave_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/brave_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/brave_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/brave_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/brave_spelling_quiz_page.png)

  - Edge:

  ![Menu Page](documentation/compatibility/edge_menu_page.png)
  ![Flash Cards Page. Front](documentation/compatibility/edge_cards_front_page.png)
  ![Flash Cards Page. Back](documentation/compatibility/edge_cards_back_page.png)
  ![Grammar Quiz Page](documentation/compatibility/edge_grammar_quiz_page.png)
  ![Spelling Quiz Page](documentation/compatibility/edge_spelling_quiz_page.png)


  - Noted Issues:
    - The Speech Synthesis does not work on Brave browser;
    - vw does not work properly in Edge browser;


+ The app was checked by devtools implemented on Firefox and Chrome browsers.

+ The app was checked with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

  1. Mobile Screens:

      - Mobile 320x480:

      ![Mobile 320x480](documentation/responsiveness/mobile_320_480.gif)

      - Mobile 320x568:

      ![Mobile 320x568](documentation/responsiveness/mobile_320_568.gif)

      - Mobile 360x640:

      ![Mobile 360x640](documentation/responsiveness/mobile_360_640.gif)

      - Mobile 375x667:

      ![Mobile 375x667](documentation/responsiveness/mobile_375_667.gif)

      - Mobile 384x640:

      ![Mobile 384x640](documentation/responsiveness/mobile_384_640.gif)

      - Mobile 411x731:

      ![Mobile 411x731](documentation/responsiveness/mobile_411_731.gif)

      - Mobile 414x736:

      ![Mobile 414x736](documentation/responsiveness/mobile_414_736.gif)
      
  1. Tablets Screens:

      - Tablet 600x960:
        
      ![Tablet 600x960](documentation/responsiveness/tablet_600_960.gif)

      - Tablet 768x1024:

      ![Tablet 768x1024](documentation/responsiveness/tablet_768_1024.gif)

      - Tablet 800x1280:
        
      ![Tablet 800x1280](documentation/responsiveness/tablet_800_1280.gif)

      - Tablet 1366x1024:

      ![Tablet 1366x1024](documentation/responsiveness/tablet_1366_1024.gif)
      
  1. Desktop Screens:

      - Desktop 1024x600:
        
      ![Desktop 1024x600](documentation/responsiveness/desktop_1024_600.gif)

      - Desktop 1024x800:

      ![Desktop 1024x800](documentation/responsiveness/desktop_1024_800.gif)

      - Desktop 1366x768:
        
      ![Desktop 1366x768](documentation/responsiveness/desktop_1366_768.gif)

      - Desktop 1440x900:

      ![Desktop 1440x900](documentation/responsiveness/desktop_1440_900.gif)

      - Desktop 1600x900:
        
      ![Desktop 1600x900](documentation/responsiveness/desktop_1600_900.gif)

      - Desktop 1680x1050:

      ![Desktop 1680x1050](documentation/responsiveness/desktop_1680_1050.gif)

      - Desktop 1920x1080:
        
      ![Desktop 1920x1080](documentation/responsiveness/desktop_1920_1080.gif)

      - Desktop 1920x1200:

      ![Desktop 1920x1200](documentation/responsiveness/desktop_1920_1200.gif)


+ The functionality of the links in the app was checked as well by different users.

---
## Validator testing
+ ##### HTML
    - No errors or warnings were found when passing through the official [W3C](https://validator.w3.org/) validator.
      - Menu Page:
          ![Menu Page HTML Validator](documentation/validators_testing/menu_page_html_validator.png)
      - Card Page:
          ![Cards Page HTML Validator](documentation/validators_testing/flash_cards_page_html_validator.png)
      - Grammar Quiz:
          ![Grammar Quiz Page HTML Validator](documentation/validators_testing/grammar_quiz_page_html_validator.png)
      - Spelling Quiz:
          ![Spelling Quiz Page HTML Validator](documentation/validators_testing/spelling_quiz_page_html_validator.png)
    
+ ##### CSS
    - No errors or warnings were found when passing through the official [W3C (Jigsaw)](https://jigsaw.w3.org/css-validator/#validate_by_uri) validator except the warnings that: root variable (  --linear-grad) could not be checked and -webkit-backface-visibility - is unknown. However, css code works perfectly. 

    ![CSS Validator Errors](documentation/validators_testing/w3c_validator_errors.png)
    ![CSS Validator Warnings](documentation/validators_testing/w3c_validator_warnings.png)


+ ##### JS
    - No errors or warnings were found when passing through the official [JSHint](https://jshint.com/) validator except the warnings that   

      - Cards:

          ![JSHint Validator Cards JS](documentation/validators_testing/jshint_flash_cards_js.png)


      - Grammar Quiz:

          ![JSHint Validator Grammar Quiz JS](documentation/validators_testing/jshint_grammar_quiz_js.png)


      - Spelling Quiz:

          ![JSHint Validator Spelling Quiz JS](documentation/validators_testing/jshint_spelling_quiz_js.png)


+ ##### Accessibility and performance 
    - Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.

      - Menu Page:

          ![Menu Page Performance Score](documentation/lighthouse_report/menu_page_performance.png)

      - Cards Page:

          ![Cards Page Performance Score](documentation/lighthouse_report/flash_cards_performance.png)

      - Grammar Quiz:

          ![Grammar Quiz Page Performance Score](documentation/lighthouse_report/grammar_quiz_performance.png)

      - Spelling Quiz:

          ![Grammar Quiz Page Performance Score](documentation/lighthouse_report/spelling_quiz_performance.png)


---
## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](https://github.com/iuliiakonovalova.github.io/flash_cards/), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://iuliiakonovalova.github.io/flash_cards/)

---

## Local Deployment

In order to make a local copy of this project, you can clone it.
In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/IuliiaKonovalova/flash_cards.git`

- Alternatively, if you use Gitpod, you can [click here](https://gitpod.io/#https://github.com/IuliiaKonovalova/flash_cards), which will start the Gitpod workspace for you.

---

## Credits

+ #### Content

  - Inspiration for the come from my friends whose children are put in tough position at schools nowadays.
  - IPA for each word was taken from [Cambridge Dictionary](https://dictionary.cambridge.org/).


+ #### Media

  - All the images for the website were taken from my own personal collection, or my friends Tony Land and Richard Whitcombs personal collection with permission. [Unsplash](https://unsplash.com/). 
    
    + Vegetables: [artichoke](https://unsplash.com/photos/ErMaQGihZvI), [asparagus]




  - All images were compressed by using the website [Compress JPEG](https://compressjpeg.com/).

  - All images for the gallery were resized by using the website [IMGonline.com.ua](https://www.imgonline.com.ua/eng/resize-image.php).
    
  - Images for the README file were made or edited with [GIMP](https://www.gimp.org/).

  - Screenshots for the readme file was made with [FlameShot](https://flameshot.org/) and [LightShot](https://app.prntscr.com/en/index.html).

  - Screenshots for the readme file was made with [Kazam](https://launchpad.net/kazam)

  - GIFs were made using the website [EzGif](https://ezgif.com).


---

## Acknowledgements

[Julia](https://github.com/IuliiaKonovalova)

I am massively thankful to my mentor Julia for her guidance and valuable advice! Staring at a screen can play devil mind tricks on you!! aha


---

## Wireframes

### Mobile devices

![Menu Page. Mobile Screen](documentation/wireframes/mobile_menu_page.png)
![FCs Page. Front. Mobile Screen](documentation/wireframes/mobile_cards_page.png)
![FCs Page. Back. Mobile Screen](documentation/wireframes/mobile_cards_page_back.png)
![Grammar Quiz Page. Mobile Screen](documentation/wireframes/mobile_grammar_quiz_page.png)
![Spelling Quiz Page. Mobile Screen](documentation/wireframes/mobile_spelling_quiz_page.png)

### Tablet devices

![Menu Page. Tablet Screen](documentation/wireframes/tablet_menu_page.png)
![FCs Page. Front. Tablet Screen](documentation/wireframes/tablet_cards_page.png)
![FCs Page. Back. Tablet Screen](documentation/wireframes/tablet_cards_page_back.png)
![Grammar Quiz Page. Tablet Screen](documentation/wireframes/tablet_grammar_quiz_page.png)
![Spelling Quiz Page. Tablet Screen](documentation/wireframes/tablet_spelling_quiz_page.png)

### Desktop devices

![Menu Page. Desktop Screen](documentation/wireframes/desktop_menu_page.png)
