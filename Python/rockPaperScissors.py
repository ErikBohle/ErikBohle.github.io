import random 
rps = ["Rock", "Paper", "Scissors"]
computer = rps[random.randint(0,2)]

player = False

while player == False:
  player = input("Rock, Paper, Scissors?!")
  if player == computer:
    print("Tie!")
  elif player == "Rock":
   if computer == "Paper":
      print("You lose!")
   else:
      print("You win!")
  elif player == "Paper":
   if computer == "Scissors":
      print("You lose!")
   else:
      print("You win!")
  elif player == "Scissors":
   if computer == "Rock":
      print ("You lose!")
   else:
      print("You win!")
  else:
    print("Not a valid input")

