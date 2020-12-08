#!/bin/sh

rm -rf ./lib

echo "build server"
cd vault
npm run build

echo "build ui"
cd ../vaultage
ng build --prod

echo "prepare dist"
cd ..
rm -rf lib
mkdir lib
# server
cp -r vault/dist/vault lib/.
# library
cp -r vault/dist/vaultier lib/.
# ui
cp -r vaultage/dist/vaultage lib/vault/.
