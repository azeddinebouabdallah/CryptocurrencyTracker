# Contributing to Cryptocurrency restful-api
When contributing to this repository, please first discuss the changes you wish to make via issues, email, or any other method with the owners of this repository.

**Please note we have a code of conduct, make sure you follow it in all your interactions with the project**

## Setting up the environment
Note that there is a .gitignore file in our repository that ignores node_modules and a file called config.json.
firstly, when you clone this repository on your local machine, make sure install all the dependencies required 
```
npm install
```
then create a file called `config.json` inside your repository project.
*Basicaly this file includes all the environment variables for development and test mode*
make sure you follow this structure
```json
{
    "development": {
        "PORT": "5000",
        ...
    }, 
    "test": {
        "PORT": "5000",
        ...
    }
}
```
Options that are required:
| Option      | Required |
|-------------|---------:|
| PORT        | True     |
| MONGODB_URI | True     |
| JWT_KEY     | True     |

## Code Writing Rules
We're following a set of rules that we hope any other contributer uses.
As we're seeing a lot o coders and developers write such a terrible and unreadable code.
So our biggest goal from those rules is to make your code more readable and DRY.

* Use a meaningful names for variables, constants, routes, and functions.
* Get rid of any dependency, file, variable and function that you're not using and you're not planning to.
* DRY _Don't repeat your self_ by thinking before you write any code and try to use functions as you can.
* Write small comment for each block of code you're writing.
* Be modular.

Any codes that are not readable, are not acceptable.

## Pull Request Process
1. Update the README.md file with details on major changes, this includes environment variables, requests, routes, exposed ports, useful file location, database strecture, additional dependencies.
2. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](https://semver.org/).
3. Include details for your changes, and make sure you specify the major details.

## Code of Conduct
### Our Standards
Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others’ private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

### Our Responsibilities
Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

### Scope
This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

### Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the author of this repository at bouabdallahazeddine@gmail.com. All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project’s leadership.

### Attribution
This Code of Conduct is adapted from the [Contributor Covenant](https://www.contributor-covenant.org/version/1/4/code-of-conduct), version 1.4, available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html

For answers to common questions about this code of conduct, see [FAQ](https://www.contributor-covenant.org/faq)

