# ReadditBot

## Live site
https://readdit-bot.netlify.com/ (client)

## Description
Split server/client which takes the latest posts from r/aww on Reddit and displays all new post's images for the user to look through.

## Instructions
- Create an account on reddit
- Generate a key and secret here: https://old.reddit.com/prefs/apps/
- Input relevant info into the .env file provided
- Run using ```npm start```
- Now clone the client project from https://github.com/YvesDesjardins/ReadditBot-Client and either build and deploy the app or run in dev mode using ```npm start```
- Go to the correct domain provided by starting the client and browse cute photos!

## Stack
- Back
  - Express
  - NodeJS
  - Snoowrap (Reddit API wrapper)
  - ws
  - Mocha + Chai
- Front
  - React (create-react-app)
  - JSX

## Issues
- Let me know if you find any!

## Planned features
- Machine learning + computer vision to filter based on animals in the photos
- Store posts to Redis/other db rather than using a buffer in memory on back-end
