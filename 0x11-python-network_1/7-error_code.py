#!/usr/bin/python3
"""
takes in a URL, sends a request to the URL and
displays the body of the response
"""

import sys
import requests

if __name__ == "__main__":
    url = sys.argv[1]
    response = requests.get(url)
    try:
        response.raise_for_status()
        print(response.text)
    except Exception as e:
        print("Error code: {}".format(response.status_code))
