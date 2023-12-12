export async function getTokenPrueba( email = "gfortunato@tuentrada.com", password = "Correa.3030" ) {
  try {
    const res = await fetch("https://testapi.tuentrada.com/api/login", {
      next: { revalidate: 86400 },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // console.log({resToken: res})
    if (!res.ok) {
      throw new Error(
        `Error getToken !res.ok: ${res.status}. ${res.statusText}`
      );
    }

    const data = await res.json();
    const { token } = data;
    const tokenExpires = new Date(data.expired_at).getTime();
    // console.log({token})
    return { token, tokenExpires };
  } catch (error) {
    throw new Error(`Error catch getToken: ${error}`);
  }
}

export async function getDataPrueba(url) {
  try {
    const { token } = await getTokenPrueba();

    const res = await fetch(url, {
      // next: { revalidate: 3600 },
      cache: 'no-store',
      credentials: "include",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });
    // console.log({getDataPrueba: res})
    const data = await res.json();
    // console.log({getDataPrueba: data})
    return data;
  } catch (error) {
    console.log({error}, "error prueba");
  }
}

export async function getDataCache(url) {
  try {
    const { token } = await getTokenPrueba();

    const res = await fetch(url, {
      next: { revalidate: 10800 },
      // cache: 'force-cache',
      credentials: "include",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });
    // console.log({getDataPrueba: res})
    const data = await res.json();
    // console.log({dataCache: data})
    return data;
  } catch (error) {
    console.log({error}, "error prueba");
  }
}


export async function getDataPruebaStorage(url) {
  const tokenStorage = localStorage.getItem("token");
  const tokenExpiresStorage = localStorage.getItem("tokenExpires");

  try {
    if (tokenStorage && tokenExpiresStorage) {
      if (tokenExpiresStorage > Date.now()) {
        const res = await fetch(url, {
          // next: { revalidate: 0 },

          cache: "no-store",
          credentials: "include",
          method: "GET",
          headers: {
            Authorization: `Bearer ${tokenStorage}`,
            accept: "application/json",
          },
        });

        const data = await res.json();
        // console.log({data})
        return data;
      } else {
        const { token, tokenExpires } = await getTokenPrueba();
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpires", tokenExpires);
        const res = await fetch(url, {
          // next: { revalidate: 0 },

          cache: "no-store",
          credentials: "include",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        });

        const data = await res.json();
        // console.log({data})
        return data;
      }
    }
    if (tokenStorage === null && tokenExpiresStorage === null) {
      const { token, tokenExpires } = await getTokenPrueba();

      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpires", tokenExpires);

      const res = await fetch(url, {
        // next: { revalidate: 0 },

        cache: "no-store",
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });

      const data = await res.json();
      // console.log({data})
      return data;
    }
  } catch (error) {
    console.log({error}, "error prueba");
  }
}

export async function sendDataEmail(url, email) {
  const { token } = await getTokenPrueba();
  try {
    const res = await fetch(url, {
      method: "POST",
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    console.log({sendDataPost: res})
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({error}, "error prueba");
  }
}

export async function sendDataTickets(url, email, name, content, itilcategoriesId) {
  const { token } = await getTokenPrueba();
  try {
    const res = await fetch(url, {
      method: "POST",
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        content,
        itilcategoriesId
      }),
    });

    // console.log({sendDataPost: res})
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({error}, "error prueba");
  }
}


