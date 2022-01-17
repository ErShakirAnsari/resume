### Step 1: Add GitHub Pages dependency package
```
npm install gh-pages -- save-dev
```

### Step 2: Add homepage property to package.json file
For a GitHub user site:
```
"homepage": "https://{username}.github.io"
```

For a custom domain:
```
"homepage": "https://testwebsite.com"
```

### Step 3: Add deploy scripts to "scripts" package.json file
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```


### Step 4: Deploy the Application to GitHub Pages
```
npm run deploy
```