# 🚀 First Docker Container - Flask App

This is my first Dockerized Python application using **Flask** and modern dependency management with **uv**.

---

## 📦 About the Project

This project demonstrates how to:

* Containerize a Python application using Docker
* Manage dependencies using `pyproject.toml` and `uv`
* Run a Flask app inside a container
* Expose and access the app via a browser

---

## 🛠 Tech Stack

* Python 3.10
* Flask
* Docker
* uv (dependency manager)

---

## ▶️ How to Run the Container

Pull and run the image:

```bash
docker run -d -p 5000:5000 cse57/first-image
```

---

## 🌐 Access the App

Open your browser and go to:

```
http://localhost:5000
```

---

## 🐳 Docker Details

* Base Image: `python:3.10-slim`
* Port: `5000`
* Command:

  ```bash
  uv run python main.py
  ```

---

## 📁 Project Structure

```
.
├── main.py
├── pyproject.toml
├── Dockerfile
└── templates/
```

---

## ⚙️ Key Learnings

* Docker containers run in isolated environments
* Dependencies inside containers must be explicitly installed
* `uv` manages its own virtual environment (`.venv`)
* Use `uv run` to execute code inside that environment
* Flask must run on `0.0.0.0` to be accessible from outside the container

---

## 🚀 Future Improvements

* Add production server (Gunicorn)
* Use multi-stage Docker builds
* Deploy to cloud (AWS / Render / Railway)
* Add CI/CD pipeline

---

## 🙌 Author

Created as part of learning Docker.

---

⭐ If you found this helpful, feel free to check out the repo!
