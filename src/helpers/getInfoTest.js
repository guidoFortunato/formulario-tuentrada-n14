export async function getDataPrueba(url) {
  const res = await fetch(url, {
    headers: {
      Authorization: "Bearer 2861|71cMVUWNgT6Bovm4fNUxkADKfZdMDbqUoZ9qGMrD",
    },
  });
  const data = await res.json();
  return data;
}

export async function getTokenPrueba(email = "gfortunato@tuentrada.com", password = "Correa.3030") {
  try {
    const res = await fetch("https://testapi.tuentrada.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
        throw new Error(
          `Error getToken !res.ok: ${res.status}. ${res.statusText}`
        );
      }

    const data = await res.json();
    const { token } = data;
    const tokenExpires = new Date(data.expired_at).getTime();
    return { token, tokenExpires };
  } catch (error) {
    throw new Error(`Error catch getToken: ${error}`);
  }
}
