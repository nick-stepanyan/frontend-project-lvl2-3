install: # установить зависимости
	npm ci

publish: # отладка публикации
	npm publish --dry-run
	sudo npm link

gendiff:
	node bin/gendiff.js

