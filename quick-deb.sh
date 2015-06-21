#!/bin/bash
# This script is for debugging the Jekyll page
# without generating more than 2000 pages.
# requires ruby, gem github-pages

rm -rf /tmp/dlina.github.io
if [ "$1"  == "remote" ];
	then
		cd /tmp
		git clone https://github.com/dlina/dlina.github.io.git
	else
		cd ..
		cp -r dlina.github.io /tmp/
		cd /tmp
fi
cd dlina.github.io
for i in `seq 0 7`;
	do
		rm -f networks/_posts/*$i.md;
		for j in `seq 0 9`;
			do
				rm -f networks/_posts/*$i$j.md;
			done
	done
bundle exec jekyll serve --baseurl ''
exit 0
