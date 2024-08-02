## Steps to launch the application with vite
1. npm create vite . 
	- . - to create in the current directory. If want new directory give name instead of .
	- choose Framework >> React
	- choose Variant >> JavaScript
  
	= In order it not to ask, we can write: 
```
   - npm create vite . -- --template react
```
  
2. npm install
   
3. npm i react-router-dom

4. Setting up provider in main.js 
   ```
	import { BrowserRouter } from 'react-router-dom';

	ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	);
   ```
5. install Tailwindcss - https://tailwindcss.com/docs/guides/vite
   1. install
   ```
	npm install -D tailwindcss postcss autoprefixer
	npx tailwindcss init -p
   ```
   2. add in tailwind.config.js:
   ```
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  	],
   ```
   3. in index.css remove all and put:
	```
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	```
   4. delete App.css

6. npm run dev