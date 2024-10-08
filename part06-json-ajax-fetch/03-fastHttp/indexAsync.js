const baseURL = "https://66fb75a78583ac93b40bd371.mockapi.io/user"

//class + promise + fetch 
class FastHttp{ 
    async send(method, url, body){
        let response = await fetch(url, {
            method: method,
            headers:{
                "Content-Type": "application/json"
            },
            body: body ? JSON.stringify(body) : null,
        });

        if(response.ok){
            return response.json();
        }else{
            throw new Error(response.statusText);
        }

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

    put(url, body){
        return this.send("PUST", url, body);
    }
}

let http = new FastHttp(); //tạo bản thể từ fastHttp để xài method của nó

// .get(baseURL)
// .delete(`${baseURL}/1`)
// let data = await http.put(`${baseURL}/2`, {name: "Tài chó điên 2"});
// console.log(data);

(async () => {
    try{
    let data = await http.put(`${baseURL}/2`, {name: "Tài chó điên 2"});
    console.log(data);
    }catch(error){
        console.log(error);
    }
})();





