. ~/.nvm/nvm.sh
nvm use 18
echo using node 18
npm run rollup
echo build success
rm -rf ../frontend/node_modules/@r1tsuu/constructor-ui/dist
rm -rf ../frontend/.next
mv dist ../frontend/node_modules/@r1tsuu/constructor-ui/dist
echo moved pkg to admin