# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned
21/9 
Ik ben begonnen met het lezen over flexbox. Jaren geleden bezig geweest met HTML en CSS dus het is echt graven en zoeken. (wat is <div> ook alweer? oef... :)
Na het lezen over flexbox ben ik begonnen met het bekijken van de screenshots. Het lijkt me logich om de tekst op te delen in drie afzonderlijke stukjes die dan gestyled worden met CSS.  
Daarnaast is er een voorbeeld met flexbox waarin dit gebruikt wordt.

Dus:
1. Met HTML 
blokje sedans
	Daarin plaatje icon-sedans
	Omschrijving
	Knop Learn more
etc
--> gedaan! :-)
Blokjes 
--> blokjes maken


Volgens mij is <div> de juiste keuze met classes?
Het kan ook met <id> of zelfs met HTML layout --> semantics

Ik ga voor Sematic elements omdat deze het duidelijkst omscchrijven wat de inhoud van de website is.
Ik verdeel de drie blokjes in drie sections.
scratch that. Ik ga door met <div> omdat ze niet weten of je dat met sections kan doen.

Oke. Dus <div> en <class> werken samen.
<div> is de container en <class> wijst naar een style of <stylesheet>
--> gelukt!


2. Daarna gaan stylen met stylesheets?
Dit is ingewikkelder dan het lijkt;
- achtergrondkeur van pagina
-kleuren van de vakjes
- lettertype van headers, text, buttons
header --> bijna wit, 
- kleur van lettertype headers, text, buttons

- veranderen van kleur buttons na bezoek

- lettertype van buttons
	
3. Daarna met flexbox de blokjes uitlijnen

Punt 1: 
Ik moet eerst blokjes gaan maken
Het blokje is als volgt verdeeld
begin blokje
Plaatje --> title SEDANS --> paragraph tekst --> button Learn More
eind blokje

27/9 We zijn er weer, jeej!

Zo langzamerhand wordt de code lastiger leesbaar en wordt ik gedwongen om naar CSS te gaan kijken. Ik heb de CSS tutorial van W3schools er even bij gepakt.

Eerste les: CSS Selectors
Met selectors kies je welke HTML elementen op de pagina gestyled worden.
algemeen
selector 	declaration

p { property: value; }

 - Verschillende selectors voor verschillende categorieen
id selector voor een specifiek element
#para1 { text-align: center }

Class selector voor een groep elementen die je wil stylen
.center {text-align: center; }

of zelfs specfieke elementen kun je de class meegeven
p.center { text-align: center }

En universele selector voor elk HTML element
* {text align: center}

Je kunt ook selectors groeperen die dezelfde definities hebben.
h1, p {text-align; center}

- geleerd hoe ik een externe stylesheet kan maken.


Verder met het stylen;
Ik moet nu de grootte van de blokjes aanpassen en de layout op de pagina. Op ware grootte zitten er margins op de pagina tussen de onderdelen in een blokje, tussen binnen en buitenlijnen en hoe groot de pagina wordt weergegeven.

DESKTOP
breedte x hoogte

max grootte is 1440 bij 800px 
Dit is denk ik de container

border naar blokjes is 260 x 170px 
dit is denk ik de borders van de container
in blokjes is border: 40 x 50p x (children)


MOBILE 375 x 1502(?)
border: 20 x 90 px
in blokjes gelijk aan DESKTOP

```
----
Oke, het gaat niet om de maximale grootte in pixels.

28/9 
Het gaat dus niet om de precieze grootte, het moet relatief blijven.
Dat betekent dat ik mijn style ' vrijblijvend' moet aanpassen.

To Do:
- tekst loopt nog niet zoals het design. Deze is ook nog heel rechthoekig vergeleken met mijn vierkantjes

- Buttons kloppen nog niet helemaal -> rounded

- Schoonmaken CSS bestand --> dat is makkelijk
- Border van container is niet oke. Deze moet grijs zijn.
--> ik denk dat de border en tekstdoorloop hetzelfde kunnen zijn. -->die hint

Hint van iemand: overflow in container?

Ik zie dat de tekst en button 'verschuift' afhankelijk van de mobile of desktop.
Er zit heel veel ruimte in de desktop tussen tekst en button. Bij mobiel is dat niet zo. 
De verhoudingen van de cards verandert ook (hoogte/breedte)

--> ondertussen de background, borders en corners gefikst. 

--> ik heb wat padding toegevoegd en de ruimte tussen de regels aangepast.

Uiteraard fikst dat de cards-hoogte nog niet...
Terug naar overflow?

Wat ik eigenlijk wil is dat de items automatisch de verticale ruimte vullen.
dus de ruimte in de flex-items moet gespecificeerd worden?

overflow

4-10
Goedemorgen. Begonnen met flexbox properties en de ruimte ervoor.
Allereerst eens gekeken naar rem units.
Als ik het goed begrijp correspondeert de rem unit met de base size van het root html element en dat is 16px.
elke 2px is 0.125rem
Dit is onhandig dus html root wordt geschreven in 62,5%
{font-size: 62,5%} en dat komt overeen met 10px

1.4 rem is dan 14px

Als ik het zo lees werkt het beter dan px; is flexibeler in responsive design.

terug naar flexbox:
https://www.youtube.com/watch?v=rkXhKgKQ8Vs

Gebruik gemaakt van flex-basis om de grootte te specificeren. Dat lijkt te werken.
De button gaat echter nog steeds mee met de tekst. Die moet aan de onderkant plakken. Ik denk dat ik aan moet geven in de cards.

5-10 
Button gister aangepast:
Ja dat klopte maar het lag ingewikkelder
de Button --> position absolute
De cards --> position relative

Buttons moeten nog aangepast worden --> on hover
- kleur lettertyoe
- kleur achtergrond
- kleur border
- muishandje







