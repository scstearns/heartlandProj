# Heartland Programming Challenge

Author: Susan Stearns

## Project Setup

Run `npm install` to install libraries, then run `npm run start` to start the application.

```
npm install
npm run start
```

## Design Description

The project is written in TypeScript for NodeJS and is intended to be run on the
command line. It prompts the user to enter contact information and adds that information
to the existing data (if any) in a local JSON file.

The user is prompted for each individual field. It is noted if the
field is required or optional. The user is given a validation prompt for
required fields when information is ommitted.

The user may enter up to two addresses for each contact and may enter an
infinit number of contacts before exiting the app. Prompts are given for each scenario.

The npm package `inquirer` was used for the CLI prompts. This allowed an easy
method for adding validation for required fields. The settings for the prompts
are currently hard coded in various objects but could be moved to a config file
and customized if needed.

By using TypeScript and saving the data in JSON format, the engineers can move
forward with confidence as they are provided with clear data structures, type
checking, and reusable sections of code that can be used as is or slightly
modified as they add the additional functionality.

Furthermore, a config.ts file has been added to support environment variables for
the purpose of having different settings for different environments or keeping
credentials and such secure. Default values have been added for this project so
there is no need for the user/tester to first create a .env file to run this
locally.

## Future features: Adding new fields and additional validation

- New fields can be added at any time to the existing types (with new types created as applicable). Fields and validation logic should be added to the settings for `inquirer prompts` when adding fields prior to building a GUI.
- The functions and constants for collecting the telephone number can be easily updated and renamed to add support for additional related fields such as email address, website, facebook url, etc. The pattern used for the name fields is a good example to follow.

## Extending the code

This project was created from a bare bones nodeJS installation. For a real project, I'd likely start with an already existing repo template that has the npm packages I need (e.g., fastify, express, NestJS, NextJS, etc). I'd also add jest for automated tests and use Cypress for integration test for the GUI.

## Moving to a GUI

- If typescript is used for the GUI, the `types.ts` file can be copied over to enforce data structure of data collected from form inputs.
- The current `inquirer` input prompts contain the current validation rules which can be reused
  and easily modified as appropriate for JavaScript validation of an HTML form. The prompts could
  also be modified to provide the rules for dynamically generating an html form.

## Moving to a DB

- The types provide the basic structure for 2 relational database tables (primary
  keys would need to be added to each type).
- The data collected in it's current state (a typed object) is easily accessible for adding functionality to write the data to a database via either GraphQL or writing standard SQL. The move to a DB could happen apart from the move to a GUI.
- The module processContact would need to be replaced by a module for upserting information to a database. The pieces to create a directory and read the existing file data to be updated with functionality to connect to the database and query the record count of the primary contacts table.
- The validation settings for each field can remain as part of their current objects or minimally moved around for the purpose of having validation within Node server.

## Design Patterns

I'm really not sure what to add here as I lack an engineer's design pattern vocabulary. For example, I wrote and used callbacks for years before I knew what the term meant and I still get thrown for a loop when I see/hear "use a Callback".

As for programming style, I've always been a procedural programmer but found functional programming to be a natural transition, especially when I started learning React with functional components and hooks. I have minimal experience writing classes; most of my exerpience has been within the NestJS framework where I've written my code in a functional style and then migrated it over to classes so it would work within Nest. I still have to "think" to set up a class.

## My Personal Retrospective

I turned this into a learning project for myself so I took more than a few hours to complete it. I also took the time to include aspects of things that I think are important (TypeScript, human readable code, friendly error messages for the user, etc.).

1. My personal laptop is set up for working on a LAMP stack. While I had nodeJS installed, it was an older version so a few hours were taken with the intial set up and fumbling through my mistakes in getting my dev tools set up the way I like. I overcomplicated trying to get eslint and prettier to play nice together. I finally got prettier working the way I like within vscode.
2. It's been so long since I've collected input from a CLI and written data to the filesystem that it seemed almost new to me. While I have added to work others have done in NodeJS that involved accepting input from a CLI and exporting data from an external service, I have never used NodeJS to write a CLI or used the Node FS library on a project that I started from scratch. Most of my past experience writing to the filesystem is with PHP and that's only been on the rare occasion for a hacky purpose to be used only on my local machine. I had to research the tools and packages available to do this work and fumbled a lot through the little things (e.g, realizing that the directory has to exist before you can write a file in it - I think I made the same mistake with PHP when I did this 2 years ago).
3. Once I succeded in collecting data from the CLI and writing it to a file, I realized that I forgot to prompt the user for a second address and what I was writing to the file wasn't going to match my types - I'd originally written the file as a tab delimited text file - that wasn't going to meet the requirements for an optional 2nd address - time to refactor to add prompts for a 2nd address and save the file as JSON (should have done this part in the first place).
4. I don't want to have to restart the app every time I want to add a new contact! That's no good. So a few more tweaks were added to make it more user friendly.
