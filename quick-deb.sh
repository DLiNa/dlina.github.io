#!/bin/bash
# This script is for debugging the Jekyll page
# without generating more than 2000 pages.
# requires ruby, gem github-pages

cd /tmp
git clone https://github.com/dlina/dlina.github.io.git
cd dlina.github.io
for $i in `seq 0 7`; 
	do 
		rm -f networks/_posts/*$i.md 
	done
bundle exec jekyll serve --baseurl ''
