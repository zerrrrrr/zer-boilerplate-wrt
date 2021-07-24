git init
if ! command -v yarn &> /dev/null
then
    npm install -g yarn
fi
yarn
rm zer-stand-by.sh
