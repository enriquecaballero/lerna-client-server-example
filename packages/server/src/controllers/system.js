import SystemService from "../services/system";

class SystemController {
  getSystemInfo = async (req, res) => {
    const payload = await SystemService.getSystemInfo();
    res.send(payload);
  };
  emitSystemInfo = async (req, res) => {
    const { echo } = req.app.get("io");
    const payload = await SystemService.getSystemInfo();
    echo.namespace.emit("message", payload);
    res.sendStatus(200);
  };
}

export default new SystemController();
