

# 📸 Insta Clone

A **front-end Instagram clone** built with **React**. This project replicates core features of Instagram’s user experience, such as viewing posts, watching stories, following users, and updating a profile. It is styled with **Bootstrap + custom CSS** and uses a **mock backend (`json-server`)**.

---

## 🚀 Features

* **Dynamic Main Feed** – Scrollable feed displaying posts with profile picture, username, image, likes, and caption.
* **Stories Component** – Horizontal story bar at the top of the feed.
* **Interactive Story Viewer** – Open stories with navigation controls (next/previous).
* **User Suggestions Panel** – Sidebar with profile info and suggested users to follow (with a functional “Follow” button).
* **Editable Profile Page** – Update username and profile picture.
* **Client-Side Routing** – Implemented using `react-router-dom`.
* **Responsive Layout** – Three-column interface (navigation sidebar, main feed, suggestions panel).

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Routing:** React Router (`react-router-dom`)
* **HTTP Client:** Fetch API, Axios (for profile updates)
* **Styling:** Bootstrap, Bootstrap Icons, Custom CSS
* **Backend:** `json-server` (mock REST API)

---

## 📂 Project Structure

```
insta-clone/
│── src/
│   ├── App.jsx          # Root component, layout setup
│   ├── main.jsx         # Entry point, routing config
│   ├── components/
│   │   ├── Feed.jsx     # Main feed with Stories + Posts
│   │   ├── SideBar.jsx  # Left navigation menu
│   │   ├── Suggestion.jsx # Right panel with user suggestions
│   │   ├── Profile.jsx  # Profile view & edit page
│   │   └── ViewStory.jsx # Story viewer
│── public/
│── db.json              # Mock backend data
```

---

## ⚙️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/insta-clone.git
   cd insta-clone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up the Mock Backend**

   * Create a `db.json` file in the root folder.
   * Example structure:

     ```json
     {
       "posts": [
         {
           "id": 1,
           "user": { "username": "nature_lover", "profile_pic": "https://i.pravatar.cc/150?img=1" },
           "image": "https://picsum.photos/600/700",
           "likes": 120,
           "caption": "Enjoying the great outdoors!"
         }
       ],
       "Story": [
         { "id": 1, "user": { "username": "travel_bug", "profile_pic": "https://i.pravatar.cc/150?img=2" }, "image": "https://picsum.photos/400/800" }
       ],
       "suggestion": [
         { "id": 1, "username": "art_by_jane", "profile_pic": "https://i.pravatar.cc/150?img=4" }
       ],
       "profile": { "username": "your_username", "profile_pic": "https://i.pravatar.cc/150?img=5" }
     }
     ```

4. **Run the mock backend**

   ```bash
   npx json-server --watch db.json --port 4000
   ```

5. **Start the React app**

   ```bash
   npm run dev
   ```

   * App → `http://localhost:5173`
   * Backend → `http://localhost:4000`

---

## 🔗 API Endpoints

* `GET /posts` → Fetch feed posts
* `GET /Story` → Fetch all stories
* `GET /Story/:id` → Fetch a specific story
* `GET /suggestion` → Fetch suggested users
* `GET /profile` → Fetch profile data
* `PUT /profile` → Update profile data

---

## 📌 Future Improvements

* Add authentication (login/signup)
* Real-time notifications
* Image upload support
* Dark mode UI

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.
