const endpointList =
    [
        {
            name: "Shops",
            URL: "/api/stores",
            description: "Store, Grocery, Shops"
        },
        
    ];

const getURL = (name) => {
    for (let endpoint of endpointList) {
        if (endpoint.name === name)
            return endpoint;
    }
}

const getData = (name) => {
    const endpoint = getURL(name);
    return fetch(endpoint.URL, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(data => data.json())
        .then(json => json);
}


// const getEvents = () => {
//     return fetch("http://spark.raydelto.org/events").then((data) => data.json()).then((data) =>  data.data);
// }

export {getData};
