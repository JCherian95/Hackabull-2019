# Best Hack for Social Good - Hackabull

## Cloning the repository

If you have a high-bandwidth connection, I recommend starting with a fresh clone of the repo.
	
	git clone git@github.com:JCherian95/SG-Hackabull.git

**OR**

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.
1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

---

## Getting set up

1. Go to **BitBucket** website and Click on '**Clone in Sourcetree**'
2. Install **Microsoft Visual Studio Code** (VS Code)
3. Install VS Code **Python Extenstion**
4. Install **Python v3.x** and Add Python to Path (Advanced System Settings > Advanced (Tab) > 'Environment Variables..')
5. Run the following command inside VS Code Terminal (MAKE SURE YOU ARE INSIDE THE DIRECTORY **openspot**)
	
	python -m venv env
	
6. Click *ctrl + shift + p* and Select **Python Interpreter**. Then select the Python Interpreter as python.exe (MAKE SURE THE DIRECTOR IS *.env*)
7. Run *ctrl + shift + p* and Search **launch.json** and Click open launch.json
8. Run the following command in the VS Code Terminal
	
	python -m pip install -r requirements.txt

9. Go to the **Debug** from the side pannel in VS Code and Select the configurations (Python), switch to Django, and run it!
10. On the bottom left switch to the **master** branch if you can't view the webpage correctly.

---

## Test your changes before commiting

*Please run your changes before commiting to BitBucket. The test looks for things that may cause issues with the site and tries to keep our content consistent. It's part of the deployment process, so BitBucket will fail if there are any errors!*

**To Run:**
