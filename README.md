# ReadditBot
# https://readdit-bot.herokuapp.com/

## Instructions
- Create an account on reddit
- Generate a key and secret here: https://old.reddit.com/prefs/apps/
- Input relevant info into the .env file provided
- Run using '''npm start'''
- Look at comments stream in from r/all!

## Description
Currently just displays comments as they are posted to r/all. Additional functionality to be introduced as I think of them.

## Issues
While this is hosted via Heroku at https://readdit-bot.herokuapp.com/ it will be unlikely to work as:
- the output is currently limited to the terminal
- Heroku kills the application after a short duration as it is on a free dyno
