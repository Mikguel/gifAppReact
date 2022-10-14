export const getGifs= async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=t398WG2TKnap8FHOBU2LFwvtcx3W2nat&q=${ category }&limit=7`;
  
    const resp = await fetch(url);
  
    const { data } = await resp.json();
  
    const gifs = data.map( img => ({
      
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  
    }))
  
    console.log(gifs);
    return gifs;
  
  }