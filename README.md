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
- Now either build and deploy the ReadditBot-Client app or run in dev mode using ```npm start```
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
- currently lists the posts in reverse order (oldest first)
