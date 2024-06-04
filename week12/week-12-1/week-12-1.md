this is a video on deploying frontends on aws



with incrase in tiime the vercel gets expensive so much 

how to deploy frontend on aws conventional cloud provider 

at scale aws gets 99 % discount in distribution 



what we do is

we create the s3 bucket which give us -> s3.hkiratcms.aws.com


we dont directely give this s3.hkiratcms.aws.com link to the consumer



we give this link to aws cloudfront which is a popular cdn and cdn give us link ->d2sv.cloudfront.com


when we will request the d2sv.cloudfront.com/myVideo.mp4


it brings it from that location and delivers

also on top of it it Caches the content and hence for some time replica of our content is created across different location and the cdn act as a point of presence POP



