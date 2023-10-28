const Graph = require("./graphs");

describe("graph implementation", () => {
  test("we can add verticies", () => {
    const myGraph = new Graph();
    myGraph.addVertex(3);
    myGraph.addVertex(5);
    expect(myGraph.adjacencyList.size).toBe(2);
  });
  test("we can return an array of graph verticies", () => {
    const myGraph = new Graph();
    myGraph.addVertex(3);
    myGraph.addVertex(5);
    expect(myGraph.getVerticies().length).toEqual(2);
  });
  test('we can add edge to the graph', () => {
    const myGraph = new Graph();
    const vertex1 = myGraph.addVertex(1);
    const vertex2 = myGraph.addVertex(2);
    myGraph.addEdge(vertex1, vertex2, 5);
    expect(myGraph.getEdges(vertex1).length).toBe(1)
  });
  test('we can add undirected edges to the graph', () => {
    const myGraph = new Graph();
    const vertex1 = myGraph.addVertex(1);
    const vertex2 = myGraph.addVertex(2);
    myGraph.addUndirectedEdge(vertex1, vertex2, 5);
    const edges1 = myGraph.getEdges(vertex1);
    const edges2 = myGraph.getEdges(vertex2);
    expect(edges1.length).toBe(1);
    expect(edges2.length).toBe(1);
  });
  test("we can get neighbors of a vertex", () => {
    const myGraph = new Graph();
    const vertex1 = myGraph.addVertex(1);
    const vertex2 = myGraph.addVertex(2);
    myGraph.addEdge(vertex1, vertex2, 5);
    const neighbors = myGraph.getNeighbors(vertex1);
    expect(neighbors.length).toBe(1);
    expect(neighbors[0]).toBe(vertex2);
  });
  test("we can return the size of the graph", () => {
    const myGraph = new Graph();
    myGraph.addVertex(1);
    myGraph.addVertex(2);
    expect(myGraph.size()).toBe(2);
  });
});