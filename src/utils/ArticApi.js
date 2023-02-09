const BASE_URL = "https://api.artic.edu/api/v1/artworks";



export async function getArtworkInfo(pageNumber) {
  const res = await fetch(
    `${BASE_URL}/search?q=women&fields=id,image_id,title,artist_display,date_display,medium_display&page=${pageNumber}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Error: ${res.status}`);
}

export async function getSearch(query) {
  const res = await fetch(
    `${BASE_URL}/search?q=${query}&fields=id,image_id,title,artist_display,date_display,medium_display&page=1&limit=50`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Error: ${res.status}`);
}


export async function types(type) {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${type},female&fields=artwork_type_title,id,image_id,title,artist_display,date_display,medium_display&limit=50`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Error: ${res.status}`);

}
