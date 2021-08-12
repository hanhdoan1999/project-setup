


 export const fetchData = async() =>{
      let response = await fetch('https://60d8a43aeec56d001747740d.mockapi.io/todos')
      response = await response.json()
      return response;
      // console.log(response);
    }
