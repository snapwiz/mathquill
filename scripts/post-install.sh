set -e
cd ~/edulastic-mathquill
chmod +x  script/*
make
aws s3 sync ~/edulastic-mathquill/build s3://edupoc/edulasticv2-development/JS/thirdpartylib/mathquill/v0.10.1
aws cloudfront create-invalidation  --distribution-id E37FX6USRXNIY0 --paths "/edulasticv2-development/JS/thirdpartylib/mathquill/*"
