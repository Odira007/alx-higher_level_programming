#!/bin/bash
# sends a request to a URL and display the size of the body of the response using curl

curl -s https://www.google.com/maps | wc -c
