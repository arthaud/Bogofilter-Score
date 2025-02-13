# Bogofilter Scores (Thunderbird Add-on)

> :warning: This is a fork of Spam Scores: https://github.com/friedPotat0/Spam-Scores

Bogofilter Scores is an add-on for Thunderbird (Version 91.0a1 - \*). For Thunderbird 78.* the last working version of this add-on is [1.3.1](https://github.com/friedPotat0/Spam-Scores/releases/tag/1.3.1).

The add-on can display the bogofilter spam scores according to mail headers. It adds a column with the overall spam score to the mail list view and shows details of any matched spam/ham rule.

![Add-on Screenshot](https://raw.githubusercontent.com/friedPotat0/Spam-Scores/master/images/screenshot.jpg)

To display the spam score column, right-click on the title bar of the columns in the list view and select "Spam score". If the column is empty, you must first restart Thunderbird and then right-click on any folder and select "Properties" and "Repair Folder". This will scan the mail headers of all mails in this folder so that the spam score column can be displayed correctly. Repair all folders like this in which you want to display this column.

If you have mails with the header "X-MYCOMPANY-MailScanner-SpamCheck", you have to open one of these mails first and then restart Thunderbird and repair the folder. Otherwise the spam score of the mails containing these headers will not be displayed.

The total score of each mail with an existing spam header will be displayed along with a red, yellow or green icon depending on the score. The colours are by default calculated as follows:

- ![Positive Score](https://raw.githubusercontent.com/friedPotat0/Spam-Scores/master/images/score_positive.png) Score greater than 2
- ![Neutral Score](https://raw.githubusercontent.com/friedPotat0/Spam-Scores/master/images/score_neutral.png) Score between -2 and 2 (both inclusive)
- ![Negative Score](https://raw.githubusercontent.com/friedPotat0/Spam-Scores/master/images/score_negative.png) Score less than -2

The icon score ranges can be changed in the [add-on options](#options).

Furthermore, a button is displayed in the action bar of any opened mail with the respective total score of the mail. Clicking on the button opens a popup with detailed information on all individual rules. In addition to the name and the partial score, a description and, if available in the mail header, the value on the basis of which the score was calculated is displayed.

## Installation

You can download the latested version reviewed by moz://a directly on the [Thunderbird Add-on page](https://addons.thunderbird.net/de/thunderbird/addon/spam-scores/) or through your installed Thunderbird client by clicking on the menu button followed by "Add-ons" and typing "Spam Scores" in the search bar.

Additionally the latest reviewed version is available on the [Releases page](https://github.com/friedPotat0/Spam-Scores/releases) of this GitHub repository.

To test versions that have not yet been published, you can always download the files from any branch and create a new ZIP file containing all files in the "Spam-Scores-[BRANCH_NAME]" folder. Then you can add the file to thunderbird by drag & drop to install the new version. Please keep in mind that you might not receive future updates until you reinstall a reviewed version directly from Thunderbird's add-on page or through the releases page of this repository.

## Options

![Settings Screenshot](https://raw.githubusercontent.com/friedPotat0/Spam-Scores/master/images/screenshot_settings.jpg)

The default icon ranges can be changed in the add-on settings in Thunderbird. Furthermore individual score ranges can be completely hidden. For example, this can be used to show the icon and score only for mails that are spam. The detailed rules of any opened mail can still be accessed regardless of this setting.

## Translations

At the moment the add-on is mostly written in English. Some parts like the settings and the description are also translated to German. Please refer to the section [Contributing](#contributing) if you would like to help by translating the add-on to different languages.

## License

The add-on is released under the CC BY-NC-SA 4.0 (Attribution-NonCommercial-ShareAlike 4.0 International) license.

## Contributing

If you notice any bugs, do not hesitate to open an issue about it. Please understand that I develop the add-on in my spare time and may not be able to solve problems directly. If you want to contribute to the project by fixing bugs, implementing new features or translating the add-on, please feel free to open a pull request.
