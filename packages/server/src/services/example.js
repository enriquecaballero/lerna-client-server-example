class ExampleService {
  constructor() {
    this.payload = { string: "Hello, Client!" };
  }
  getPayload = async () => {
    return this.payload;
  };
}

export default new ExampleService();
