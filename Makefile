install: # установить зависимости
	npm ci

publish: # отладка публикации
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

