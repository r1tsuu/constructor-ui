. ~/.nvm/nvm.sh
nvm use 12
rm -rf storybook-static
npm run build-storybook
rm -rf ../admin/public/storybook-static
mv ./storybook-static ../admin/public/storybook-static