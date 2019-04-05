# 1. Anyway npm install
```
$ npm install
```

# 2. Get own PUBG API and setting your ID
Get own PUBG API this site => https://developer.playbattlegrounds.com
and,
```
$ export PUBG_API_KEY="your api key"; <= Please add this
$ node
$ > process.env.PUBG_API_KEY; <= you can checking
```

and, Add your PUBG ID to the this line in "src/index.js"

```
const USERNAME = 'your PUBG ID';
```

# 3. Run
```
$ node src/server.js
```
Please check this URL.
http://localhost:3000

Then you can see like this:
<img src="./src/image.png">