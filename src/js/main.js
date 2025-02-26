document.getElementById('fetchItem').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    let apiUrl = `https://valorant-api.com/v1/${category}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const items = data.data;
            if (items.length > 0) {
                const randomItem = items[Math.floor(Math.random() * items.length)];
                let itemContent = `<h2>${randomItem.displayName || 'Unknown'}</h2>`;
                
                // largeArt vajadzigs lai playercards butu original size
                if (category === "playercards" && randomItem.largeArt) {
                    itemContent += `<img class="full-scale" src="${randomItem.largeArt}"/>`;
                } else if (randomItem.displayIcon) {
                    itemContent += `<img src="${randomItem.displayIcon}"/>`;
                } else if (randomItem.fullPortrait) {
                    itemContent += `<img src="${randomItem.fullPortrait}"/>`;
                }
                
                document.getElementById('itemSection').innerHTML = itemContent;
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
