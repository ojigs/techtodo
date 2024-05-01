const { ApolloServer } = require("apollo-server-lambda");
const typeDefs = require("./src/graphql/schema");
const resolvers = require("./src/graphql/resolvers");
const connectDB = require("./src/db");

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  formatError: (err) => {
    console.error(err);
    return err;
  },
});

exports.handler = server.createHandler({
  cors: {
    origin: "*",
    credentials: true,
  },
});
