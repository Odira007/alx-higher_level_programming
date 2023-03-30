#!/bin/bash
# write a bash scripts that highlights the allowed methods

curl -sI "$1" | grep Allow | cut -d " " -f2-
