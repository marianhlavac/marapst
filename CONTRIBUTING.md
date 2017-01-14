# Contributing

## Adding new questions

1. Look into the `questions.js` file.
2. Almost everything is described there, just read the instructions.
3. *[read steps 3-6 only if you don't know git well]* Fork this repository.
4. Edit the `questions.js` file, you can do this even from GitHub editor from your browser, open the file and click the edit icon in GitHub.
5. Commit and push to your repository.
6. Go to this repository and create a pull request.
7. Good job, thanks.

### Converting fit-wiki questions

A few tips how to quickly convert existing fit-wiki questions to this app format:

 - Convert all non-latex math symbols/text to latex, pls!
 - Replace all `<math>` and `</math>` with `$`
 - Every `\` replace with `\\` (eg. `\lorem` -> `\\lorem`) because of the JS escaping
