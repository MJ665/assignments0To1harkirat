this is a week 11 1 

aws video

and aws management

and certificate management





chmod 700 backend-server-kirat-class.pem



ssh -i backend-server-kirat-class.pem ubuntu@13.233.149.85






events {
    # Event directives...
}

http {
	server {
    listen 80;
    server_name ec2-13-233-244-202.ap-south-1.compute.amazonaws.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
}