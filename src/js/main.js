document.getElementById('fetchItem').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    let apiUrl = `https://valorant-api.com/v1/${category}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const items = data.data;
            const randomItem = items[Math.floor(Math.random() * items.length)];
            let itemContent = `<h2>${randomItem.displayName || 'Unknown'}</h2>`;
            
            if (category === "playercards" && randomItem.largeArt) {
                itemContent += `<img src="${randomItem.largeArt}"/>`;
            } else if (randomItem.displayIcon) {
                itemContent += `<img src="${randomItem.displayIcon}"/>`;
            }
                
            document.getElementById('itemSection').innerHTML = itemContent;
        })
        .catch(error => console.error('Error fetching data:', error));
});


document.getElementById('fetchCatFact').addEventListener('click', () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        document.getElementById('catFactOutput').textContent = data.fact;
      })
      .catch(error => console.error('Error fetching cat fact:', error));
  });