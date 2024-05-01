const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
    todoById(id: ID!): Todo
  }

  input TodoInput {
    title: String!
    description: String
    completed: Boolean
  }

  type Mutation {
    createTodo(input: TodoInput!): Todo!
    updateTodo(id: ID!, input: TodoInput!): Todo!
    deleteTodo(id: ID!): Todo!
  }
`;

module.exports = typeDefs;
