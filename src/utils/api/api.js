const API_BASE_URL =
      "https://api.github.com/users/MerrixMurphy/repos";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
      try {
        const response = await fetch(url, options);
    
        if (response.status === 204) {
          return null;
        }
    
        const payload = await response.json();
    
        if (payload.error) {
          return Promise.reject({ message: payload.error });
        }
        return payload.data;
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.stack);
          throw error;
        }
        return Promise.resolve(onCancel);
      }
    }

    export async function listRepos(signal) {
      const url = new URL(`${API_BASE_URL}`);
      return await fetchJson(url, { headers, signal }, [])
    }