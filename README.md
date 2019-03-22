# Doctor Lookup

#### API project for Epicodus

_Published_ **March 22 2019**<br>
_Author_ **Kim McConnell**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Target Audience/Users](#target-audience/users)
1. [Product Requirements](#product-requirements)
1. [Non-technical Requirements](#non-technical-requirements)
1. [Development Specs](#development-specs)
1. [Stretch Goals](#stretch-goals)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
A website using an API for www.thecocktaildb.com, letting the user select a cocktail based on entry criteria. Created for Epicodus Front End Development course.

### Learning Objective
Use API to get information and deliver it to the user. Search through information to deliver only relevant info. Separate business logic from UI logic. Hide API keys in a .env file.

### Target Audience/Users
* People searching for a doctor in their area to treat a specific condition, or searching for a specific doctor by name.

### Product Requirements
* Let the user enter some search terms: either medical issue or doctor name
* BetterDoctor API is queried for the search terms
* Resulting information is searched for most relevent data
* Return the doctor's details: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
* If no doctors fit search criteria _(note an error)_, return a notification

### Development Specs

Specification | Input | Output
------------- | ----- | ------
User can enter search term of injury/illness and get docotr list  | "Diabetes" | API get


### Stretch Goals
*
*
*

### Installation
* Clone from https://github.com/kimmcconnell/Doctor-Lookup.git
* Run `$ npm install`


### Known Bugs
* None identified

### Technologies Used
* HTML
* Sass with variables and mixins
* Javascript with jQuery
* API
* Tested with Karma and Jasmine

### License
[MIT](./LICENSE.txt)

Copyright (c) Kim McConnell
