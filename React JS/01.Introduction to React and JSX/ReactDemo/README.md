## Steps to launch the application WITHOUT vite
1. npm init -y

2. npm install --save-dev babel-cli@6 babel-preset-react-app@3

3. npx babel --watch src --out-dir build --presets react-app/prod

4. We can create script for that command in package.json: 
	 "scripts": {
    		"watch": "npx babel --watch src --out-dir build --presets react-app/prod",
    		"test": "echo \"Error: no test specified\" && exit 1"
  	},
  - start with: npm run watch

5. 