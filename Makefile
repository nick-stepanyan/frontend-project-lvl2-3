install: # установить зависимости
	npm ci

publish: # отладка публикации
	npm publish --dry-run
	sudo npm link
lint: # запустить eslint, чтобы исправить ошибки
	npx eslint .

fix: # пофиксить ошибки
	npx eslint --fix .
