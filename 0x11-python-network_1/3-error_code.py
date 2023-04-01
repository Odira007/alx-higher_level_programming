#!/usr/bin/python3
"""
Python script that takes in a URL, sends a request to the URL
and displays the body of the response (decoded in utf-8)
"""

import sys
from urllib import request, parse, error

url = sys.argv[1]
req = request.Request(url)
try:
    response = request.urlopen(req)
except error.HTTPError as e:
    print("Error code: ", e.code)
else:
    """Everything is fine"""
