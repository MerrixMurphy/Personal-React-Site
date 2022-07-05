const API_BASE_URL = "https://api.github.com/users/";

const API_USER = "MerrixMurphy/"

async function fetchJson(url, onCancel) {
      try {
        const response = await fetch(url);
    
        if (response.status === 204) {
          return null;
        }
    
        const payload = await response.json();
    
        if (payload.error) {
          return Promise.reject({ message: payload.error });
        }
        return payload;
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.stack);
          throw error;
        }
        return Promise.resolve(onCancel);
      }
    }

    export async function listRepos() {
      const url = new URL(`${API_BASE_URL}${API_USER}repos`);
      return await fetchJson(url, [])
    }

    export async function getRepoReadme(repo) {
      const url = new URL(`${API_BASE_URL}repos/${API_USER}${repo}readme`);
      return await fetchJson(url, [])
    }