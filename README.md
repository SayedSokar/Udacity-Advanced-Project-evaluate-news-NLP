## UDACITY-ADVANCED-PROJECT-EVALUATE-NEWS-NLP

This project is a part of Udacity's Front End Nanodegree Program and its main goals are to help learning the following:

1-Setting up Webpack
2-Sass styles
3-Webpack Loaders and Plugins
4-Creating layouts and page design
5-Service workers
6-Using APIs and creating requests to external urls

This project aims to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL of an article, the web page then dispalys sentiment analysis returned from [meaningcloud API](https://www.meaningcloud.com/products/sentiment-analysis), based on the contents of the article.

## Build Tools
* HTML
* CSS
* JavaScript
* Node
* Express
* Webpack
* meaningcloud API
* Jest
* Workbox

## Installation
Make sure Node and npm are installed from the terminal, and have been updated to the latest versions.
Note: I have wasted a lot of time because of that note (updated to the latest versions) specially with node-sass issues, upgraded the node-sass version to be the same as node version. with yarn just run: yarn add node-sass
 
```
node -v
npm -v
```

1. Move to the project folder
```
cd <project directory>
```
2. Clone the repo
```
git clone https://github.com/SayedSokar/Udacity-Advanced-Project-evaluate-news-NLP.git
```
3. Install all packages using npm
```
npm i
```
Note: obserive if there are any error during the installation, if errors comes, try to solve before executing the next steps.
```
5. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

6. Configure environment variables using dotenv package
    1. Install the dotenv package
   ```
   npm install dotenv
   ```
    2. Create a new `.env` file in the root of your project
    3. Fill the `.env` file with your API key like this:
   ```
   API_KEY=**************************
   ```
7. Start the project

Command | Action
:------------: | :-------------:
### To Run Project

**(Currently, prod mode allows you to see the results of the API fetch)**:
- cd into your new folder and run in prod mode
- `npm install`
- `npm run build-prod to generate a dist folder for prod`
- `npm run start to run the Express server on port 8080`

**Note:** The web page can be accessed with `localhost:8080`

8. Open browser at http://localhost:8081/

------

------------------------------------------------------------------------------------------
Note Regarding TEST:
-------------------
1-  I had an issue with the test cmd, it was refusing to run and giving error like below
    " TypeError: _micromatch(...).default.scan is not a function "
    issue solved by following the below steps:
    PROBLEM - it seems installing babel changed many nodes, yet it did NOT update the yarn.lock and package.json files accordingly.
    SOLUTION -
    $ yarn info |> made me realize some 2k files are out of date
    then ran
    $ yarn upgrade |> and it somehow sorted it but didn't compile yet
    then
    $ yarn add yarn |> to actually update yarn as it was 1.3.x and required 1.7.x

2-  regarding the server .js file and the follwoing issue:
    error message:  TypeError: app.address is not a function
    find the below link for solution
    https://stackoverflow.com/questions/33986863/mocha-api-testing-getting-typeerror-app-address-is-not-a-function
---------------------------------------------------------------------------------------------

Best Regards
Sayed Ramadan 

