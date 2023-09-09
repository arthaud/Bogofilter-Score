all: Bogofilter-Score.zip

Bogofilter-Score.zip:
	zip -r Bogofilter-Score.zip LICENSE README.md schema.json manifest.json src test images build _locales

clean:
	rm -f Bogofilter-Score.zip
