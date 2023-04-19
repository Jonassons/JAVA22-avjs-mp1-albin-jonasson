async function highscore() {
    const url = "https://highscore-209dc-default-rtdb.europe-west1.firebasedatabase.app/highscore.json";
    const response = fetch(url);
    const data = await (await response).json();
    console.log(data);
    return data;
}

export { highscore };

export async function patchFirebase(data){
    const url = "https://highscore-209dc-default-rtdb.europe-west1.firebasedatabase.app/.json";

    const newScore = {
        highscore: data
    }
    const options = {
        method: "PATCH",
        body: JSON.stringify(newScore),
        headers: {
            "Content-type": "application/json; charset=UTF-8" 
        }
    }
    const response = await fetch(url, options);
    const newdata = await response.json();
    console.log(data);
}