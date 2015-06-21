#!/bin/bash
# This script is for debugging the Jekyll page
# without generating more than 2000 pages.
# requires ruby, gem github-pages

cd /tmp
rm -rf dlina.github.io
git clone https://github.com/dlina/dlina.github.io.git
cd dlina.github.io
for i in `seq 0 7`; 
	do 
		rm -f networks/_posts/*$i.md;
		for j in `seq 0 9`;
			do
				rm -f networks/_posts/*$j$i.md;
			done
		 
	done
bundle exec jekyll serve --baseurl ''
