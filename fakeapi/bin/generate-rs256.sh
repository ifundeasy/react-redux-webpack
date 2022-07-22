#!/bin/bash

# private key file
ssh-keygen -t rsa -b 4096 -m PEM -f JWT-RS256.key

# public key file
openssl rsa -in JWT-RS256.key -pubout -outform PEM -out JWT-RS256.key.pub

# passphrase file
read -sp 'Enter pass phrase for JWT-RS256.key: ' passphrase
echo ''
echo $passphrase > "$PWD/secret"

echo Your passphrase has been saved to "$PWD/secret"