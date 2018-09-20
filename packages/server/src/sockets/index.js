import echo from "./echo";

const namespaces = {
  echo
};

export default io => {
  return Object.keys(namespaces).reduce((previous, key) => {
    const Namespace = namespaces[key];
    return { ...previous, [key]: new Namespace(io) };
  }, {});
};
