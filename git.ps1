git status
git pull origin main
# normal commit
git add .
git commit -m "update $(Get-Date -Format 'yyyy-MM-dd')"
git push origin main


git init
git add .
git commit -m "Initial commit - Complete website with gallery"
git remote add origin https://github.com/AdieleSolomon/Interio-design-static.git
git push -u origin main