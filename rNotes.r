# Load the dplyr package
library(dplyr)

# Load the iris dataset
data("iris")

###############################################################################################################################################################

# Select the Sepal.Length and Sepal.Width columns from the iris data frame
iris_subset <- select(iris, Sepal.Length, Sepal.Width)
# Print the resulting data frame
print(iris_subset)

###############################################################################################################################################################

# Select rows from the iris data frame where Sepal.Length is greater than 5
iris_filtered <- filter(iris, Sepal.Length > 5)
# Print the resulting data frame
print(iris_filtered)

###############################################################################################################################################################

# Sort the iris data frame by Sepal.Length in ascending order
iris_sorted <- arrange(iris, Sepal.Length)
# Print the resulting data frame
print(iris_sorted)

# Add a new column to the iris data frame called Sepal.Ratio that is the ratio of Sepal.Width to Sepal.Length
iris_modified <- mutate(iris, Sepal.Ratio = Sepal.Width / Sepal.Length)
# Print the resulting data frame
print(iris_modified)

###############################################################################################################################################################

# Use the summarise() function to calculate the mean of the Sepal.Length variable
iris_summary <- summarise(iris, mean_sepal_length = mean(Sepal.Length))
# Print the resulting summary
print(iris_summary)

###############################################################################################################################################################

# Group the iris data frame by Species and use the summarise() function to calculate the mean Sepal.Length for each group
iris_summary <- iris %>%
  group_by(Species) %>%
  summarise(mean_sepal_length = mean(Sepal.Length))
# Print the resulting summary
print(iris_summary)

###############################################################################################################################################################

#PIPE OPERATOR
# Use the pipe operator to group the iris data frame by Species, select the Sepal.Length and Sepal.Width columns, and calculate the mean of each column
iris_summary <- iris %>%
  group_by(Species) %>%
  select(Sepal.Length, Sepal.Width) %>%
  summarise(mean_sepal_length = mean(Sepal.Length), mean_sepal_width = mean(Sepal.Width))
# Print the resulting summary
print(iris_summary)

###############################################################################################################################################################

# Create a second data frame with additional data for each species
species_data <- data.frame(Species = c("setosa", "versicolor", "virginica"), 
                           Habitat = c("meadows", "open forests", "rainforests"))

# Inner join the iris and species_data data frames on the Species column
iris_species <- inner_join(iris, species_data, by = "Species")
# Left join: returns all rows from the left data frame, with missing values for columns that do not match
# Load the dplyr package
library(dplyr)

# Left join the iris and species_data data frames on the Species column
iris_species <- left_join(iris, species_data, by = "Species")
# Right join: returns all rows from the right data frame, with missing values for columns that do not match
# Load the dplyr package
library(dplyr)

# Right join the iris and species_data data frames on the Species column
iris_species <- right_join(iris, species_data, by = "Species")
# Full outer join: returns all rows from both data frames, with missing values for columns that do not match
# Load the dplyr package
library(dplyr)

# Full outer join the iris and species_data data frames on the Species column
iris_species <- full_join(iris, species_data, by = "Species")