import getToken from "./getToken";

const getData = async (URL, email, password) => {
  const tokenSessionStorage = sessionStorage.getItem("tokenSessionStorage");

  // console.log("-------------getDataEvent----------------");
  if (tokenSessionStorage) {
    try {
      const response = await fetch(URL, {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenSessionStorage}`,
          accept: "application/json",
        },
      });
      // console.log(response);

      if (response.status === 401) {
        const { token } = await getToken(email, password);
        // // console.log("Uso token de getToken para hacer la peticion: " + token);
        const response = await fetch(URL, {
          credentials: "include",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        });
        // console.log(response);
        if (!response.ok) {
          console.error(
            `Error getData con TS !response.ok: ${response.status}: ${response.statusText} `
          );
          return {
            error: "authentication",
            message: "Authentication not valid",
            status: false,
          };
        }
        sessionStorage.setItem("tokenSessionStorage", token);
        const data = await response.json();
        // console.log('401', {response});
        return data;
      }
      // console.log(
      //   "Uso tokenSessionStorage para hacer la peticion: " + tokenSessionStorage
      // );
      const data = await response.json();
      // console.log('200', {response});
      return data;
    } catch (error) {
      console.error(`Error catch getData con TS: ${error}`);
      return {
        error: "authentication",
        message: "Authentication not valid",
        status: false,
      };
    }
  } else {
    try {
      const { token } = await getToken(email, password);
      // console.log("Uso token de getToken para hacer la peticion: " + token);
      const response = await fetch(URL, {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });
      // console.log(response);
      if (!response.ok) {
        console.error(
          `Error getData sin TS !response.ok: ${response.status}: ${response.statusText} `
        );
        return {
          error: "authentication",
          message: "Authentication not valid",
          status: false,
        };
      }
      sessionStorage.setItem("tokenSessionStorage", token);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error catch getData sin TS: ${error}`);
      return {
        error: "authentication",
        message: "Authentication not valid",
        status: false,
      };
    }
  }
};

export default getData;
