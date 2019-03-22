# Doctor Lookup

#### API project for Epicodus

_Published_ **March 22 2019**<br>
_Author_ **Kim McConnell**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Target Audience/Users](#target-audience/users)
1. [Product Requirements](#product-requirements)
1. [Development Specs](#development-specs)
1. [Stretch Goals](#stretch-goals)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
A website using the Better Doctor API that allows the user to enter search parameters for name and ailment. Site returns a list of ten doctors that fit criteria. Created for Epicodus Front End Development course.

### Learning Objective
Use API to get information and deliver it to the user. Search through information to deliver only relevant info. Separate business logic from UI logic. Hide API keys in a .env file.

### Target Audience/Users
* People searching for a doctor in their area to treat a specific condition, or searching for a specific doctor by name.

### Product Requirements
* Let the user enter some search terms: either medical issue or doctor name
* BetterDoctor API is queried for the search terms
* Resulting information is searched for most relevent data
* Return the doctor's details: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
* If no doctors fit search criteria _(note an error)_, return a notification to the user.

### Development Specs

Specification | Input | Output
------------- | ----- | ------
User can enter search term of injury/illness and get doctor list  | "Diabetes" | API call to BetterDoctor
UI displays the list of doctors that fit criteria (limit 10)  | API call | List Of Ten Doctors
UI displays the name, address, phone, website (if available), and if they take new patients. | API info as nested arrays and objects | Lisa Goldthwaite, MD<br>Practices:<br>2101 NE 139th St<br>Ste 265<br>Vancouver, WA 98686<br>3604872701<br>This office is accepting new patients.
An input which results in no doctors will give user a notification | API call with empty array | Sorry, there are no doctors like that in your area
An API call that fails will throw an Error with status, visible in console | API call which returns a status other than 200 | Error: OK (of course, it wouldn't actually be ok to throw the error)





### Stretch Goals
* Allow user to enter a location and search that area
* Plot the doctor's offices on Google Maps using their API
*

### Installation
* Clone from https://github.com/kimmcconnell/Doctor-Lookup.git
* Run `$ npm install`
* Go to <a href="https://developer.betterdoctor.com/">BetterDoctor API</a> and get your own API key <br>_Note: API calls are limited with the free key_
* Make a .env file in the main directory by typing `touch .env` in the terminal
* Open your new .env file and type `exports.apiKey = ` followed by your API<br>For example, if your key was 11111111111111112, you would type `exports.apiKey = 11111111111111112` in your .env file
* You're good to go!


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
