# Atelier

## Inital Set up

### _Download our repo into your local computer_ ###

- **git clone [remote-repo-URL]**: Makes a copy of the specified repository, but on your local computer. Also creates a working directory that has files arranged exactly like the most recent snapshot in the download repository. Also records the URL of the remote repository for subsequent network data transfers, and gives it the special remote-repo-name “origin”.

### _Set up your local computer and create branches_ ###

- **git remote add [remote-repo-name] [remote-repo-URL]**: Records a new location for network data transfers.

- **git remote -v**: Lists all locations for network data transfers.

- **git branch [new-branch-name]**: The following command will create a branch off of your current branch.

- **git checkout [destination-branch]**: This command lets you switch from one branch to another by changing which branch your [HEAD] pointer references.

- **git branch -v**: You can easily figure out which branch you are on with this command:

### _Push your change into our repo_ ###
- **git push [remote-name] [remote-branch]**: You may wish to update the contents of a remote repo by adding some commits that you made locally.

### _Merging and resolving conflicts_ ###
Switch back to the master branch and pull the latest master branch from github
- **git checkout [base-branch-name]**: Switch back to the master branch
- **git pull origin**: Pull the latest master branch

Rebase your branch (option 1)
- **git checkout [branch-name]**: Switch back to the working branch
- **git rebase [base-branch-name]**: Rebase your working branch with the latest master branch

Merge your branch (option 2)
- **git checkout [branch-name]**: Switch back to the working branch
- **git merge [base-branch-name]**: Merge your working branch with the latest master branch
