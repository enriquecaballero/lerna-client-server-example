class ExampleService {
  constructor() {
    this.payload = { string: "Hello from Server!" };
  }
  getPayload = async () => {
    return this.payload;
  };
}

export default new ExampleService();
