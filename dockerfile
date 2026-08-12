FROM node:22-bookworm
RUN apt-get update && apt-get install -y rsync openssh-client && rm -rf /var/lib/apt/lists/*