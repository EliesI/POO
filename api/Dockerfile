FROM elixir:latest

WORKDIR /app

# RUN apt-get update && apt-get install -y bash curl && curl -1sLf \
#   'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.deb.sh' | bash \
#   && apt-get update && apt-get install -y infisical==0.14.3

# Installer Hex et Rebar
RUN mix local.hex --force 

COPY mix.exs mix.lock ./

RUN mix deps.get

# Copiez d'abord le projet
COPY . .

EXPOSE 4000

# CMD ["infisical", "run", "--", "mix", "phx.server"]
CMD ["mix", "phx.server"]
