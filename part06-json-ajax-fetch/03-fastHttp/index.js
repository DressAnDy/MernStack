const baseURL = "https://66fb75a78583ac93b40bd371.mockapi.io/user"

//class + promise + fetch 
class FastHttp{ 
    send(method, url, body){
        fetch(url, {
            method: method,
            headers:{
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : null,
        })
        .then((response) => {
             if(response.ok){
                return response.json();
             }else {
                throw new Error(response.statusText);
            }
        })
    }
    get(url){
        return this.send("GET", url, null);
    }
 
    delete(url){
        return this.send("DELETE", url, null);
    }

    post(url, body){
        return this.send("POST", url, body);
    }
}

let http = new FastHttp(); //tạo bản thể từ fastHttp để xài method của nó

http
// .get(baseURL)
// .delete(`${baseURL}/1`)
.post(baseURL, {name: "Tài chó điên"})
.then((data) => {
    console.log(data);
});

