FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install bash and openssh-server ??
RUN apt-get update && apt-get install -y \
    bash \
    openssh-server \
 && rm -rf /var/lib/apt/lists/*

# Ensure the sshd directory exists
RUN mkdir /var/run/sshd

# Optional: Expose port 22 for SSH purposes
EXPOSE 22

# Create a non-root user for SSH also
RUN useradd -ms /bin/bash appuser

# Switch users
USER appuser

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy over the code
COPY . .

# run gunicorn of course
CMD gunicorn backend.wsgi --bind 0.0.0.0:${PORT:-8000}
