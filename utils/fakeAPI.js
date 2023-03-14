const getGlobalConfig = async () => {
  try {
    const response = await fetch("http://localhost:3001/global");
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

const getNews = async () => {
  try {
    const response = await fetch("http://localhost:3001/news", {
      next: {
        revalidate: 120,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

const getNew = async (id) => {
  try {
    const response = await fetch(`http://localhost:3001/news/${id}`, {
      next: {
        revalidate: 0,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

const editNew = async (nextNew) => {
  try {
    const response = await fetch(`http://localhost:3001/news/${nextNew.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nextNew),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export { getGlobalConfig, getNews, getNew, editNew };
