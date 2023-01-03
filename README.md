# websocket-cell-game
websocket-cell-game Local http => AWS, Droplet HTTPS Success!

Setup Secure Nginx, Apache2 with Certbot on Ubuntu!

sudo apt install certbot python3-certbot-nginx

sudo apt install certbot python3-certbot-apache2

sudo certbot --nginx -d game.songonha.com

sudo certbot --apache -d games.songonha.com

Can be connected via http, https, ws, wss => Done!!!
