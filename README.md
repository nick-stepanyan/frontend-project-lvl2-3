### Hexlet tests and linter status:
[![Actions Status](https://github.com/Nikolos-S/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Nikolos-S/frontend-project-lvl2/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/2d6e74ed66b14ce64cea/maintainability)](https://codeclimate.com/github/Nikolos-S/frontend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/2d6e74ed66b14ce64cea/test_coverage)](https://codeclimate.com/github/Nikolos-S/frontend-project-lvl2/test_coverage)

[![run bug fix](https://github.com/Nikolos-S/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/Nikolos-S/frontend-project-lvl2/actions/workflows/nodejs.yml)

## Description:
<kbd>
Difference Calculator is a program that determines the difference between two data structures. This is a popular task, for which there are many online services, for example http://www.jsondiff.com /. A similar mechanism is used when outputting tests or when automatically tracking changes in configuration files.
</kbd>

## Setup:
```sh
make install
```

## Utility Features:
* Support for different input formats: yaml, json
* Generating a report in the form of plain text, stylish and json

## Output reference information:
gendiff -h

## File comparison (default format is stylish):
gendiff filepath1 filepath2

## Compare two files using other formats:

* gendiff -f json file1.json file2.json
* gendiff -f plain file1.json file2.json

## Run test:
```sh
make test
```

## Comparison of flat files (JSON):
<a href="https://asciinema.org/a/bPz8SoBSkRh5BBglgjpSHytjo" target="_blank"><img src="https://asciinema.org/a/bPz8SoBSkRh5BBglgjpSHytjo.svg" /></a>

## Comparison of flat files (yaml):
<a href="https://asciinema.org/a/zDodSEC0iIOrSwkw5Asq2yNUm" target="_blank"><img src="https://asciinema.org/a/zDodSEC0iIOrSwkw5Asq2yNUm.svg" /></a>

## Recursive comparison:
<a href="https://asciinema.org/a/2gCLh5sgMrFJod6mguxaIH1fG" target="_blank"><img src="https://asciinema.org/a/2gCLh5sgMrFJod6mguxaIH1fG.svg" /></a>

## Flat format:
<a href="https://asciinema.org/a/tRTeIXDQlnnuKPuVqLFCq741G" target="_blank"><img src="https://asciinema.org/a/tRTeIXDQlnnuKPuVqLFCq741G.svg" /></a>

## Output in json:
<a href="https://asciinema.org/a/CqOocfi6iNKXEZpg25AxM1yor" target="_blank"><img src="https://asciinema.org/a/CqOocfi6iNKXEZpg25AxM1yor.svg" /></a>