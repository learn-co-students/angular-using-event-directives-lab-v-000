# Using event based Directives

## Objectives

- Write a Controller function to update the View
- Use ng-click to run the Controller function

## Instructions

We've prepared the base structure for our application in this repo. Clone the repo, and have a look around the code.

We've got a very basic `VoteController` - this deals with users adding and removing votes.

We also have the vote count displayed on the page, with two buttons to modify the vote count (but don't work).

Your task is to make this two buttons work - incrementing and decrementing the view count accordingly. The buttons should make reference to the `incrementVotes` and `decrementVotes` functions provided for you in the controller.

Bonus task: Only allow the user to affect the vote count by +/- 1. For example, once they've added a vote, if they try to add another vote it should remove their original vote (acting as a toggle). If they remove a vote, it should only work once. From `5` votes, the user should only be able to make the total either `4`, `5` or `6`. 

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/angular-using-event-directives-lab'>Angular Using Event Based Directives Lab</a> on Learn.co and start learning to code for free.</p>
