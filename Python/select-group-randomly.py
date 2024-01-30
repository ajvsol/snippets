import random

# Define the groups
groups = ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"]

# Define the probabilities
# probabilities = [32, 16, 8, 4, 2, 1]
probabilities = [6, 5, 4, 3, 2, 1]

# Randomly pick a group based on the probabilities
group = random.choices(groups, weights=probabilities, k=1)[0]

# Return the selected group
print(f"The randomly selected group is **{group}**.")