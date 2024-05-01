const Todo = require("../models/Todo");

const resolvers = {
  Query: {
    todos: async () => {
      try {
        return await Todo.find();
      } catch (error) {
        console.error("Error fetching todos:", error);
        throw new Error("Failed to fetch todos");
      }
    },
    todoById: async (_, { id }) => {
      try {
        return await Todo.findById(id);
      } catch (error) {
        console.error(`Error fetching todo with ID ${id}:`, error);
        throw new Error("Failed to fetch todo");
      }
    },
  },
  Mutation: {
    createTodo: async (_, { input }) => {
      if (!input.title) {
        throw new Error("Title is required");
      }

      try {
        const todo = await Todo.create(input);
        // await todo.save();
        return todo;
      } catch (error) {
        console.error("Error creating todo:", error);
        throw new Error("Failed to create todo");
      }
    },
    updateTodo: async (_, { id, input }) => {
      if (!input.title) {
        throw new Error("Title is required");
      }

      try {
        return await Todo.findByIdAndUpdate(id, input, { new: true });
      } catch (error) {
        console.error(`Error updating todo with ID ${id}:`, error);
        throw new Error("Failed to update todo");
      }
    },
    deleteTodo: async (_, { id }) => {
      try {
        return await Todo.findByIdAndDelete(id);
      } catch (error) {
        console.error(`Error deleting todo with ID ${id}:`, error);
        throw new Error("Failed to delete todo");
      }
    },
  },
};

module.exports = resolvers;
