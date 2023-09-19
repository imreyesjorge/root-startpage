#!/bin/bash

if [ -d "./dist" ]
then
    echo "Removing dist/ directory..."
    rm -rf ./dist
    echo -e "Removing dist/ Finished.\n"

    echo "Building project started..."
    npm run build
    echo -e "Finished Building.\n"
else
    echo "Building project started..."
    npm run build
    echo -e "Finished Building.\n"
fi

echo "Changing (dist/) Folder Name To (startpage/)"
mv ./dist/ ./startpage/

echo "=============================================="

echo "moving the (startpage/) to ~/Documents/"
mv ./startpage/ ~/Documents/
xdg-open ~/Documents/
