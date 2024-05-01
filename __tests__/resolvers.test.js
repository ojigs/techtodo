const resolvers = require("../src/graphql/resolvers");
const Todo = require("../src/models/Todo");

jest.mock("../src/models/Todo", () => ({
  create: jest.fn(),
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
}));

describe("Resolvers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Mutation.createTodo
  describe("Mutation.createTodo", () => {
    it("should create a new todo", async () => {
      const input = {
        title: "Test Todo",
        description: "Test Description",
        completed: false,
      };
      Todo.create.mockResolvedValue(input);

      const result = await resolvers.Mutation.createTodo(null, { input });

      expect(result).toEqual(input);
      expect(Todo.create).toHaveBeenCalledWith(input);
    });
  });

  // Query.todos
  describe("Query.todos", () => {
    it("should return all todo items", async () => {
      const mockTodos = [
        { id: "1", title: "Todo 1" },
        { id: "2", title: "Todo 2" },
      ];
      Todo.find.mockResolvedValue(mockTodos);

      const result = await resolvers.Query.todos();

      expect(result).toEqual(mockTodos);
      expect(Todo.find).toHaveBeenCalled();
    });
  });

  // Query.todoById
  describe("Query.todoById", () => {
    it("should return a todo item by ID", async () => {
      const id = "1";
      const mockTodo = { id, title: "Test Todo" };
      Todo.findById.mockResolvedValue(mockTodo);

      const result = await resolvers.Query.todoById(null, { id });

      expect(result).toEqual(mockTodo);
      expect(Todo.findById).toHaveBeenCalledWith(id);
    });
  });

  // Mutation.updateTodo
  describe("Mutation.updateTodo", () => {
    it("should update an existing todo", async () => {
      const id = "1";
      const input = { title: "Updated Todo" };
      Todo.findByIdAndUpdate.mockResolvedValue({ id, ...input });

      const result = await resolvers.Mutation.updateTodo(null, { id, input });

      expect(result).toEqual({ id, ...input });
      expect(Todo.findByIdAndUpdate).toHaveBeenCalledWith(id, input, {
        new: true,
      });
    });
  });

  // Mutation.deleteTodo
  describe("Mutation.deleteTodo", () => {
    it("should delete an existing todo", async () => {
      const id = "1";
      Todo.findByIdAndDelete.mockResolvedValue({ id });

      const result = await resolvers.Mutation.deleteTodo(null, { id });

      expect(result).toEqual({ id });
      expect(Todo.findByIdAndDelete).toHaveBeenCalledWith(id);
    });
  });
});
