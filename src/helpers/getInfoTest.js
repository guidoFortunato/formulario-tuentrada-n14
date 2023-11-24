export async function getTokenPrueba(
  email = "gfortunato@tuentrada.com",
  password = "Correa.3030"
) {
  try {
    const res = await fetch("https://testapi.tuentrada.com/api/login", {
      next: { revalidate: 1800 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log({resToken: res})
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
export async function getDataPrueba(url) {
  try {
    // const { token, tokenExpires } = await getTokenPrueba();
    const res = await fetch(url, {
      // next: { revalidate: 0 },

      cache: 'no-store',
      credentials: "include",
      method: "GET",
      headers: {
        Authorization: `Bearer 4325|rnJjRmdLbpNAnlj3JFSLmdZDHy87MoOPzy8jhslG`,
        accept: "application/json",
      },
    });

    const data = await res.json();
    // console.log({data})
    return data;
  } catch (error) {
    console.log("error prueba");
  }
}

export async function getDataPruebaPost(url, email) {
  try {
    const res = await fetch(url, {
      method: "POST",
      cache: 'no-store',
      headers: {
        Authorization: `Bearer 4325|rnJjRmdLbpNAnlj3JFSLmdZDHy87MoOPzy8jhslG`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    console.log({res})
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error prueba");
  }
}
