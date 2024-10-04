let posts = []; //store fetched posts
let loading = false;

function fetchHomeData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error with the status: " + response.status);
        }
        return response.json();
    })
    .then((postdata) => {
        posts = postdata;
        loadposts();
    })
}
        
function loadposts() {

    let  container = document.getElementById("post-container");

    let i = 1, limit = 15;
    for (post of posts) {
        if (i <= limit) {
            const article = document.createElement("article");
            const title = document.createElement("h1");
            title.textContent = post.title; //headline i boks
            const body = document.createElement("p");
            body.textContent = post.body;   //undertekst i boks
            article.appendChild(title);
            article.appendChild(body);
            container.appendChild(article);
            i++;
        }
    }
    loading = false;    //enables new posts to load in
}

fetchHomeData();

window.onscroll = function() {
    // checks if user scrolled to the bottom, if it has; load more
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 75 && !loading) {
        loading = true; // prevents multiple fetches at once
        loadposts();
    }
};

