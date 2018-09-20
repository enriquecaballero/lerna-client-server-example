import ExampleService from "../services/example";

class ExampleController {
  getHelloWorld = async (req, res) => {
    const payload = await ExampleService.getPayload();
    res.send(payload);
  };
}

export default new ExampleController();
