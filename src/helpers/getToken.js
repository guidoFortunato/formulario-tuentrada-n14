

const getToken = async (email, password) => {
  
  try {
    const response = await fetch("https://testapi.tuentrada.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Error getToken !response.ok: ${response.status}. ${response.statusText}`
      );
    }

    const data = await response.json();
    const token = data.token;
    const tokenExpires = new Date(data.expired_at).getTime();
    return { token, tokenExpires };
  } catch (error) {
    throw new Error(`Error catch getToken: ${error}`);
  }
};

export default getToken
