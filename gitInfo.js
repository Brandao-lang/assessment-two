/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Git is a version control tool that allows coders to keep track of different versions of their code. These versions are pushed to git's github website where all saved versions of the code can be seen at once "

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "GitHub is where code is pushed to from git. Whereas git is for saving and pushing versions of code from your local machine, github is where multiple coders can collaborate to see everyone's versions of the same code. This is where changes to a collaborative project are evaluated and commited"

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/


//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {
    description: "Initiliazes a file to act as a repository to begin commiting and pushing code to github",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {
    description: "clones an established repository into a new file",
    code: "git clone"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description: "shows what files in the repository have been modified, or if any changes have been made. Useful for seeing if your changes have been saved",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {
    description: "the git add command makes it so that your changes are being tracked within the repository, it is a necessary step before commiting all of the changes",
    code: "git add . for all fies or git add fileName.js for a specific file"
}


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description: "git commit is a way to save all of the changes that were being tracked with git add. This is a necessary step before pushing",
    code: "git commit -m 'commit message'"
}



//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description: "after tracking and saving all changes with git add and commit you can use the push command to send your files as a stored version on github",
    code: "git push origin master (or main)"
}
