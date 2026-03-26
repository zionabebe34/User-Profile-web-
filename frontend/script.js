var form = document.getElementById("search-btn");

form.addEventListener("click", function(event) {
    event.preventDefault();
    var query = document.getElementById("user-input").value;
    if (!query) return;

    document.getElementById("error").textContent = "";
    clearUserInfo();

    fetch("http://127.0.0.1:5000/api/profile?user_id=" + query)
        .then(parseJSON)
        .then(insertUserInfo)
        .catch(function(error) {
            document.getElementById("error").textContent = error.message;
        });
});


// parsing to json
function parseJSON(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("User not found");
    }
}

//clearing the user info
function clearUserInfo() {
    document.getElementById("name").textContent = "";
    document.getElementById("username").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("bio").textContent = "";
    document.getElementById("avatar").src = "";
    document.getElementById("posts-list").innerHTML = "";
}


// inserting the user-info
function insertUserInfo(user) {
    document.getElementById("name").textContent = user.name;
    document.getElementById("username").textContent = user.username;
    document.getElementById("email").textContent = user.email;
    document.getElementById("bio").textContent = user.bio;
    document.getElementById("avatar").src = user.avatar;

    // inserting the posts info
    var postsContainer = document.getElementById("posts-list");
    postsContainer.innerHTML = "";
    user.posts.forEach(function(post) {
        var li = document.createElement("li");
        li.innerHTML = "<strong>" + post.title + "</strong> <br>" + post.body;
        postsContainer.appendChild(li);
    });
}

