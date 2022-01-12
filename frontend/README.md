# Running the frontend step-by-step:

1. Setup and Run the **backend** server first! The instructions are provided in the **<a href="https://github.com/Antonjal/react-crypto-converter/tree/master/backend">backend directory</a>**
2. Inside the **<a href="https://github.com/Antonjal/react-crypto-converter/blob/master/frontend/src/components/Converter.js">Converter.js</a>** component, under `var options`, **change** the `url:` value from `"https://crypto-converter-backend.onrender.com/convert"` to `"http://localhost:8000/convert"`
3. Inside the **<a href="https://github.com/Antonjal/react-crypto-converter/blob/master/frontend/src/components/NewsFeed.js">NewsFeed.js</a>** component, under `var options`, **change** the `url:` value from `"https://crypto-converter-backend.onrender.com/news"` to `"http://localhost:8000/news"`
4. Run `npm install`
5. Run `npm start`
