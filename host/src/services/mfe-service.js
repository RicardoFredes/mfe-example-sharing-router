const loadContainer = async (source, scope) => {
  const container = window[scope];
  if (container) return container;

  const script = document.createElement("script");
  script.src = source;
  script.async = true;
  document.head.append(script);
  return new Promise(
    (resolve) =>
      (script.onload = async () => {
        const newContainer = window[scope];
        await newContainer.init();
        return resolve(newContainer);
      })
  );
};

const loadRemoteModule = async (
  source,
  scope,
  module = "./app",
  type = "default"
) => {
  const container = await loadContainer(source, scope);
  const factory = await container.get(module);
  const Module = await factory();
  return Module[type];
};

const MfeService = { loadRemoteModule };

export default MfeService;
