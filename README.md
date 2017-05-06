# React Animation Loaders
###	Composable, CSS agnostic, loading animation react components
### ***[DEMO](https://jefabrah.github.io/react-animation-loaders/)*** 

### Objectives
- Compostable
	- color
	- size
	- animation speed
	- fixed/unfixed
- CSS Agnostic


### Getting Started

***NOTE:*** This package is still in development and not yet published to the npm repository

Install the package
<br>
`yarn add react-animation-loaders` 
<br> or <br>
`npm i -S react-animation-loaders`

### Configuration

|PROP NAME		    |ACCEPTED TYPES  |DESCRIPTION | DEFAULT |
|:---|---|---|---|
|`loading`    |**Boolean**  |	Displays loading animation while the value is  true, and it's child (wrapped) components while false.	|false |
|`duration`   |**Number**  | The duration of the loading animation. Typically used to adjust animation speed.|  loader specific |
|`size `   |**String** <br> `sm` `md` `lg`   | The loaders' size. Takes one of three possible options: <br> small(`'sm'`) medium(`'md'`) or large(`'lg'`)	| medium |
|`loaderColor`   |**String**: hex, or rgba   | The loaders' color | loader specific| 
|`backgroundColor `   |**String**: hex, or rgba  | The loaders' background color | white (#fff) |
