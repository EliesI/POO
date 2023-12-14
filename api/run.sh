# If exeist delete the file mix.lock

# Check if the .env file exists
# if [ ! -f ".env" ]; then
#   echo "Please create a .env file, with the same value as .env.example"
#   exit 1
# fi

# Delete the mix.lock file to avoid problems with the docker container
if [ -f "mix.lock" ]; then
  rm mix.lock
fi

# Get the dependencies
mix deps.get

# Depending on the param run either docker dev or docker prod
if [ "$1" = "dev" ]; then
  docker-compose -f docker-compose.dev.yml up --build
  elif [ "$1" = "dev-windows" ]; then
  docker-compose -f docker-compose.dev.yml up 
  elif [ "$1" = "prod" ]; then
  docker-compose -f docker-compose.prod.yml up --build
else
  echo "Please provide a valid param"
fi