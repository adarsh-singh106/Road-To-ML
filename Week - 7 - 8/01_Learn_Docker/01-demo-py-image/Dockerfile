FROM python:3.10.20-slim-trixie

WORKDIR /app

# install uv
RUN pip install uv

# copy only dependency files first (for caching)
COPY pyproject.toml ./

RUN uv sync

# now copy rest of code
COPY . .

# IMPORTANT: run inside uv environment
CMD ["uv", "run", "python", "main.py"]
