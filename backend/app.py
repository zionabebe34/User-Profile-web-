from flask import Flask, send_from_directory,redirect,  request, jsonify
import requests 

app = Flask(__name__, static_folder="static") 


@app.route("/")
def index():
    return redirect("/static/index.html")



@app.route("/api/profile")
def get_profile():
    user_id = request.args.get("user_id")
    if not user_id:
        return jsonify({"error": "Missing 'user_id' query parameter"}), 400
    
    try:
        user_res = requests.get(f"https://jsonplaceholder.typicode.com/users/{user_id}")
        posts_res = requests.get(f"https://jsonplaceholder.typicode.com/posts", params={"userId": user_id}) 

        user = user_res.json()
        posts = posts_res.json()

        avatar = 'https://api.dicebear.com/9.x/big-smile/svg?seed=' + user["username"]

        profile = {
            "name": user["name"],
            "username": user["username"],
            "email": user["email"],
            "bio":  user["company"]["catchPhrase"], 
            "avatar": avatar,
            "posts": posts
        }
        #define posts structure
        for post in profile["posts"]:
            post["title"] = post.pop("title")
            post["body"] = post.pop("body")
            
        return jsonify(profile)
    



    except requests.RequestException:
        return jsonify({"error": "Failed to fetch user profile"}), 502 
    

if __name__ == "__main__":
    app.run(debug=True, port=5000)