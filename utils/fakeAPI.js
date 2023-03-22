const getGlobalConfig = async () => {
  const response = await fetch("http://localhost:3001/global");

  if (!response.ok) {
    throw new Error("Failed to fetch global config");
  }

  const json = await response.json();
  return json;
};

const getHealthCheck = async () => {
  await wait(5000);
  const response = await fetch("http://localhost:3001/healthcheck", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch healthcheck");
  }

  const json = await response.json();
  return json;
};

const getNews = async () => {
  // await wait(2500);
  const response = await fetch("http://localhost:3001/news");
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  return json;
};

const getNew = async (id) => {
  // await wait(2500);
  const response = await fetch(`http://localhost:3001/news/${id}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch new");
  }

  return json;
};

const editNew = async (nextNew) => {
  const response = await fetch(`http://localhost:3001/news/${nextNew.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nextNew),
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(error);
  }

  return json;
};

const wait = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export { getGlobalConfig, getNews, editNew, getNew, getHealthCheck };
