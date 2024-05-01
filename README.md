# TechTodo 

## Overview

The TechTodo GraphQL API provides endpoints for managing todo items. It allows users to perform CRUD operations (Create, Read, Update, Delete) on todo items stored in a MongoDB database. The API is designed to be lightweight, using GraphQL for querying and manipulating data.

## Features

- **Create Todo**: Allows users to create a new todo item with a title, description, and completion status.
- **Update Todo**: Enables users to update an existing todo item, including modifying the title, description, or completion status.
- **Delete Todo**: Allows users to delete a todo item by its unique identifier.
- **Fetch Todos**: Retrieves a list of all todo items stored in the database.
- **Fetch Todo by ID**: Retrieves a specific todo item by its unique identifier.

## Technology Stack

- **Node.js**: The API is built using Node.js, with the Express framework.
- **GraphQL**: The API uses GraphQL for defining the schema and handling queries and mutations.
- **MongoDB**: Todo items are stored in a MongoDB database, and Mongoose is used for Object Data Modelling.
- **AWS Lambda**: The API is deployed as serverless functions using AWS Lambda.
- **Serverless Framework**: The API is deployed and managed using the Serverless Framework for simplified deployment and infrastructure management.

## Usage

To interact with the TechTodo GraphQL API, clients can send GraphQL queries and mutations to the designated endpoint. The API provides a comprehensive set of operations for managing todo items, allowing clients to create, update, delete, and fetch todos as needed.
