export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=myKXFvf8Q0UXbJRK1n7QI55A2d78QpRO&limit=10&q=${encodeURI(category)}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(e => {
        return {
            id: e.id,
            title: e.title,
            url: e.images?.downsized_medium.url
        }
    })
    return gifs;
}