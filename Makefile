install: # установить зависимости
	npm ci

publish: # отладка публикации
	npm publish --dry-run
	sudo npm link
lint: # запустить eslint, чтобы исправить ошибки
	npx eslint .

fix: # пофиксить ошибки
	npx eslint --fix .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
