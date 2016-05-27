#!/bin/sh
# I, the author of this file, hereby release its contents into the Public Domain

: ${1?"Usage: $0 VERSION"}

mkdir -p dist
zip -r dist/gitlex-$1.xpi * -x dist -x *.sh
ls -l dist
