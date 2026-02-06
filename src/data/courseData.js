export const courseData = {
  title: "Data Science",
  subtitle: "Analyze, visualize, and extract insights from data",
  chapters: [
    {
      id: 1,
      title: "Introduction to Data Science",
      description: "What is data science and why it matters",
      lessons: [
        {
          id: "1-1",
          title: "What is Data Science?",
          duration: "10 min",
          content: `
## Welcome to Data Science! 📊

Data Science is the art and science of extracting meaningful insights from data. It combines statistics, programming, and domain expertise to solve real-world problems.

### Why Data Science Matters

Every organization generates massive amounts of data:
- **Tech Companies** — User behavior, clicks, purchases
- **Healthcare** — Patient records, medical imaging, drug trials
- **Finance** — Transactions, market data, risk assessment
- **Retail** — Sales, inventory, customer preferences
- **Sports** — Player performance, game statistics

Data Scientists turn this raw data into actionable insights!

### The Data Science Process

| Step | Description | Tools |
|------|-------------|-------|
| **1. Define the Problem** | What question are we trying to answer? | Domain expertise |
| **2. Collect Data** | Gather relevant data from various sources | SQL, APIs, Web scraping |
| **3. Clean Data** | Handle missing values, outliers, inconsistencies | Pandas, NumPy |
| **4. Explore Data** | Understand patterns and relationships | Matplotlib, Seaborn |
| **5. Model Data** | Build predictive or descriptive models | Scikit-learn, TensorFlow |
| **6. Communicate** | Present findings to stakeholders | Jupyter, Dashboards |

### Key Skills for Data Scientists

\`\`\`
Programming:
├── Python (most popular)
├── R (statistics-focused)
├── SQL (database queries)
└── Command Line

Mathematics:
├── Statistics & Probability
├── Linear Algebra
├── Calculus
└── Optimization

Domain Skills:
├── Business Understanding
├── Communication
├── Critical Thinking
└── Visualization
\`\`\`

### Your Data Science Toolkit

\`\`\`python
# Essential Python libraries
import pandas as pd       # Data manipulation
import numpy as np        # Numerical computing
import matplotlib.pyplot as plt  # Visualization
import seaborn as sns     # Statistical visualization
import sklearn            # Machine learning
\`\`\`

<tip>
💡 You don't need to be an expert in everything! Most data scientists specialize in certain areas. Start with Python, Pandas, and basic statistics.
</tip>

### Types of Data Science Problems

**1. Descriptive Analytics** — What happened?
\`\`\`
"Total sales last quarter were $2.5M"
"Website traffic increased by 15%"
\`\`\`

**2. Diagnostic Analytics** — Why did it happen?
\`\`\`
"Sales dropped because of supply chain issues"
"Traffic increased due to viral social media post"
\`\`\`

**3. Predictive Analytics** — What will happen?
\`\`\`
"We predict sales will increase 10% next quarter"
"Customer churn probability is 25%"
\`\`\`

**4. Prescriptive Analytics** — What should we do?
\`\`\`
"Offer a 15% discount to high-churn-risk customers"
"Increase inventory by 20% for the holiday season"
\`\`\`

### Real-World Data Science Applications

| Industry | Application | Impact |
|----------|-------------|--------|
| Netflix | Recommendation system | 75% of watched content |
| Amazon | Dynamic pricing | Billions in revenue |
| Spotify | Discover Weekly | 40M users weekly |
| Healthcare | Disease prediction | Early intervention |
| Finance | Fraud detection | $billions saved |

### Career Paths in Data Science

\`\`\`
Data Analyst
    ↓
Data Scientist
    ↓
Senior Data Scientist
    ↓
Lead/Principal Data Scientist
    ↓
Chief Data Officer

Alternative paths:
├── Machine Learning Engineer
├── Data Engineer
├── Business Intelligence Analyst
└── Research Scientist
\`\`\`

<warning>
⚠️ Data Science is not just about algorithms! Understanding the business problem and communicating results effectively are equally important skills.
</warning>

### Setting Up Your Environment

\`\`\`bash
# Install Python with Anaconda (recommended)
# Download from: https://www.anaconda.com/

# Or use pip
pip install pandas numpy matplotlib seaborn scikit-learn jupyter

# Start Jupyter Notebook
jupyter notebook
\`\`\`

Let's begin your data science journey! 🚀
### 🎯 Practice Exercise

**Exercise: Data Science in Your World**

1. Pick an industry you're interested in (gaming, music, sports, etc.)
2. List 3 questions that data science could answer in that industry
3. For each question, identify what data you'd need to collect
4. Classify each question as descriptive, diagnostic, predictive, or prescriptive

\`\`\`python
# Example template:
industry = "Music Streaming"
questions = {
    "descriptive": "What are the top 10 most-played songs this month?",
    "diagnostic": "Why did user engagement drop in Q3?",
    "predictive": "Which new artists will go viral next quarter?",
    "prescriptive": "What playlist recommendations maximize listening time?"
}

for q_type, question in questions.items():
    print(f"[{q_type.upper()}] {question}")
\`\`\`

Try creating your own for a different industry!

          `
        },
        {
          id: "1-2",
          title: "Python Basics for Data Science",
          duration: "15 min",
          content: `
## Python Fundamentals for Data Science 🐍

Python is the most popular language for data science. Let's cover the essentials!

### Why Python?

- **Easy to learn** — Clean, readable syntax
- **Rich ecosystem** — Thousands of libraries
- **Community** — Huge support community
- **Versatility** — Web, automation, ML, everything!

### Basic Data Types

\`\`\`python
# Numbers
integer = 42
float_num = 3.14
scientific = 1.5e6  # 1,500,000

# Strings
name = "Data Science"
multiline = """
This is a
multiline string
"""

# Booleans
is_active = True
is_empty = False

# None (null/empty value)
result = None

# Type checking
print(type(42))      # <class 'int'>
print(type(3.14))    # <class 'float'>
print(type("hello")) # <class 'str'>
\`\`\`

### Collections

\`\`\`python
# Lists - ordered, mutable
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, True]
numbers.append(6)
numbers[0] = 100
print(numbers)  # [100, 2, 3, 4, 5, 6]

# Tuples - ordered, immutable
coordinates = (10, 20)
rgb = (255, 128, 0)
# rgb[0] = 200  # Error! Can't modify

# Dictionaries - key-value pairs
person = {
    "name": "Alice",
    "age": 30,
    "city": "NYC"
}
print(person["name"])  # Alice
person["email"] = "alice@email.com"

# Sets - unique values only
unique_nums = {1, 2, 3, 3, 4, 4}
print(unique_nums)  # {1, 2, 3, 4}
\`\`\`

### List Comprehensions

A powerful Python feature for creating lists:

\`\`\`python
# Traditional way
squares = []
for x in range(10):
    squares.append(x ** 2)

# List comprehension (Pythonic way!)
squares = [x ** 2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Dictionary comprehension
square_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# With transformation
names = ["alice", "bob", "charlie"]
upper_names = [name.upper() for name in names]
# ['ALICE', 'BOB', 'CHARLIE']
\`\`\`

<tip>
💡 List comprehensions are not just shorter — they're often faster than traditional loops because they're optimized by Python!
</tip>

### Functions

\`\`\`python
# Basic function
def greet(name):
    return f"Hello, {name}!"

print(greet("Data Scientist"))

# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(5))      # 25
print(power(5, 3))   # 125

# Multiple return values
def stats(numbers):
    return min(numbers), max(numbers), sum(numbers)/len(numbers)

minimum, maximum, average = stats([1, 2, 3, 4, 5])

# Lambda functions (anonymous)
square = lambda x: x ** 2
add = lambda a, b: a + b

# Useful with map, filter
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x%2==0, numbers))
\`\`\`

### Working with Files

\`\`\`python
# Reading a file
with open('data.txt', 'r') as file:
    content = file.read()
    # or line by line:
    # lines = file.readlines()

# Writing to a file
with open('output.txt', 'w') as file:
    file.write("Hello, World!")

# Reading CSV (basic - use pandas for data science!)
import csv
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# JSON
import json
data = {"name": "Alice", "age": 30}
json_string = json.dumps(data)  # To JSON string
parsed = json.loads(json_string)  # From JSON string
\`\`\`

### Error Handling

\`\`\`python
# Try-except blocks
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always runs")

# Useful for data loading
def safe_load_data(filepath):
    try:
        with open(filepath, 'r') as f:
            return f.read()
    except FileNotFoundError:
        print(f"File not found: {filepath}")
        return None
\`\`\`

### Classes (Object-Oriented Programming)

\`\`\`python
class DataAnalyzer:
    def __init__(self, data):
        self.data = data
        self.cleaned = False
    
    def clean(self):
        # Remove None values
        self.data = [x for x in self.data if x is not None]
        self.cleaned = True
        return self
    
    def summary(self):
        return {
            "count": len(self.data),
            "mean": sum(self.data) / len(self.data),
            "min": min(self.data),
            "max": max(self.data)
        }

# Usage
analyzer = DataAnalyzer([1, 2, None, 4, 5, None, 7])
analyzer.clean()
print(analyzer.summary())
# {'count': 5, 'mean': 3.8, 'min': 1, 'max': 7}
\`\`\`

<warning>
⚠️ While you can write your own data analysis classes, in practice you'll use Pandas which provides all this functionality (and much more) out of the box!
</warning>

Now you have the Python foundation for data science! 🎯
          `
        }
      ]
    },
    {
      id: 2,
      title: "NumPy Fundamentals",
      description: "Numerical computing with arrays",
      lessons: [
        {
          id: "2-1",
          title: "Introduction to NumPy Arrays",
          duration: "14 min",
          content: `
## NumPy — The Foundation of Data Science 🔢

NumPy (Numerical Python) is the fundamental library for numerical computing in Python. It provides powerful N-dimensional arrays and mathematical functions.

### Why NumPy?

\`\`\`python
# Python lists are slow for numerical operations
python_list = list(range(1000000))

# NumPy arrays are MUCH faster (10-100x)
import numpy as np
numpy_array = np.arange(1000000)
\`\`\`

| Operation | Python List | NumPy Array |
|-----------|-------------|-------------|
| Element-wise multiply | Loop required | arr * 2 |
| Sum | sum(list) | arr.sum() |
| Mean | sum(list)/len(list) | arr.mean() |
| Speed | Slow | 10-100x faster |

### Creating Arrays

\`\`\`python
import numpy as np

# From Python list
arr = np.array([1, 2, 3, 4, 5])
print(arr)  # [1 2 3 4 5]

# 2D array (matrix)
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])
print(matrix)
# [[1 2 3]
#  [4 5 6]
#  [7 8 9]]

# Specify data type
float_arr = np.array([1, 2, 3], dtype=np.float64)

# Common array creation functions
zeros = np.zeros((3, 4))      # 3x4 array of zeros
ones = np.ones((2, 3))        # 2x3 array of ones
empty = np.empty((2, 2))      # Uninitialized (fast)
full = np.full((3, 3), 7)     # 3x3 array filled with 7

# Sequences
range_arr = np.arange(0, 10, 2)     # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)     # [0, 0.25, 0.5, 0.75, 1.0]

# Identity matrix
identity = np.eye(3)
# [[1. 0. 0.]
#  [0. 1. 0.]
#  [0. 0. 1.]]

# Random arrays
random = np.random.rand(3, 3)         # Uniform [0, 1)
randn = np.random.randn(3, 3)         # Standard normal
randint = np.random.randint(0, 10, (3, 3))  # Random integers
\`\`\`

### Array Properties

\`\`\`python
arr = np.array([[1, 2, 3], [4, 5, 6]])

print(arr.shape)      # (2, 3) - rows, columns
print(arr.ndim)       # 2 - number of dimensions
print(arr.size)       # 6 - total elements
print(arr.dtype)      # int64 - data type
print(arr.itemsize)   # 8 - bytes per element
print(arr.nbytes)     # 48 - total bytes
\`\`\`

### Indexing and Slicing

\`\`\`python
arr = np.array([10, 20, 30, 40, 50])

# Basic indexing
print(arr[0])      # 10
print(arr[-1])     # 50

# Slicing [start:stop:step]
print(arr[1:4])    # [20 30 40]
print(arr[::2])    # [10 30 50] - every 2nd element
print(arr[::-1])   # [50 40 30 20 10] - reversed

# 2D array indexing
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print(matrix[0, 0])    # 1
print(matrix[1, 2])    # 6
print(matrix[0])       # [1 2 3] - first row
print(matrix[:, 0])    # [1 4 7] - first column
print(matrix[:2, :2])  # [[1 2], [4 5]] - top-left 2x2

# Boolean indexing
arr = np.array([1, 2, 3, 4, 5, 6])
print(arr[arr > 3])    # [4 5 6]
print(arr[arr % 2 == 0])  # [2 4 6]

# Fancy indexing
print(arr[[0, 2, 4]])  # [1 3 5] - elements at indices 0, 2, 4
\`\`\`

<tip>
💡 NumPy slices return **views**, not copies! Modifying a slice modifies the original array. Use \`.copy()\` if you need a true copy.
</tip>

### Reshaping Arrays

\`\`\`python
arr = np.arange(12)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

# Reshape
reshaped = arr.reshape(3, 4)
print(reshaped)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# Reshape with -1 (infer dimension)
auto = arr.reshape(2, -1)  # 2 rows, auto-calculate columns
print(auto.shape)  # (2, 6)

# Flatten (multi-D to 1D)
flat = reshaped.flatten()  # Returns copy
ravel = reshaped.ravel()   # Returns view

# Transpose
transposed = reshaped.T
print(transposed.shape)  # (4, 3)

# Add dimension
arr_1d = np.array([1, 2, 3])
row_vector = arr_1d[np.newaxis, :]  # (1, 3)
col_vector = arr_1d[:, np.newaxis]  # (3, 1)
\`\`\`

### Array Mathematics

\`\`\`python
a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# Element-wise operations
print(a + b)   # [ 6  8 10 12]
print(a - b)   # [-4 -4 -4 -4]
print(a * b)   # [ 5 12 21 32]
print(a / b)   # [0.2  0.33 0.43 0.5]
print(a ** 2)  # [ 1  4  9 16]

# Broadcasting (different shapes)
print(a * 2)   # [2 4 6 8]
print(a + 10)  # [11 12 13 14]

# Aggregations
print(a.sum())    # 10
print(a.mean())   # 2.5
print(a.std())    # 1.118
print(a.min())    # 1
print(a.max())    # 4
print(a.cumsum()) # [ 1  3  6 10] - cumulative sum

# Along axes (for 2D)
matrix = np.array([[1, 2], [3, 4], [5, 6]])
print(matrix.sum(axis=0))  # [9 12] - sum each column
print(matrix.sum(axis=1))  # [3 7 11] - sum each row
\`\`\`

<warning>
⚠️ Be careful with integer division! In NumPy, integer arrays divided by integers still give integers. Use \`a / b.astype(float)\` if you need decimal results.
</warning>

NumPy is the foundation — master it before moving to Pandas! 💪
### 🎯 Practice Exercise

**Exercise: NumPy Array Workout**

Try these challenges in a Jupyter notebook:

\`\`\`python
import numpy as np

# Challenge 1: Create a 5x5 identity matrix
identity = np.eye(5)
print("Identity matrix:\n", identity)

# Challenge 2: Create an array of 20 evenly spaced values between 0 and 1
linspace_arr = np.linspace(0, 1, 20)
print("\nLinspace:", linspace_arr)

# Challenge 3: Create a 3x3 matrix of random integers between 1 and 100
random_matrix = np.random.randint(1, 101, size=(3, 3))
print("\nRandom matrix:\n", random_matrix)

# Challenge 4: Calculate the mean of each row and column
print("Row means:", random_matrix.mean(axis=1))
print("Column means:", random_matrix.mean(axis=0))

# Challenge 5: Normalize the matrix (subtract mean, divide by std)
normalized = (random_matrix - random_matrix.mean()) / random_matrix.std()
print("\nNormalized:\n", normalized)
\`\`\`

**Bonus:** Create a function that generates a "heatmap" using NumPy arrays and prints it with symbols (█ for high values, ░ for low values).

          `
        },
        {
          id: "2-2",
          title: "Advanced NumPy Operations",
          duration: "12 min",
          content: `
## Advanced NumPy — Broadcasting, Linear Algebra & More 🔬

Let's explore more powerful NumPy features used in data science and machine learning.

### Broadcasting Rules

Broadcasting allows NumPy to perform operations on arrays with different shapes:

\`\`\`python
import numpy as np

# Scalar broadcast
arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr * 2)
# [[ 2  4  6]
#  [ 8 10 12]]

# 1D with 2D
row = np.array([1, 2, 3])
matrix = np.array([[1, 1, 1], [2, 2, 2], [3, 3, 3]])
print(matrix + row)
# [[2 3 4]
#  [3 4 5]
#  [4 5 6]]

# Column broadcast
col = np.array([[10], [20], [30]])
print(matrix + col)
# [[11 11 11]
#  [22 22 22]
#  [33 33 33]]
\`\`\`

\`\`\`
Broadcasting Rules:
1. If arrays have different ndim, prepend 1s to smaller shape
2. Arrays with size 1 along a dimension act as if they had the size of the larger array
3. An error is raised if sizes don't match and neither is 1

Example:
(3, 4) + (4,) → (3, 4) + (1, 4) → Valid!
(3, 4) + (3,) → Error! 4 != 3
\`\`\`

### Linear Algebra

\`\`\`python
import numpy as np

# Matrix multiplication
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Using @ operator (Python 3.5+)
print(A @ B)
# [[19 22]
#  [43 50]]

# Using np.dot
print(np.dot(A, B))  # Same result

# Matrix-vector multiplication
v = np.array([1, 2])
print(A @ v)  # [ 5 11]

# Transpose
print(A.T)
# [[1 3]
#  [2 4]]

# Determinant
print(np.linalg.det(A))  # -2.0

# Inverse
print(np.linalg.inv(A))
# [[-2.   1. ]
#  [ 1.5 -0.5]]

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(A)
print("Eigenvalues:", eigenvalues)

# Solve linear equations (Ax = b)
A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = np.linalg.solve(A, b)
print(x)  # [2. 3.] → 3*2 + 1*3 = 9, 1*2 + 2*3 = 8
\`\`\`

<tip>
💡 Matrix multiplication with \`@\` is much more readable than \`np.dot()\`. Use it for cleaner code!
</tip>

### Statistical Functions

\`\`\`python
data = np.random.randn(1000)  # 1000 random normal values

# Basic statistics
print(f"Mean: {np.mean(data):.4f}")
print(f"Median: {np.median(data):.4f}")
print(f"Std Dev: {np.std(data):.4f}")
print(f"Variance: {np.var(data):.4f}")

# Percentiles
print(f"25th percentile: {np.percentile(data, 25):.4f}")
print(f"75th percentile: {np.percentile(data, 75):.4f}")

# Min, Max, Range
print(f"Min: {np.min(data):.4f}")
print(f"Max: {np.max(data):.4f}")
print(f"Range: {np.ptp(data):.4f}")  # peak to peak

# Correlation coefficient
x = np.random.randn(100)
y = x * 2 + np.random.randn(100) * 0.5
correlation = np.corrcoef(x, y)
print(f"Correlation: {correlation[0, 1]:.4f}")

# Histogram bins
hist, bin_edges = np.histogram(data, bins=10)
print("Bin counts:", hist)
\`\`\`

### Conditional Logic

\`\`\`python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

# np.where - conditional selection
result = np.where(arr > 5, arr, 0)
print(result)  # [ 0  0  0  0  0  6  7  8  9 10]

# Multiple conditions
result = np.where(arr > 7, "high",
          np.where(arr > 3, "medium", "low"))
print(result)
# ['low' 'low' 'low' 'medium' 'medium' 'medium' 'medium' 'high' 'high' 'high']

# np.select for multiple conditions
conditions = [
    arr < 3,
    (arr >= 3) & (arr < 7),
    arr >= 7
]
choices = ["low", "medium", "high"]
result = np.select(conditions, choices)
print(result)

# Clip values (limit range)
print(np.clip(arr, 3, 8))  # [3 3 3 4 5 6 7 8 8 8]
\`\`\`

### Sorting and Searching

\`\`\`python
arr = np.array([3, 1, 4, 1, 5, 9, 2, 6])

# Sort (returns copy)
sorted_arr = np.sort(arr)
print(sorted_arr)  # [1 1 2 3 4 5 6 9]

# Sort in-place
arr_copy = arr.copy()
arr_copy.sort()

# Get sorted indices
indices = np.argsort(arr)
print(indices)  # [1 3 6 0 2 4 7 5]
print(arr[indices])  # Sorted array

# Reverse sort
print(arr[np.argsort(arr)[::-1]])  # Descending

# Find unique values
arr2 = np.array([1, 2, 2, 3, 3, 3, 4])
print(np.unique(arr2))  # [1 2 3 4]
print(np.unique(arr2, return_counts=True))
# (array([1, 2, 3, 4]), array([1, 2, 3, 1]))

# Search sorted (for binary search in sorted array)
sorted_arr = np.array([1, 3, 5, 7, 9])
print(np.searchsorted(sorted_arr, 4))  # 2 (insert position)
\`\`\`

### Stacking and Splitting

\`\`\`python
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# Vertical stack (row-wise)
print(np.vstack([a, b]))
# [[1 2 3]
#  [4 5 6]]

# Horizontal stack (column-wise)
print(np.hstack([a, b]))
# [1 2 3 4 5 6]

# Column stack
print(np.column_stack([a, b]))
# [[1 4]
#  [2 5]
#  [3 6]]

# Concatenate along axis
matrix = np.array([[1, 2], [3, 4]])
print(np.concatenate([matrix, matrix], axis=0))  # Vertical
print(np.concatenate([matrix, matrix], axis=1))  # Horizontal

# Splitting
arr = np.arange(12).reshape(3, 4)
print(np.hsplit(arr, 2))  # Split into 2 horizontally
print(np.vsplit(arr, 3))  # Split into 3 vertically
\`\`\`

<warning>
⚠️ NumPy operations often return views, not copies. Be careful when modifying arrays — you might accidentally change the original!
</warning>

You now have a solid NumPy foundation! 🎓
### 🎯 Practice Exercise

**Exercise: NumPy Advanced Operations**

\`\`\`python
import numpy as np

# Challenge 1: Broadcasting - Add a bias vector to each row
matrix = np.random.randn(4, 3)
bias = np.array([1.0, -0.5, 0.2])
result = matrix + bias
print("Broadcasted result:\n", result)

# Challenge 2: Solve this system of equations using np.linalg.solve
# 2x + 3y = 8
# 4x + y = 10
A = np.array([[2, 3], [4, 1]])
b = np.array([8, 10])
solution = np.linalg.solve(A, b)
print(f"\nx = {solution[0]:.2f}, y = {solution[1]:.2f}")

# Challenge 3: Use np.where to categorize test scores
scores = np.array([92, 65, 78, 45, 88, 55, 73, 96])
grades = np.where(scores >= 90, 'A',
         np.where(scores >= 80, 'B',
         np.where(scores >= 70, 'C',
         np.where(scores >= 60, 'D', 'F'))))
print("\nGrades:", grades)
\`\`\`

Try modifying the score thresholds and adding a +/- system (A+, A, A-, etc.)!

          `
        }
      ]
    },
    {
      id: 3,
      title: "Pandas Essentials",
      description: "Data manipulation and analysis",
      lessons: [
        {
          id: "3-1",
          title: "Introduction to Pandas",
          duration: "15 min",
          content: `
## Pandas — The Data Analysis Powerhouse 🐼

Pandas is THE library for data manipulation and analysis in Python. It provides two main data structures: Series (1D) and DataFrame (2D).

### Series — 1D Labeled Array

\`\`\`python
import pandas as pd
import numpy as np

# Create Series from list
s = pd.Series([10, 20, 30, 40, 50])
print(s)
# 0    10
# 1    20
# 2    30
# 3    40
# 4    50
# dtype: int64

# Custom index
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(s['b'])  # 20

# From dictionary
d = {'apple': 100, 'banana': 200, 'cherry': 150}
s = pd.Series(d)
print(s)

# Series operations
print(s.sum())      # 450
print(s.mean())     # 150
print(s.max())      # 200
print(s > 100)      # Boolean Series
\`\`\`

### DataFrame — 2D Labeled Data

\`\`\`python
# Create DataFrame from dictionary
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'age': [25, 30, 35, 28],
    'city': ['NYC', 'LA', 'Chicago', 'NYC'],
    'salary': [50000, 60000, 70000, 55000]
}
df = pd.DataFrame(data)
print(df)
#       name  age     city  salary
# 0    Alice   25      NYC   50000
# 1      Bob   30       LA   60000
# 2  Charlie   35  Chicago   70000
# 3    Diana   28      NYC   55000

# Basic information
print(df.shape)      # (4, 4)
print(df.columns)    # Index(['name', 'age', 'city', 'salary'])
print(df.dtypes)     # Data types per column
print(df.info())     # Summary info
print(df.describe()) # Statistical summary
\`\`\`

### Reading and Writing Data

\`\`\`python
# CSV files
df = pd.read_csv('data.csv')
df.to_csv('output.csv', index=False)

# Excel files
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')
df.to_excel('output.xlsx', index=False)

# JSON
df = pd.read_json('data.json')
df.to_json('output.json')

# From URL
url = 'https://example.com/data.csv'
df = pd.read_csv(url)

# Reading large files
df = pd.read_csv('large_file.csv', 
                 nrows=1000,        # Read only first 1000 rows
                 usecols=['col1', 'col2'])  # Only specific columns
\`\`\`

<tip>
💡 Use \`pd.read_csv('file.csv', nrows=5)\` to quickly peek at large files without loading everything into memory!
</tip>

### Selecting Data

\`\`\`python
# Select column
print(df['name'])           # Returns Series
print(df[['name', 'age']])  # Returns DataFrame

# Select rows by index
print(df.loc[0])            # By label
print(df.iloc[0])           # By position
print(df.loc[0:2])          # Label-based slicing (inclusive!)
print(df.iloc[0:2])         # Position-based slicing (exclusive)

# Select specific cell
print(df.loc[0, 'name'])    # 'Alice'
print(df.iloc[0, 0])        # 'Alice'

# Select multiple rows and columns
print(df.loc[0:2, ['name', 'city']])
print(df.iloc[0:2, [0, 2]])

# Boolean selection (filtering)
print(df[df['age'] > 28])
print(df[df['city'] == 'NYC'])

# Multiple conditions
print(df[(df['age'] > 25) & (df['salary'] > 55000)])
print(df[(df['city'] == 'NYC') | (df['city'] == 'LA')])

# isin for multiple values
print(df[df['city'].isin(['NYC', 'LA'])])

# Query method (SQL-like)
print(df.query('age > 28 and salary > 50000'))
\`\`\`

### Adding and Modifying Columns

\`\`\`python
# Add new column
df['bonus'] = df['salary'] * 0.1
df['full_name'] = df['name'] + ' Smith'

# Conditional column
df['senior'] = df['age'] >= 30
df['level'] = np.where(df['salary'] > 60000, 'high', 'low')

# Apply function to column
df['name_length'] = df['name'].apply(len)
df['name_upper'] = df['name'].str.upper()

# Multiple conditions with np.select
conditions = [
    df['salary'] < 55000,
    (df['salary'] >= 55000) & (df['salary'] < 65000),
    df['salary'] >= 65000
]
choices = ['low', 'medium', 'high']
df['salary_level'] = np.select(conditions, choices)

# Rename columns
df = df.rename(columns={'name': 'full_name', 'city': 'location'})

# Drop columns
df = df.drop(columns=['bonus', 'level'])
\`\`\`

### Sorting Data

\`\`\`python
# Sort by column
df_sorted = df.sort_values('age')
df_sorted = df.sort_values('salary', ascending=False)

# Sort by multiple columns
df_sorted = df.sort_values(['city', 'age'], ascending=[True, False])

# Sort by index
df_sorted = df.sort_index()

# Get top/bottom N
print(df.nlargest(3, 'salary'))
print(df.nsmallest(3, 'age'))
\`\`\`

<warning>
⚠️ Most Pandas operations return a NEW DataFrame. Use \`inplace=True\` to modify the original, or reassign: \`df = df.sort_values('age')\`
</warning>

### Handling Missing Data

\`\`\`python
# Check for missing values
print(df.isnull().sum())  # Count per column
print(df.isnull().any())  # Any missing per column?

# Drop rows with missing values
df_clean = df.dropna()
df_clean = df.dropna(subset=['age', 'salary'])  # Only check specific columns

# Fill missing values
df['salary'] = df['salary'].fillna(0)
df['salary'] = df['salary'].fillna(df['salary'].mean())
df['city'] = df['city'].fillna('Unknown')

# Forward/backward fill
df['value'] = df['value'].fillna(method='ffill')  # Forward fill
df['value'] = df['value'].fillna(method='bfill')  # Backward fill

# Interpolate
df['value'] = df['value'].interpolate()
\`\`\`

Pandas is your best friend for data analysis! 🤝
### 🎯 Practice Exercise

**Exercise: Pandas DataFrame Explorer**

\`\`\`python
import pandas as pd

# Create a sample dataset
data = {
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'],
    'department': ['Engineering', 'Marketing', 'Engineering', 'Sales', 'Marketing', 'Sales'],
    'salary': [95000, 65000, 88000, 72000, 71000, 68000],
    'years_exp': [5, 2, 4, 3, 3, 1],
    'rating': [4.5, 3.8, 4.2, 4.0, 4.7, 3.5]
}
df = pd.DataFrame(data)

# Challenge 1: Filter employees with salary > 70000 AND rating > 4.0
high_performers = df[(df['salary'] > 70000) & (df['rating'] > 4.0)]
print("High performers:\n", high_performers)

# Challenge 2: Calculate average salary by department
avg_salary = df.groupby('department')['salary'].mean()
print("\nAvg salary by dept:\n", avg_salary)

# Challenge 3: Add a 'salary_per_year_exp' column
df['salary_per_year'] = df['salary'] / df['years_exp']
print("\nSalary efficiency:\n", df[['name', 'salary_per_year']])

# Challenge 4: Sort by rating descending, then by salary descending
sorted_df = df.sort_values(['rating', 'salary'], ascending=[False, False])
print("\nSorted:\n", sorted_df)
\`\`\`

**Bonus:** Add 5 more employees and create a "promotion_eligible" column based on custom criteria.

          `
        },
        {
          id: "3-2",
          title: "Advanced Pandas Operations",
          duration: "15 min",
          content: `
## Advanced Pandas — GroupBy, Merge, and Pivot 🔥

Let's master the operations that make Pandas truly powerful!

### GroupBy — Split-Apply-Combine

\`\`\`python
import pandas as pd
import numpy as np

# Sample data
df = pd.DataFrame({
    'city': ['NYC', 'LA', 'NYC', 'Chicago', 'LA', 'NYC'],
    'department': ['Sales', 'Sales', 'IT', 'IT', 'IT', 'Sales'],
    'salary': [50000, 60000, 70000, 65000, 55000, 75000],
    'years': [2, 5, 3, 4, 1, 6]
})

# Basic groupby
print(df.groupby('city')['salary'].mean())
# city
# Chicago    65000
# LA         57500
# NYC        65000

# Multiple aggregations
print(df.groupby('city')['salary'].agg(['mean', 'min', 'max', 'count']))

# Group by multiple columns
print(df.groupby(['city', 'department'])['salary'].mean())

# Multiple columns, multiple aggregations
agg_result = df.groupby('city').agg({
    'salary': ['mean', 'sum'],
    'years': ['mean', 'max']
})
print(agg_result)

# Named aggregations (cleaner output)
result = df.groupby('city').agg(
    avg_salary=('salary', 'mean'),
    total_salary=('salary', 'sum'),
    employee_count=('salary', 'count'),
    avg_years=('years', 'mean')
)
print(result)

# Custom aggregation function
def salary_range(x):
    return x.max() - x.min()

print(df.groupby('city')['salary'].agg(salary_range))
\`\`\`

<tip>
💡 GroupBy operations are lazy — they don't compute until you apply an aggregation function. This makes chaining efficient!
</tip>

### Transform and Apply

\`\`\`python
# Transform - returns same-sized output
df['salary_normalized'] = df.groupby('city')['salary'].transform(
    lambda x: (x - x.mean()) / x.std()
)

# Calculate percentage of group total
df['pct_of_city_total'] = df.groupby('city')['salary'].transform(
    lambda x: x / x.sum() * 100
)

# Fill missing with group mean
df['salary'] = df.groupby('city')['salary'].transform(
    lambda x: x.fillna(x.mean())
)

# Apply - flexible function application
def get_top_earner(group):
    return group.loc[group['salary'].idxmax()]

top_earners = df.groupby('city').apply(get_top_earner)
print(top_earners)
\`\`\`

### Merging DataFrames (Joins)

\`\`\`python
# Sample DataFrames
employees = pd.DataFrame({
    'emp_id': [1, 2, 3, 4],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'dept_id': [10, 20, 10, 30]
})

departments = pd.DataFrame({
    'dept_id': [10, 20, 40],
    'dept_name': ['Engineering', 'Marketing', 'HR']
})

# Inner join (only matching rows)
merged = pd.merge(employees, departments, on='dept_id', how='inner')
print(merged)
#    emp_id     name  dept_id    dept_name
# 0       1    Alice       10  Engineering
# 1       3  Charlie       10  Engineering
# 2       2      Bob       20    Marketing

# Left join (all from left, matching from right)
merged = pd.merge(employees, departments, on='dept_id', how='left')
# Diana's dept_name will be NaN

# Right join (all from right, matching from left)
merged = pd.merge(employees, departments, on='dept_id', how='right')
# HR department will have NaN for employee info

# Outer join (all rows from both)
merged = pd.merge(employees, departments, on='dept_id', how='outer')

# Different column names
sales = pd.DataFrame({
    'emp_no': [1, 2, 3],
    'sales': [100, 200, 150]
})
merged = pd.merge(employees, sales, left_on='emp_id', right_on='emp_no')
\`\`\`

### Concatenating DataFrames

\`\`\`python
df1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
df2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})

# Vertical concatenation (stack)
combined = pd.concat([df1, df2], ignore_index=True)
print(combined)
#    A  B
# 0  1  3
# 1  2  4
# 2  5  7
# 3  6  8

# Horizontal concatenation
combined = pd.concat([df1, df2], axis=1)

# With different columns
df3 = pd.DataFrame({'A': [1, 2], 'C': [5, 6]})
combined = pd.concat([df1, df3])  # B and C will have NaN
\`\`\`

### Pivot Tables

\`\`\`python
# Sample sales data
sales = pd.DataFrame({
    'date': ['2024-01', '2024-01', '2024-02', '2024-02', '2024-01', '2024-02'],
    'product': ['A', 'B', 'A', 'B', 'A', 'A'],
    'region': ['East', 'East', 'East', 'West', 'West', 'West'],
    'revenue': [100, 150, 120, 200, 90, 110]
})

# Pivot table
pivot = pd.pivot_table(
    sales,
    values='revenue',
    index='product',
    columns='region',
    aggfunc='sum'
)
print(pivot)
# region    East  West
# product              
# A          220   200
# B          150   200

# Multiple aggregations
pivot = pd.pivot_table(
    sales,
    values='revenue',
    index='product',
    columns='region',
    aggfunc=['sum', 'mean', 'count']
)

# With margins (totals)
pivot = pd.pivot_table(
    sales,
    values='revenue',
    index='product',
    columns='region',
    aggfunc='sum',
    margins=True,
    margins_name='Total'
)
\`\`\`

### Reshaping Data

\`\`\`python
# Melt (wide to long format)
df_wide = pd.DataFrame({
    'name': ['Alice', 'Bob'],
    'math': [90, 85],
    'science': [88, 92]
})

df_long = pd.melt(df_wide, 
                  id_vars=['name'],
                  value_vars=['math', 'science'],
                  var_name='subject',
                  value_name='score')
print(df_long)
#     name  subject  score
# 0  Alice     math     90
# 1    Bob     math     85
# 2  Alice  science     88
# 3    Bob  science     92

# Pivot (long to wide format)
df_wide_again = df_long.pivot(index='name', columns='subject', values='score')
\`\`\`

<warning>
⚠️ When merging large DataFrames, be careful about memory! Use \`merge\` indicators (\`indicator=True\`) to debug join issues.
</warning>

You can now wrangle any dataset! 💪
### 🎯 Practice Exercise

**Exercise: Advanced Pandas Operations**

\`\`\`python
import pandas as pd
import numpy as np

# Create two related DataFrames
orders = pd.DataFrame({
    'order_id': range(1, 8),
    'customer_id': [101, 102, 101, 103, 102, 104, 101],
    'product': ['Laptop', 'Phone', 'Tablet', 'Laptop', 'Laptop', 'Phone', 'Phone'],
    'amount': [1200, 800, 450, 1200, 1200, 800, 800],
    'date': pd.date_range('2024-01-01', periods=7)
})

customers = pd.DataFrame({
    'customer_id': [101, 102, 103, 104, 105],
    'name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
    'city': ['NYC', 'LA', 'NYC', 'Chicago', 'LA']
})

# Challenge 1: Merge orders with customer names
merged = orders.merge(customers, on='customer_id', how='left')
print(merged)

# Challenge 2: Create a pivot table - total spend per customer per product
pivot = orders.pivot_table(values='amount', index='customer_id', 
                           columns='product', aggfunc='sum', fill_value=0)
print("\nPivot table:\n", pivot)

# Challenge 3: Calculate running total of amounts per customer
orders['running_total'] = orders.groupby('customer_id')['amount'].cumsum()
print("\nRunning totals:\n", orders[['order_id', 'customer_id', 'amount', 'running_total']])
\`\`\`

**Bonus:** Find which city generates the most revenue and which product is most popular per city.

          `
        }
      ]
    },
    {
      id: 4,
      title: "Data Cleaning",
      description: "Preparing real-world messy data",
      lessons: [
        {
          id: "4-1",
          title: "Handling Messy Data",
          duration: "14 min",
          content: `
## Data Cleaning — The 80% of Data Science 🧹

Real-world data is MESSY. Data scientists spend most of their time cleaning data. Let's master this essential skill!

### Common Data Problems

\`\`\`
1. Missing values
2. Duplicate rows
3. Inconsistent formatting
4. Wrong data types
5. Outliers
6. Inconsistent categories
7. Encoding issues
\`\`\`

### Exploring Your Data First

\`\`\`python
import pandas as pd
import numpy as np

# Load data
df = pd.read_csv('messy_data.csv')

# First look
print(df.head())        # First 5 rows
print(df.tail())        # Last 5 rows
print(df.sample(5))     # Random 5 rows
print(df.shape)         # (rows, columns)

# Data types
print(df.dtypes)
print(df.info())

# Statistical summary
print(df.describe())        # Numerical columns
print(df.describe(include='all'))  # All columns

# Check for missing values
print(df.isnull().sum())
print(df.isnull().sum() / len(df) * 100)  # Percentage missing

# Unique values
for col in df.columns:
    print(f"{col}: {df[col].nunique()} unique values")
\`\`\`

### Handling Missing Values

\`\`\`python
# Identify patterns
import seaborn as sns
import matplotlib.pyplot as plt

# Visualize missing data
sns.heatmap(df.isnull(), cbar=True, yticklabels=False)
plt.title('Missing Values Pattern')
plt.show()

# Strategy 1: Drop rows with missing values
df_clean = df.dropna()                    # Drop all rows with any NaN
df_clean = df.dropna(thresh=3)            # Keep rows with at least 3 non-NaN values
df_clean = df.dropna(subset=['age', 'income'])  # Drop only if these columns are NaN

# Strategy 2: Fill with constants
df['category'] = df['category'].fillna('Unknown')
df['quantity'] = df['quantity'].fillna(0)

# Strategy 3: Fill with statistics
df['age'] = df['age'].fillna(df['age'].mean())
df['age'] = df['age'].fillna(df['age'].median())  # Better for skewed data

# Strategy 4: Fill by group
df['age'] = df.groupby('city')['age'].transform(
    lambda x: x.fillna(x.median())
)

# Strategy 5: Forward/backward fill (time series)
df['value'] = df['value'].fillna(method='ffill')

# Strategy 6: Interpolation
df['temperature'] = df['temperature'].interpolate(method='linear')
\`\`\`

<tip>
💡 The best strategy depends on your data! For critical analyses, dropping rows is safest. For machine learning, filling with median often works well.
</tip>

### Handling Duplicates

\`\`\`python
# Check for duplicates
print(df.duplicated().sum())  # Count of duplicate rows

# View duplicates
print(df[df.duplicated(keep=False)])  # All duplicates

# Drop duplicates
df_clean = df.drop_duplicates()  # Keep first occurrence
df_clean = df.drop_duplicates(keep='last')  # Keep last
df_clean = df.drop_duplicates(keep=False)   # Remove ALL duplicates

# Duplicates based on specific columns
df_clean = df.drop_duplicates(subset=['name', 'email'])

# Find duplicates in specific column
print(df[df['email'].duplicated(keep=False)])
\`\`\`

### Fixing Data Types

\`\`\`python
# Check current types
print(df.dtypes)

# Convert to numeric (coerce errors to NaN)
df['age'] = pd.to_numeric(df['age'], errors='coerce')
df['price'] = pd.to_numeric(df['price'].str.replace('$', '').str.replace(',', ''))

# Convert to datetime
df['date'] = pd.to_datetime(df['date'])
df['date'] = pd.to_datetime(df['date'], format='%m/%d/%Y')
df['date'] = pd.to_datetime(df['date'], errors='coerce')

# Convert to categorical (memory efficient)
df['category'] = df['category'].astype('category')

# Convert boolean
df['is_active'] = df['is_active'].map({'Yes': True, 'No': False, 'Y': True, 'N': False})

# Extract components from datetime
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.day_name()
\`\`\`

### String Cleaning

\`\`\`python
# Access string methods with .str
df['name'] = df['name'].str.strip()        # Remove whitespace
df['name'] = df['name'].str.lower()        # Lowercase
df['name'] = df['name'].str.upper()        # Uppercase
df['name'] = df['name'].str.title()        # Title Case

# Replace patterns
df['phone'] = df['phone'].str.replace('-', '')
df['phone'] = df['phone'].str.replace(r'[^0-9]', '', regex=True)

# Extract with regex
df['area_code'] = df['phone'].str.extract(r'\\((\\d{3})\\)')

# Split strings
df[['first_name', 'last_name']] = df['full_name'].str.split(' ', n=1, expand=True)

# Contains
df['has_gmail'] = df['email'].str.contains('@gmail.com')

# Fix inconsistent categories
df['city'] = df['city'].str.strip().str.title()
# Before: [' new york', 'New York', 'NEW YORK ', 'new york']
# After:  ['New York', 'New York', 'New York', 'New York']
\`\`\`

### Standardizing Categories

\`\`\`python
# Check unique values
print(df['status'].unique())
# ['Active', 'active', 'ACTIVE', 'inactive', 'Inactive', 'pending']

# Map to standard values
status_map = {
    'Active': 'active',
    'active': 'active',
    'ACTIVE': 'active',
    'inactive': 'inactive',
    'Inactive': 'inactive',
    'pending': 'pending'
}
df['status'] = df['status'].map(status_map)

# Or use replace
df['status'] = df['status'].str.lower().replace({
    'actve': 'active',  # Fix typos too
    'activ': 'active'
})

# Fuzzy matching for messy categories
from fuzzywuzzy import process

def match_category(value, choices, threshold=80):
    match, score = process.extractOne(value, choices)
    return match if score >= threshold else value

standard_cities = ['New York', 'Los Angeles', 'Chicago']
df['city'] = df['city'].apply(lambda x: match_category(x, standard_cities))
\`\`\`

<warning>
⚠️ Always validate your cleaning operations! Compare row counts, check value distributions, and verify that transformations preserved data integrity.
</warning>

Clean data = reliable analysis! 🎯
### 🎯 Practice Exercise

**Exercise: Clean a Messy Dataset**

\`\`\`python
import pandas as pd
import numpy as np

# Create a deliberately messy dataset
messy_data = pd.DataFrame({
    'Name': ['Alice', 'bob', 'CHARLIE', None, 'Eve', 'Alice'],
    'Age': [25, 300, 35, 28, -5, 25],
    'Email': ['alice@email.com', 'bob@email', 'charlie@email.com', 
              'diana@email.com', None, 'alice@email.com'],
    'Salary': ['$50,000', '$60,000', None, '$45,000', '$70,000', '$50,000'],
    'Join_Date': ['2024-01-15', '01/20/2024', '2024-02-01', 
                  'invalid', '2024-03-10', '2024-01-15']
})

print("MESSY DATA:")
print(messy_data)

# Challenge 1: Standardize names (Title Case)
messy_data['Name'] = messy_data['Name'].str.title()

# Challenge 2: Handle invalid ages (replace with NaN if outside 18-100)
messy_data.loc[~messy_data['Age'].between(18, 100), 'Age'] = np.nan

# Challenge 3: Clean salary column (remove $ and commas, convert to float)
messy_data['Salary'] = messy_data['Salary'].str.replace('[\$,]', '', regex=True).astype(float)

# Challenge 4: Remove duplicates
messy_data = messy_data.drop_duplicates()

# Challenge 5: Fill missing values appropriately
messy_data['Age'] = messy_data['Age'].fillna(messy_data['Age'].median())

print("\nCLEANED DATA:")
print(messy_data)
\`\`\`

Try adding more types of mess (extra whitespace, mixed data types) and cleaning them!

          `
        },
        {
          id: "4-2",
          title: "Outliers and Validation",
          duration: "12 min",
          content: `
## Outliers and Data Validation 🔍

Outliers can skew your analysis and break your models. Let's learn to detect and handle them!

### Detecting Outliers

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Sample data with outliers
np.random.seed(42)
data = np.random.normal(100, 15, 1000)
data = np.append(data, [200, 250, 10, 5])  # Add outliers
df = pd.DataFrame({'value': data})

# Visual detection
fig, axes = plt.subplots(1, 3, figsize=(15, 4))

# Box plot
axes[0].boxplot(df['value'])
axes[0].set_title('Box Plot')

# Histogram
axes[1].hist(df['value'], bins=50)
axes[1].set_title('Histogram')

# Scatter plot (with index)
axes[2].scatter(range(len(df)), df['value'], alpha=0.5)
axes[2].set_title('Scatter Plot')

plt.tight_layout()
plt.show()
\`\`\`

### Statistical Methods for Outliers

\`\`\`python
# Method 1: Z-Score
from scipy import stats

z_scores = np.abs(stats.zscore(df['value']))
outliers_zscore = df[z_scores > 3]  # More than 3 std from mean
print(f"Z-Score outliers: {len(outliers_zscore)}")

# Method 2: IQR (Interquartile Range)
Q1 = df['value'].quantile(0.25)
Q3 = df['value'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

outliers_iqr = df[(df['value'] < lower_bound) | (df['value'] > upper_bound)]
print(f"IQR outliers: {len(outliers_iqr)}")
print(f"Bounds: [{lower_bound:.2f}, {upper_bound:.2f}]")

# Method 3: Percentile-based
lower = df['value'].quantile(0.01)
upper = df['value'].quantile(0.99)
outliers_pct = df[(df['value'] < lower) | (df['value'] > upper)]
\`\`\`

<tip>
💡 IQR method is more robust to outliers than Z-Score, since it uses median-based statistics rather than mean/std.
</tip>

### Handling Outliers

\`\`\`python
# Option 1: Remove outliers
df_clean = df[(df['value'] >= lower_bound) & (df['value'] <= upper_bound)]

# Option 2: Cap/Floor (Winsorization)
df['value_capped'] = df['value'].clip(lower=lower_bound, upper=upper_bound)

# Option 3: Replace with NaN and impute
df['value_nan'] = df['value'].copy()
df.loc[(df['value'] < lower_bound) | (df['value'] > upper_bound), 'value_nan'] = np.nan
df['value_imputed'] = df['value_nan'].fillna(df['value_nan'].median())

# Option 4: Log transform (for right-skewed data)
df['value_log'] = np.log1p(df['value'])  # log(1+x) handles zeros

# Option 5: Separate analysis
outliers_df = df[(df['value'] < lower_bound) | (df['value'] > upper_bound)]
normal_df = df[(df['value'] >= lower_bound) & (df['value'] <= upper_bound)]
\`\`\`

### Data Validation

\`\`\`python
# Create validation functions
def validate_dataframe(df):
    issues = []
    
    # Check for missing values
    missing = df.isnull().sum()
    if missing.any():
        issues.append(f"Missing values: {dict(missing[missing > 0])}")
    
    # Check for duplicates
    dupes = df.duplicated().sum()
    if dupes > 0:
        issues.append(f"Duplicate rows: {dupes}")
    
    # Check data types
    if df['age'].dtype != 'int64' and df['age'].dtype != 'float64':
        issues.append("Age should be numeric")
    
    # Check value ranges
    if df['age'].min() < 0 or df['age'].max() > 150:
        issues.append("Age values out of reasonable range")
    
    if (df['email'].str.contains('@') == False).any():
        issues.append("Invalid email addresses found")
    
    return issues

# Run validation
issues = validate_dataframe(df)
if issues:
    print("Data validation failed:")
    for issue in issues:
        print(f"  - {issue}")
else:
    print("Data validation passed!")
\`\`\`

### Using Assertions

\`\`\`python
# Assert statements for data quality checks
def clean_and_validate(df):
    # Make a copy
    df = df.copy()
    
    # Clean
    df['age'] = pd.to_numeric(df['age'], errors='coerce')
    df['email'] = df['email'].str.lower().str.strip()
    
    # Validate with assertions
    assert df['age'].between(0, 150).all() or df['age'].isna().any(), \\
        "Age values out of range"
    assert df['email'].str.contains('@').all() or df['email'].isna().any(), \\
        "Invalid email format found"
    assert len(df) > 0, "DataFrame is empty after cleaning"
    
    return df

# Use try-except for production
try:
    df_clean = clean_and_validate(df)
    print("Data cleaned successfully!")
except AssertionError as e:
    print(f"Validation error: {e}")
\`\`\`

### Creating a Data Quality Report

\`\`\`python
def data_quality_report(df):
    report = {
        'Total Rows': len(df),
        'Total Columns': len(df.columns),
        'Duplicate Rows': df.duplicated().sum(),
        'Total Missing Values': df.isnull().sum().sum(),
        'Missing Percentage': f"{df.isnull().sum().sum() / df.size * 100:.2f}%",
    }
    
    # Per column stats
    column_stats = []
    for col in df.columns:
        stats = {
            'Column': col,
            'Type': str(df[col].dtype),
            'Missing': df[col].isnull().sum(),
            'Missing %': f"{df[col].isnull().sum() / len(df) * 100:.1f}%",
            'Unique': df[col].nunique(),
            'Sample Values': str(df[col].dropna().head(3).tolist())[:50]
        }
        column_stats.append(stats)
    
    print("=== DATA QUALITY REPORT ===")
    for key, value in report.items():
        print(f"{key}: {value}")
    
    print("\\n=== COLUMN STATISTICS ===")
    col_df = pd.DataFrame(column_stats)
    print(col_df.to_string(index=False))
    
    return report, col_df

report, col_stats = data_quality_report(df)
\`\`\`

<warning>
⚠️ Document your data cleaning decisions! Future analysts (including future you) need to understand why certain values were removed or modified.
</warning>

Clean, validated data is the foundation of trustworthy analysis! ✅
### 🎯 Practice Exercise

**Exercise: Outlier Detection Workshop**

\`\`\`python
import pandas as pd
import numpy as np

# Generate dataset with outliers
np.random.seed(42)
normal_data = np.random.normal(100, 15, 100)  # Mean 100, std 15
outliers = np.array([200, 250, 10, 5, 300])
data = np.concatenate([normal_data, outliers])
df = pd.DataFrame({'value': data})

# Challenge 1: Detect outliers using IQR method
Q1 = df['value'].quantile(0.25)
Q3 = df['value'].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR
outliers_iqr = df[(df['value'] < lower) | (df['value'] > upper)]
print(f"IQR method found {len(outliers_iqr)} outliers")

# Challenge 2: Detect outliers using Z-score method
from scipy import stats
z_scores = np.abs(stats.zscore(df['value']))
outliers_z = df[z_scores > 3]
print(f"Z-score method found {len(outliers_z)} outliers")

# Challenge 3: Compare methods - which found more?
print(f"\nIQR range: [{lower:.1f}, {upper:.1f}]")
print(f"Z-score threshold: mean ± 3*std = [{df['value'].mean()-3*df['value'].std():.1f}, {df['value'].mean()+3*df['value'].std():.1f}]")
\`\`\`

**Bonus:** Implement a function that lets you choose between "remove", "cap", or "replace with median" strategies for handling outliers.

          `
        }
      ]
    },
    {
      id: 5,
      title: "Data Visualization",
      description: "Creating compelling charts and graphs",
      lessons: [
        {
          id: "5-1",
          title: "Matplotlib Fundamentals",
          duration: "14 min",
          content: `
## Matplotlib — The Foundation of Python Visualization 📈

Matplotlib is the most widely used plotting library in Python. Master it and you can create any visualization!

### Basic Plotting

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Simple line plot
x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('X axis')
plt.ylabel('Y axis')
plt.grid(True)
plt.show()

# Multiple lines
plt.figure(figsize=(10, 6))
plt.plot(x, np.sin(x), label='sin(x)')
plt.plot(x, np.cos(x), label='cos(x)')
plt.legend()
plt.title('Trigonometric Functions')
plt.show()
\`\`\`

### Line Styles and Colors

\`\`\`python
# Line styles
plt.figure(figsize=(10, 6))
plt.plot(x, y, 'r-', linewidth=2, label='solid red')
plt.plot(x, y + 0.5, 'b--', linewidth=2, label='dashed blue')
plt.plot(x, y + 1, 'g:', linewidth=2, label='dotted green')
plt.plot(x, y + 1.5, 'm-.', linewidth=2, label='dash-dot magenta')
plt.legend()
plt.show()

# Format string: 'color marker linestyle'
# Colors: r g b c m y k w
# Markers: . o ^ s * + x
# Lines: - -- -. :

# With markers
plt.plot(x[::10], y[::10], 'ro-', markersize=8, label='with markers')
\`\`\`

### Scatter Plots

\`\`\`python
# Basic scatter
np.random.seed(42)
x = np.random.randn(100)
y = x + np.random.randn(100) * 0.5

plt.figure(figsize=(10, 6))
plt.scatter(x, y, c='blue', alpha=0.6, edgecolors='black')
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Scatter Plot')
plt.show()

# Colored by third variable
colors = np.random.randn(100)
sizes = np.abs(colors) * 100

plt.figure(figsize=(10, 6))
scatter = plt.scatter(x, y, c=colors, s=sizes, cmap='viridis', alpha=0.6)
plt.colorbar(scatter, label='Color Value')
plt.title('Scatter with Color and Size')
plt.show()
\`\`\`

### Bar Charts

\`\`\`python
# Vertical bars
categories = ['A', 'B', 'C', 'D', 'E']
values = [23, 45, 56, 78, 32]

plt.figure(figsize=(10, 6))
plt.bar(categories, values, color='steelblue', edgecolor='black')
plt.xlabel('Category')
plt.ylabel('Value')
plt.title('Bar Chart')
plt.show()

# Horizontal bars
plt.figure(figsize=(10, 6))
plt.barh(categories, values, color='coral')
plt.xlabel('Value')
plt.ylabel('Category')
plt.title('Horizontal Bar Chart')
plt.show()

# Grouped bars
x = np.arange(len(categories))
width = 0.35
values2 = [30, 35, 45, 65, 40]

plt.figure(figsize=(10, 6))
plt.bar(x - width/2, values, width, label='Group 1')
plt.bar(x + width/2, values2, width, label='Group 2')
plt.xticks(x, categories)
plt.legend()
plt.title('Grouped Bar Chart')
plt.show()
\`\`\`

<tip>
💡 Use \`plt.tight_layout()\` before \`plt.show()\` to automatically adjust spacing and prevent label cutoffs!
</tip>

### Histograms

\`\`\`python
# Basic histogram
data = np.random.randn(1000)

plt.figure(figsize=(10, 6))
plt.hist(data, bins=30, color='steelblue', edgecolor='black', alpha=0.7)
plt.xlabel('Value')
plt.ylabel('Frequency')
plt.title('Histogram')
plt.show()

# Multiple histograms
data1 = np.random.normal(0, 1, 1000)
data2 = np.random.normal(2, 1.5, 1000)

plt.figure(figsize=(10, 6))
plt.hist(data1, bins=30, alpha=0.5, label='Data 1')
plt.hist(data2, bins=30, alpha=0.5, label='Data 2')
plt.legend()
plt.title('Overlapping Histograms')
plt.show()
\`\`\`

### Subplots

\`\`\`python
# Multiple plots in one figure
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

# Plot 1
axes[0, 0].plot(x, np.sin(x))
axes[0, 0].set_title('Sine')

# Plot 2
axes[0, 1].plot(x, np.cos(x), 'r')
axes[0, 1].set_title('Cosine')

# Plot 3
axes[1, 0].scatter(np.random.randn(50), np.random.randn(50))
axes[1, 0].set_title('Scatter')

# Plot 4
axes[1, 1].bar(['A', 'B', 'C'], [3, 7, 5])
axes[1, 1].set_title('Bar')

plt.tight_layout()
plt.show()

# Different sized subplots
fig = plt.figure(figsize=(12, 8))
ax1 = fig.add_subplot(2, 2, 1)  # Top left
ax2 = fig.add_subplot(2, 2, 2)  # Top right
ax3 = fig.add_subplot(2, 1, 2)  # Bottom (spans both columns)

ax1.plot(x, np.sin(x))
ax2.plot(x, np.cos(x))
ax3.plot(x, np.tan(x))
plt.tight_layout()
plt.show()
\`\`\`

### Customization

\`\`\`python
# Professional styling
plt.style.use('seaborn-v0_8-whitegrid')  # Or: 'ggplot', 'dark_background'

fig, ax = plt.subplots(figsize=(10, 6))

# Plot with customization
ax.plot(x, np.sin(x), color='#2ecc71', linewidth=2.5, label='sin(x)')

# Customize axes
ax.set_xlim(0, 10)
ax.set_ylim(-1.5, 1.5)
ax.set_xlabel('Time (s)', fontsize=12)
ax.set_ylabel('Amplitude', fontsize=12)
ax.set_title('Customized Sine Wave', fontsize=14, fontweight='bold')

# Grid
ax.grid(True, linestyle='--', alpha=0.7)

# Legend
ax.legend(loc='upper right', frameon=True, shadow=True)

# Annotations
ax.annotate('Peak', xy=(np.pi/2, 1), xytext=(2, 1.2),
            arrowprops=dict(arrowstyle='->', color='red'),
            fontsize=10)

# Spines
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

plt.tight_layout()
plt.savefig('my_plot.png', dpi=300, bbox_inches='tight')
plt.show()
\`\`\`

<warning>
⚠️ Always call \`plt.savefig()\` BEFORE \`plt.show()\`! After showing, the figure is cleared.
</warning>

Matplotlib gives you complete control over every aspect of your visualizations! 🎨
### 🎯 Practice Exercise

**Exercise: Build a Multi-Panel Dashboard**

\`\`\`python
import matplotlib.pyplot as plt
import numpy as np

# Sample data
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
revenue = [12000, 15000, 13500, 17000, 16000, 19000]
expenses = [10000, 11000, 10500, 12000, 11500, 13000]
customers = [150, 180, 165, 210, 195, 240]

fig, axes = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle('Business Dashboard Q1-Q2 2024', fontsize=16)

# Panel 1: Revenue vs Expenses (line chart)
axes[0,0].plot(months, revenue, 'g-o', label='Revenue')
axes[0,0].plot(months, expenses, 'r-s', label='Expenses')
axes[0,0].set_title('Revenue vs Expenses')
axes[0,0].legend()
axes[0,0].set_ylabel('Amount ($)')

# Panel 2: Profit (bar chart)
profit = [r - e for r, e in zip(revenue, expenses)]
colors = ['green' if p > 0 else 'red' for p in profit]
axes[0,1].bar(months, profit, color=colors)
axes[0,1].set_title('Monthly Profit')
axes[0,1].set_ylabel('Profit ($)')

# Panel 3: Customer growth (area chart)
axes[1,0].fill_between(months, customers, alpha=0.3, color='blue')
axes[1,0].plot(months, customers, 'b-o')
axes[1,0].set_title('Customer Growth')
axes[1,0].set_ylabel('Customers')

# Panel 4: Revenue distribution (pie chart)
axes[1,1].pie(revenue, labels=months, autopct='%1.1f%%')
axes[1,1].set_title('Revenue Distribution')

plt.tight_layout()
plt.savefig('dashboard.png', dpi=150)
plt.show()
\`\`\`

Try customizing colors, adding gridlines, and annotating key data points!

          `
        },
        {
          id: "5-2",
          title: "Seaborn for Statistical Visualization",
          duration: "14 min",
          content: `
## Seaborn — Beautiful Statistical Graphics 📊

Seaborn is built on Matplotlib and makes statistical visualization easy and beautiful!

### Setup and Styling

\`\`\`python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

# Set style
sns.set_theme(style="whitegrid")  # darkgrid, white, dark, ticks

# Load example dataset
tips = sns.load_dataset('tips')
print(tips.head())
#    total_bill   tip     sex smoker  day    time  size
# 0       16.99  1.01  Female     No  Sun  Dinner     2
# 1       10.34  1.66    Male     No  Sun  Dinner     3
\`\`\`

### Distribution Plots

\`\`\`python
# Histogram + KDE
plt.figure(figsize=(10, 6))
sns.histplot(tips['total_bill'], kde=True, bins=30)
plt.title('Distribution of Total Bill')
plt.show()

# KDE only
plt.figure(figsize=(10, 6))
sns.kdeplot(data=tips, x='total_bill', hue='time', fill=True)
plt.title('Bill Distribution by Time')
plt.show()

# Multiple distributions
plt.figure(figsize=(10, 6))
sns.histplot(data=tips, x='total_bill', hue='day', multiple='stack')
plt.title('Bills by Day')
plt.show()
\`\`\`

### Categorical Plots

\`\`\`python
# Box plot
plt.figure(figsize=(10, 6))
sns.boxplot(data=tips, x='day', y='total_bill', hue='time')
plt.title('Bill Distribution by Day and Time')
plt.show()

# Violin plot (box + KDE)
plt.figure(figsize=(10, 6))
sns.violinplot(data=tips, x='day', y='total_bill', hue='sex', split=True)
plt.title('Bill Distribution by Day and Sex')
plt.show()

# Strip plot (individual points)
plt.figure(figsize=(10, 6))
sns.stripplot(data=tips, x='day', y='total_bill', hue='sex', dodge=True, alpha=0.7)
plt.title('Individual Bills by Day')
plt.show()

# Swarm plot (no overlap)
plt.figure(figsize=(10, 6))
sns.swarmplot(data=tips, x='day', y='total_bill', hue='sex', dodge=True)
plt.title('Swarm Plot of Bills')
plt.show()

# Bar plot (with confidence intervals)
plt.figure(figsize=(10, 6))
sns.barplot(data=tips, x='day', y='total_bill', hue='sex', errorbar='sd')
plt.title('Average Bill by Day and Sex')
plt.show()
\`\`\`

<tip>
💡 Combine strip/swarm plots with box/violin plots to show both distribution and individual points!
</tip>

### Relationship Plots

\`\`\`python
# Scatter plot with regression
plt.figure(figsize=(10, 6))
sns.regplot(data=tips, x='total_bill', y='tip', scatter_kws={'alpha': 0.5})
plt.title('Tip vs Total Bill with Regression Line')
plt.show()

# Scatter with multiple variables
plt.figure(figsize=(10, 6))
sns.scatterplot(data=tips, x='total_bill', y='tip', 
                hue='time', style='sex', size='size',
                sizes=(50, 200), alpha=0.7)
plt.title('Tip vs Total Bill (Multiple Variables)')
plt.show()

# lmplot - regression by groups
g = sns.lmplot(data=tips, x='total_bill', y='tip', 
               hue='time', col='sex', height=5)
g.fig.suptitle('Regression by Time and Sex', y=1.02)
plt.show()

# Joint plot (scatter + marginal histograms)
sns.jointplot(data=tips, x='total_bill', y='tip', kind='hex')
plt.show()

# Pair plot (all pairwise relationships)
sns.pairplot(tips, hue='time', height=2.5)
plt.show()
\`\`\`

### Heatmaps

\`\`\`python
# Correlation heatmap
plt.figure(figsize=(8, 6))
correlation = tips.select_dtypes(include=[np.number]).corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap')
plt.show()

# Pivot table heatmap
pivot = tips.pivot_table(values='tip', index='day', columns='time', aggfunc='mean')
plt.figure(figsize=(8, 6))
sns.heatmap(pivot, annot=True, fmt='.2f', cmap='YlGnBu')
plt.title('Average Tip by Day and Time')
plt.show()

# Clustermap (with hierarchical clustering)
sns.clustermap(correlation, annot=True, cmap='coolwarm', center=0)
plt.show()
\`\`\`

### FacetGrid for Multi-Plot Grids

\`\`\`python
# Create a grid of plots
g = sns.FacetGrid(tips, col='time', row='sex', height=4)
g.map(sns.histplot, 'total_bill')
g.add_legend()
plt.show()

# With custom function
g = sns.FacetGrid(tips, col='day', col_wrap=2, height=4)
g.map_dataframe(sns.scatterplot, x='total_bill', y='tip', hue='sex')
g.add_legend()
plt.show()

# catplot - categorical FacetGrid
g = sns.catplot(data=tips, x='day', y='total_bill', 
                hue='sex', col='time',
                kind='box', height=5)
plt.show()

# relplot - relational FacetGrid
g = sns.relplot(data=tips, x='total_bill', y='tip',
                hue='sex', style='smoker', col='time',
                kind='scatter', height=5)
plt.show()
\`\`\`

### Saving Publication-Ready Figures

\`\`\`python
# High-quality figure
fig, ax = plt.subplots(figsize=(10, 6), dpi=150)
sns.boxplot(data=tips, x='day', y='total_bill', hue='time', ax=ax)
ax.set_xlabel('Day of Week', fontsize=12)
ax.set_ylabel('Total Bill ($)', fontsize=12)
ax.set_title('Restaurant Bills by Day', fontsize=14, fontweight='bold')
ax.legend(title='Meal Time')

# Save in multiple formats
fig.savefig('bills_by_day.png', dpi=300, bbox_inches='tight')
fig.savefig('bills_by_day.pdf', bbox_inches='tight')
fig.savefig('bills_by_day.svg', bbox_inches='tight')
plt.show()
\`\`\`

<warning>
⚠️ When presenting, consider colorblind-friendly palettes! Use \`sns.color_palette('colorblind')\` or \`cmap='viridis'\`.
</warning>

Seaborn makes beautiful statistical visualizations effortless! ✨
### 🎯 Practice Exercise

**Exercise: Statistical Visualization with Seaborn**

\`\`\`python
import seaborn as sns
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create a realistic dataset
np.random.seed(42)
n = 200
df = pd.DataFrame({
    'study_hours': np.random.normal(5, 2, n).clip(0, 12),
    'sleep_hours': np.random.normal(7, 1.5, n).clip(3, 12),
    'exam_score': np.random.normal(75, 12, n).clip(0, 100),
    'grade_level': np.random.choice(['Freshman', 'Sophomore', 'Junior', 'Senior'], n)
})
df['exam_score'] += df['study_hours'] * 3  # Add correlation

# Challenge 1: Create a pairplot colored by grade level
sns.pairplot(df, hue='grade_level', palette='Set2')
plt.suptitle('Student Performance Relationships', y=1.02)
plt.show()

# Challenge 2: Create a heatmap of correlations
plt.figure(figsize=(8, 6))
corr = df.select_dtypes(include=[np.number]).corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0)
plt.title('Correlation Heatmap')
plt.show()

# Challenge 3: Box plot of exam scores by grade level
plt.figure(figsize=(8, 5))
sns.boxplot(data=df, x='grade_level', y='exam_score', 
            order=['Freshman', 'Sophomore', 'Junior', 'Senior'])
plt.title('Exam Scores by Grade Level')
plt.show()
\`\`\`

**Bonus:** Create a violin plot comparing study hours across grade levels and add a swarm plot overlay.

          `
        }
      ]
    },
    {
      id: 6,
      title: "Exploratory Data Analysis",
      description: "Discovering insights in your data",
      lessons: [
        {
          id: "6-1",
          title: "EDA Workflow",
          duration: "15 min",
          content: `
## Exploratory Data Analysis — Finding Stories in Data 🔍

EDA is the process of investigating data to discover patterns, spot anomalies, and form hypotheses. It's where the magic begins!

### The EDA Checklist

\`\`\`
✅ 1. Load and inspect the data
✅ 2. Understand data types and structure
✅ 3. Check for missing values
✅ 4. Analyze distributions (univariate)
✅ 5. Explore relationships (bivariate)
✅ 6. Look for patterns (multivariate)
✅ 7. Identify outliers and anomalies
✅ 8. Document findings and questions
\`\`\`

### Step 1: Initial Inspection

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv('sales_data.csv')

# First look
print("Shape:", df.shape)
print("\\nFirst few rows:")
print(df.head())

print("\\nColumn types:")
print(df.dtypes)

print("\\nBasic info:")
print(df.info())

print("\\nStatistical summary:")
print(df.describe())

# For categorical columns
print("\\nCategorical summary:")
print(df.describe(include=['object']))
\`\`\`

### Step 2: Missing Value Analysis

\`\`\`python
# Count missing values
missing = df.isnull().sum()
missing_pct = (df.isnull().sum() / len(df) * 100).round(2)

missing_df = pd.DataFrame({
    'Missing Count': missing,
    'Missing %': missing_pct
}).sort_values('Missing %', ascending=False)

print(missing_df[missing_df['Missing Count'] > 0])

# Visualize missing data
plt.figure(figsize=(12, 6))
sns.heatmap(df.isnull(), cbar=True, yticklabels=False, cmap='viridis')
plt.title('Missing Value Pattern')
plt.show()

# Check if missing values are random (MCAR) or systematic
# Compare distributions with and without missing
for col in df.columns[df.isnull().any()]:
    print(f"\\n{col} - Distribution of other features when {col} is missing vs not missing:")
    df_missing = df[df[col].isnull()]
    df_not_missing = df[df[col].notna()]
    # Compare means of numeric columns
    for num_col in df.select_dtypes(include=[np.number]).columns:
        if num_col != col:
            print(f"  {num_col}: {df_missing[num_col].mean():.2f} vs {df_not_missing[num_col].mean():.2f}")
\`\`\`

### Step 3: Univariate Analysis

\`\`\`python
# Numeric columns - distribution
numeric_cols = df.select_dtypes(include=[np.number]).columns

fig, axes = plt.subplots(len(numeric_cols), 2, figsize=(14, 4*len(numeric_cols)))

for i, col in enumerate(numeric_cols):
    # Histogram
    axes[i, 0].hist(df[col].dropna(), bins=30, edgecolor='black', alpha=0.7)
    axes[i, 0].set_title(f'{col} - Distribution')
    axes[i, 0].axvline(df[col].mean(), color='red', linestyle='--', label='Mean')
    axes[i, 0].axvline(df[col].median(), color='green', linestyle='--', label='Median')
    axes[i, 0].legend()
    
    # Box plot
    axes[i, 1].boxplot(df[col].dropna())
    axes[i, 1].set_title(f'{col} - Box Plot')

plt.tight_layout()
plt.show()

# Categorical columns - value counts
categorical_cols = df.select_dtypes(include=['object']).columns

for col in categorical_cols:
    print(f"\\n{col}:")
    print(df[col].value_counts())
    print(f"Unique values: {df[col].nunique()}")
    
    # Bar plot
    plt.figure(figsize=(10, 4))
    df[col].value_counts().head(20).plot(kind='bar')
    plt.title(f'{col} - Value Counts')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
\`\`\`

<tip>
💡 Compare mean vs median! If they're very different, your data is skewed. Median is more robust to outliers.
</tip>

### Step 4: Bivariate Analysis

\`\`\`python
# Numeric vs Numeric - correlation
correlation = df.select_dtypes(include=[np.number]).corr()

plt.figure(figsize=(12, 10))
mask = np.triu(np.ones_like(correlation, dtype=bool))
sns.heatmap(correlation, mask=mask, annot=True, fmt='.2f', 
            cmap='RdBu_r', center=0, square=True)
plt.title('Correlation Matrix')
plt.show()

# Find strong correlations
strong_corr = []
for i in range(len(correlation.columns)):
    for j in range(i):
        if abs(correlation.iloc[i, j]) > 0.5:
            strong_corr.append({
                'Var1': correlation.columns[i],
                'Var2': correlation.columns[j],
                'Correlation': correlation.iloc[i, j]
            })

print("Strong correlations (|r| > 0.5):")
print(pd.DataFrame(strong_corr).sort_values('Correlation', key=abs, ascending=False))

# Scatter plots for strong correlations
for corr in strong_corr[:5]:  # Top 5
    plt.figure(figsize=(8, 6))
    sns.regplot(data=df, x=corr['Var1'], y=corr['Var2'])
    plt.title(f"{corr['Var1']} vs {corr['Var2']} (r={corr['Correlation']:.2f})")
    plt.show()
\`\`\`

### Step 5: Categorical vs Numeric Analysis

\`\`\`python
# For each categorical column, analyze numeric distribution
target_numeric = 'sales'  # Your main numeric variable

for cat_col in categorical_cols:
    if df[cat_col].nunique() < 10:  # Only for low cardinality
        fig, axes = plt.subplots(1, 2, figsize=(14, 5))
        
        # Box plot
        df.boxplot(column=target_numeric, by=cat_col, ax=axes[0])
        axes[0].set_title(f'{target_numeric} by {cat_col}')
        
        # Mean comparison
        df.groupby(cat_col)[target_numeric].mean().plot(kind='bar', ax=axes[1])
        axes[1].set_title(f'Mean {target_numeric} by {cat_col}')
        
        plt.suptitle('')
        plt.tight_layout()
        plt.show()
        
        # Statistical test
        from scipy import stats
        groups = [group[target_numeric].dropna().values 
                  for name, group in df.groupby(cat_col)]
        if len(groups) == 2:
            stat, p_value = stats.ttest_ind(*groups)
            print(f"T-test for {cat_col}: p-value = {p_value:.4f}")
        else:
            stat, p_value = stats.f_oneway(*groups)
            print(f"ANOVA for {cat_col}: p-value = {p_value:.4f}")
\`\`\`

<warning>
⚠️ Correlation ≠ Causation! Just because two variables are correlated doesn't mean one causes the other.
</warning>

EDA reveals the story hidden in your data! 📖
### 🎯 Practice Exercise

**Exercise: Complete EDA on a Dataset**

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Create a sample e-commerce dataset
np.random.seed(42)
n = 500
df = pd.DataFrame({
    'customer_age': np.random.normal(35, 12, n).astype(int).clip(18, 70),
    'purchase_amount': np.random.lognormal(4, 0.8, n).round(2),
    'items_bought': np.random.poisson(3, n) + 1,
    'category': np.random.choice(['Electronics', 'Clothing', 'Books', 'Home'], n),
    'is_return': np.random.choice([True, False], n, p=[0.15, 0.85])
})

# Step 1: Quick overview
print("Shape:", df.shape)
print("\nData Types:\n", df.dtypes)
print("\nDescribe:\n", df.describe())
print("\nNull counts:\n", df.isnull().sum())

# Step 2: Distribution analysis
fig, axes = plt.subplots(1, 3, figsize=(15, 4))
df['customer_age'].hist(ax=axes[0], bins=20, color='skyblue')
axes[0].set_title('Age Distribution')
df['purchase_amount'].hist(ax=axes[1], bins=30, color='salmon')
axes[1].set_title('Purchase Amount Distribution')
df['items_bought'].hist(ax=axes[2], bins=10, color='lightgreen')
axes[2].set_title('Items Bought Distribution')
plt.tight_layout()
plt.show()

# Step 3: Key insight - return rate by category
return_rate = df.groupby('category')['is_return'].mean() * 100
print("\nReturn Rate by Category:")
print(return_rate.sort_values(ascending=False))
\`\`\`

Document 3 insights you discover and suggest 2 business actions based on the data!

          `
        },
        {
          id: "6-2",
          title: "Advanced EDA Techniques",
          duration: "12 min",
          content: `
## Advanced EDA — Deeper Insights 🔬

Let's explore more sophisticated techniques for understanding your data!

### Time Series Analysis

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Convert to datetime
df['date'] = pd.to_datetime(df['date'])
df = df.set_index('date').sort_index()

# Time series plot
plt.figure(figsize=(14, 6))
plt.plot(df.index, df['sales'])
plt.title('Sales Over Time')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.show()

# Resample to different frequencies
daily = df['sales']
weekly = df['sales'].resample('W').mean()
monthly = df['sales'].resample('M').mean()

fig, axes = plt.subplots(3, 1, figsize=(14, 10))
daily.plot(ax=axes[0], title='Daily')
weekly.plot(ax=axes[1], title='Weekly Average')
monthly.plot(ax=axes[2], title='Monthly Average')
plt.tight_layout()
plt.show()

# Decomposition (trend, seasonal, residual)
from statsmodels.tsa.seasonal import seasonal_decompose

result = seasonal_decompose(monthly.dropna(), model='additive', period=12)

fig, axes = plt.subplots(4, 1, figsize=(14, 10))
result.observed.plot(ax=axes[0], title='Observed')
result.trend.plot(ax=axes[1], title='Trend')
result.seasonal.plot(ax=axes[2], title='Seasonal')
result.resid.plot(ax=axes[3], title='Residual')
plt.tight_layout()
plt.show()

# Rolling statistics
df['rolling_mean'] = df['sales'].rolling(window=7).mean()
df['rolling_std'] = df['sales'].rolling(window=7).std()

plt.figure(figsize=(14, 6))
plt.plot(df.index, df['sales'], label='Actual', alpha=0.5)
plt.plot(df.index, df['rolling_mean'], label='7-day Mean', color='red')
plt.fill_between(df.index, 
                 df['rolling_mean'] - 2*df['rolling_std'],
                 df['rolling_mean'] + 2*df['rolling_std'],
                 alpha=0.2, color='red', label='±2 std')
plt.legend()
plt.title('Sales with Rolling Statistics')
plt.show()
\`\`\`

### Segmentation Analysis

\`\`\`python
# Customer segmentation example
# RFM Analysis (Recency, Frequency, Monetary)

# Calculate RFM metrics
today = df['order_date'].max()
rfm = df.groupby('customer_id').agg({
    'order_date': lambda x: (today - x.max()).days,  # Recency
    'order_id': 'count',  # Frequency
    'amount': 'sum'  # Monetary
}).rename(columns={
    'order_date': 'recency',
    'order_id': 'frequency',
    'amount': 'monetary'
})

# Create quartile-based scores
rfm['R_score'] = pd.qcut(rfm['recency'], 4, labels=[4, 3, 2, 1])  # Lower is better
rfm['F_score'] = pd.qcut(rfm['frequency'].rank(method='first'), 4, labels=[1, 2, 3, 4])
rfm['M_score'] = pd.qcut(rfm['monetary'].rank(method='first'), 4, labels=[1, 2, 3, 4])

rfm['RFM_score'] = rfm['R_score'].astype(str) + rfm['F_score'].astype(str) + rfm['M_score'].astype(str)

# Segment customers
def segment_customer(row):
    if row['R_score'] >= 3 and row['F_score'] >= 3 and row['M_score'] >= 3:
        return 'Champions'
    elif row['R_score'] >= 3 and row['F_score'] >= 2:
        return 'Loyal Customers'
    elif row['R_score'] >= 3 and row['M_score'] >= 3:
        return 'Potential Loyalists'
    elif row['R_score'] <= 2 and row['F_score'] >= 3:
        return 'At Risk'
    elif row['R_score'] <= 2 and row['F_score'] <= 2:
        return 'Lost'
    else:
        return 'Others'

rfm['segment'] = rfm.apply(segment_customer, axis=1)
print(rfm['segment'].value_counts())

# Visualize segments
plt.figure(figsize=(10, 6))
rfm['segment'].value_counts().plot(kind='bar')
plt.title('Customer Segments')
plt.xticks(rotation=45)
plt.show()
\`\`\`

<tip>
💡 RFM analysis is a powerful technique used in marketing. It helps identify who your best customers are and who needs attention!
</tip>

### Feature Engineering for EDA

\`\`\`python
# Create derived features
df['date'] = pd.to_datetime(df['date'])

# Time-based features
df['year'] = df['date'].dt.year
df['month'] = df['date'].dt.month
df['day_of_week'] = df['date'].dt.dayofweek
df['day_name'] = df['date'].dt.day_name()
df['is_weekend'] = df['day_of_week'].isin([5, 6])
df['quarter'] = df['date'].dt.quarter

# Binning continuous variables
df['age_group'] = pd.cut(df['age'], 
                         bins=[0, 18, 35, 50, 65, 100],
                         labels=['Under 18', '18-35', '36-50', '51-65', '65+'])

df['income_bracket'] = pd.qcut(df['income'], 
                               q=5, 
                               labels=['Very Low', 'Low', 'Medium', 'High', 'Very High'])

# Interaction features
df['value_per_unit'] = df['total_value'] / df['quantity']
df['price_to_income'] = df['price'] / df['income']

# Analyze new features
for col in ['day_name', 'is_weekend', 'age_group', 'quarter']:
    plt.figure(figsize=(10, 5))
    df.groupby(col)['sales'].mean().plot(kind='bar')
    plt.title(f'Average Sales by {col}')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()
\`\`\`

### Automated EDA Tools

\`\`\`python
# pandas-profiling (ydata-profiling)
from ydata_profiling import ProfileReport

profile = ProfileReport(df, title='Data Analysis Report', explorative=True)
profile.to_file('eda_report.html')

# Sweetviz
import sweetviz as sv

report = sv.analyze(df)
report.show_html('sweetviz_report.html')

# Compare two datasets
report = sv.compare([df_train, 'Training'], [df_test, 'Testing'])
report.show_html('comparison_report.html')

# D-Tale (interactive)
import dtale
d = dtale.show(df)
d.open_browser()
\`\`\`

### Creating an EDA Summary Report

\`\`\`python
def generate_eda_summary(df, target=None):
    """Generate a text summary of EDA findings."""
    summary = []
    
    summary.append(f"Dataset has {df.shape[0]:,} rows and {df.shape[1]} columns.")
    
    # Missing values
    missing = df.isnull().sum().sum()
    if missing > 0:
        summary.append(f"Total missing values: {missing:,} ({missing/df.size*100:.1f}%)")
    else:
        summary.append("No missing values found.")
    
    # Duplicates
    dupes = df.duplicated().sum()
    summary.append(f"Duplicate rows: {dupes:,}")
    
    # Numeric summary
    numeric_cols = df.select_dtypes(include=[np.number]).columns
    summary.append(f"\\nNumeric columns ({len(numeric_cols)}): {', '.join(numeric_cols)}")
    
    # Categorical summary
    cat_cols = df.select_dtypes(include=['object']).columns
    summary.append(f"Categorical columns ({len(cat_cols)}): {', '.join(cat_cols)}")
    
    # Skewed columns
    skewed = []
    for col in numeric_cols:
        skew = df[col].skew()
        if abs(skew) > 1:
            skewed.append(f"{col} (skew={skew:.2f})")
    if skewed:
        summary.append(f"\\nHighly skewed columns: {', '.join(skewed)}")
    
    # Target variable insights
    if target and target in df.columns:
        summary.append(f"\\nTarget: {target}")
        summary.append(f"  Mean: {df[target].mean():.2f}")
        summary.append(f"  Median: {df[target].median():.2f}")
        summary.append(f"  Std: {df[target].std():.2f}")
    
    return "\\n".join(summary)

print(generate_eda_summary(df, target='sales'))
\`\`\`

<warning>
⚠️ Automated EDA tools are great for quick overviews, but don't replace domain expertise and critical thinking!
</warning>

EDA is an iterative process — keep exploring! 🔄
### 🎯 Practice Exercise

**Exercise: Advanced EDA Techniques**

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Create time-series dataset
dates = pd.date_range('2023-01-01', '2024-12-31', freq='D')
np.random.seed(42)
df = pd.DataFrame({
    'date': dates,
    'sales': np.random.normal(1000, 200, len(dates)) + 
             np.sin(np.arange(len(dates)) * 2 * np.pi / 365) * 300,
    'website_visits': np.random.poisson(500, len(dates)),
})
df['conversion_rate'] = (df['sales'] / df['website_visits'] / 10).clip(0.01, 0.15)

# Challenge 1: Rolling averages
df['sales_7d_avg'] = df['sales'].rolling(7).mean()
df['sales_30d_avg'] = df['sales'].rolling(30).mean()

plt.figure(figsize=(14, 5))
plt.plot(df['date'], df['sales'], alpha=0.3, label='Daily')
plt.plot(df['date'], df['sales_7d_avg'], label='7-day avg')
plt.plot(df['date'], df['sales_30d_avg'], label='30-day avg', linewidth=2)
plt.legend()
plt.title('Sales Trend with Rolling Averages')
plt.show()

# Challenge 2: Month-over-month comparison
df['month'] = df['date'].dt.month
df['year'] = df['date'].dt.year
monthly = df.groupby(['year', 'month'])['sales'].sum().unstack(0)
monthly.plot(kind='bar', figsize=(12, 5))
plt.title('Monthly Sales Comparison: 2023 vs 2024')
plt.show()
\`\`\`

**Bonus:** Calculate the correlation between website visits and sales, and determine the lag that maximizes correlation.

          `
        }
      ]
    },
    {
      id: 7,
      title: "Statistical Analysis",
      description: "Making data-driven decisions",
      lessons: [
        {
          id: "7-1",
          title: "Descriptive Statistics",
          duration: "12 min",
          content: `
## Descriptive Statistics — Summarizing Your Data 📏

Descriptive statistics help you understand and communicate the key characteristics of your data.

### Measures of Central Tendency

\`\`\`python
import pandas as pd
import numpy as np
from scipy import stats

data = [23, 25, 27, 28, 29, 30, 31, 35, 45, 100]

# Mean - average value
mean = np.mean(data)
print(f"Mean: {mean:.2f}")  # 37.3 (affected by outlier 100)

# Median - middle value
median = np.median(data)
print(f"Median: {median:.2f}")  # 29.5 (robust to outliers)

# Mode - most frequent value
mode = stats.mode(data, keepdims=True)
print(f"Mode: {mode.mode[0]}")  # All unique, no real mode

# Trimmed mean - mean after removing extremes
trimmed = stats.trim_mean(data, 0.1)  # Remove 10% from each end
print(f"Trimmed Mean (10%): {trimmed:.2f}")

# When to use which?
# Mean: Symmetric data, no outliers
# Median: Skewed data, outliers present
# Mode: Categorical data, finding most common value
\`\`\`

### Measures of Spread

\`\`\`python
# Variance - average squared deviation from mean
variance = np.var(data, ddof=1)  # ddof=1 for sample variance
print(f"Variance: {variance:.2f}")

# Standard deviation - square root of variance
std = np.std(data, ddof=1)
print(f"Standard Deviation: {std:.2f}")

# Range
range_val = np.max(data) - np.min(data)
print(f"Range: {range_val}")

# Interquartile Range (IQR) - robust to outliers
q75, q25 = np.percentile(data, [75, 25])
iqr = q75 - q25
print(f"IQR: {iqr}")
print(f"Q1: {q25}, Q3: {q75}")

# Coefficient of Variation (CV) - relative variability
cv = (std / mean) * 100
print(f"CV: {cv:.2f}%")

# Mean Absolute Deviation (MAD)
mad = np.mean(np.abs(data - np.mean(data)))
print(f"MAD: {mad:.2f}")
\`\`\`

<tip>
💡 Use IQR instead of standard deviation when outliers are present. IQR focuses on the middle 50% of data!
</tip>

### Shape Measures

\`\`\`python
# Skewness - asymmetry of distribution
skew = stats.skew(data)
print(f"Skewness: {skew:.2f}")
# Positive: Right-tailed (mean > median)
# Negative: Left-tailed (mean < median)
# Near 0: Symmetric

# Kurtosis - "tailedness" of distribution
kurt = stats.kurtosis(data)
print(f"Kurtosis: {kurt:.2f}")
# Positive: Heavy tails (more outliers than normal)
# Negative: Light tails (fewer outliers than normal)
# Near 0: Similar to normal distribution

# Visualize skewness
import matplotlib.pyplot as plt
import seaborn as sns

fig, axes = plt.subplots(1, 3, figsize=(15, 4))

# Right-skewed
right_skewed = np.random.exponential(2, 1000)
axes[0].hist(right_skewed, bins=30, edgecolor='black')
axes[0].set_title(f'Right Skewed (skew={stats.skew(right_skewed):.2f})')

# Symmetric
symmetric = np.random.normal(0, 1, 1000)
axes[1].hist(symmetric, bins=30, edgecolor='black')
axes[1].set_title(f'Symmetric (skew={stats.skew(symmetric):.2f})')

# Left-skewed
left_skewed = -np.random.exponential(2, 1000)
axes[2].hist(left_skewed, bins=30, edgecolor='black')
axes[2].set_title(f'Left Skewed (skew={stats.skew(left_skewed):.2f})')

plt.tight_layout()
plt.show()
\`\`\`

### Percentiles and Quantiles

\`\`\`python
# Percentiles
percentiles = [10, 25, 50, 75, 90, 95, 99]
for p in percentiles:
    print(f"{p}th percentile: {np.percentile(data, p):.2f}")

# Five-number summary
print("\\nFive-number summary:")
print(f"  Min: {np.min(data)}")
print(f"  Q1: {np.percentile(data, 25)}")
print(f"  Median: {np.median(data)}")
print(f"  Q3: {np.percentile(data, 75)}")
print(f"  Max: {np.max(data)}")

# Using Pandas describe
df = pd.DataFrame({'values': data})
print(df.describe())
\`\`\`

### Grouped Statistics

\`\`\`python
# Statistics by group
df = pd.DataFrame({
    'category': ['A', 'A', 'B', 'B', 'C', 'C', 'A', 'B', 'C'],
    'value': [10, 15, 20, 25, 30, 35, 12, 22, 32]
})

# Multiple statistics per group
stats_by_group = df.groupby('category')['value'].agg([
    'count',
    'mean',
    'std',
    'min',
    ('q25', lambda x: x.quantile(0.25)),
    'median',
    ('q75', lambda x: x.quantile(0.75)),
    'max'
])
print(stats_by_group)

# Custom aggregation
def describe_group(x):
    return pd.Series({
        'mean': x.mean(),
        'std': x.std(),
        'cv': x.std() / x.mean() * 100,
        'skew': x.skew(),
        'n': len(x)
    })

detailed_stats = df.groupby('category')['value'].apply(describe_group).unstack()
print(detailed_stats)
\`\`\`

<warning>
⚠️ Always report measures of spread along with central tendency! A mean without standard deviation tells only half the story.
</warning>

Descriptive statistics are the foundation of data understanding! 📊
### 🎯 Practice Exercise

**Exercise: Descriptive Statistics in Action**

\`\`\`python
import pandas as pd
import numpy as np
from scipy import stats

# Sample dataset: exam scores from two classes
np.random.seed(42)
class_a = np.random.normal(78, 10, 30).clip(0, 100).round(1)
class_b = np.random.normal(82, 8, 30).clip(0, 100).round(1)

# Challenge 1: Calculate all descriptive stats for both classes
for name, data in [('Class A', class_a), ('Class B', class_b)]:
    print(f"\n{name}:")
    print(f"  Mean: {np.mean(data):.1f}")
    print(f"  Median: {np.median(data):.1f}")
    print(f"  Mode: {stats.mode(data, keepdims=True).mode[0]:.1f}")
    print(f"  Std Dev: {np.std(data):.1f}")
    print(f"  Skewness: {stats.skew(data):.3f}")
    print(f"  Kurtosis: {stats.kurtosis(data):.3f}")
    print(f"  IQR: {np.percentile(data, 75) - np.percentile(data, 25):.1f}")

# Challenge 2: Which class has more consistent scores?
print(f"\nCoefficient of Variation:")
print(f"  Class A: {np.std(class_a)/np.mean(class_a)*100:.1f}%")
print(f"  Class B: {np.std(class_b)/np.mean(class_b)*100:.1f}%")
print("Lower CV = more consistent")
\`\`\`

**Bonus:** Create a side-by-side box plot and histogram for both classes.

          `
        },
        {
          id: "7-2",
          title: "Hypothesis Testing",
          duration: "15 min",
          content: `
## Hypothesis Testing — Making Data-Driven Decisions 🎯

Hypothesis testing helps you make decisions based on data, quantifying uncertainty along the way.

### The Hypothesis Testing Framework

\`\`\`
1. State null hypothesis (H₀) and alternative (H₁)
2. Choose significance level (α, usually 0.05)
3. Calculate test statistic
4. Find p-value
5. Make decision: reject H₀ if p-value < α
\`\`\`

### T-Tests — Comparing Means

\`\`\`python
from scipy import stats
import numpy as np

# One-sample t-test
# H₀: population mean = 100
# H₁: population mean ≠ 100
sample = [98, 102, 104, 97, 101, 99, 103, 100, 98, 102]
t_stat, p_value = stats.ttest_1samp(sample, 100)
print(f"One-sample t-test: t={t_stat:.3f}, p={p_value:.4f}")
if p_value < 0.05:
    print("Reject H₀: Mean is significantly different from 100")
else:
    print("Fail to reject H₀: No significant difference from 100")

# Two-sample t-test (independent groups)
# H₀: means are equal
# H₁: means are different
group_a = [85, 90, 88, 92, 87, 91, 89, 86, 90, 88]
group_b = [78, 82, 80, 85, 79, 83, 81, 84, 82, 80]

t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"\\nTwo-sample t-test: t={t_stat:.3f}, p={p_value:.4f}")

# Check assumptions - equal variances?
levene_stat, levene_p = stats.levene(group_a, group_b)
print(f"Levene's test (equal variances): p={levene_p:.4f}")

# If variances unequal, use Welch's t-test
t_stat, p_value = stats.ttest_ind(group_a, group_b, equal_var=False)
print(f"Welch's t-test: t={t_stat:.3f}, p={p_value:.4f}")

# Paired t-test (same subjects, before/after)
# H₀: no difference between before and after
before = [150, 155, 160, 145, 140, 165, 155, 150, 160, 145]
after = [145, 148, 155, 140, 138, 160, 150, 145, 155, 142]

t_stat, p_value = stats.ttest_rel(before, after)
print(f"\\nPaired t-test: t={t_stat:.3f}, p={p_value:.4f}")
print(f"Mean difference: {np.mean(np.array(before) - np.array(after)):.2f}")
\`\`\`

<tip>
💡 Use paired t-test when comparing the same subjects before/after treatment. Use independent t-test when comparing different groups!
</tip>

### ANOVA — Comparing Multiple Groups

\`\`\`python
# One-way ANOVA
# H₀: all group means are equal
# H₁: at least one mean is different
group_1 = [85, 90, 88, 92, 87]
group_2 = [78, 82, 80, 85, 79]
group_3 = [92, 95, 94, 98, 93]

f_stat, p_value = stats.f_oneway(group_1, group_2, group_3)
print(f"One-way ANOVA: F={f_stat:.3f}, p={p_value:.4f}")

# Post-hoc analysis if ANOVA is significant
if p_value < 0.05:
    from statsmodels.stats.multicomp import pairwise_tukeyhsd
    
    # Prepare data
    import pandas as pd
    data = group_1 + group_2 + group_3
    groups = ['G1']*len(group_1) + ['G2']*len(group_2) + ['G3']*len(group_3)
    
    tukey = pairwise_tukeyhsd(data, groups, alpha=0.05)
    print("\\nTukey HSD Post-hoc:")
    print(tukey)
\`\`\`

### Chi-Square Tests — Categorical Data

\`\`\`python
# Chi-square test of independence
# H₀: variables are independent
# H₁: variables are associated

# Contingency table
observed = np.array([
    [50, 30, 20],  # Group A
    [30, 40, 30],  # Group B
    [20, 30, 50]   # Group C
])

chi2, p_value, dof, expected = stats.chi2_contingency(observed)
print(f"Chi-square test: χ²={chi2:.3f}, p={p_value:.4f}, dof={dof}")
print("\\nExpected frequencies:")
print(expected)

# Chi-square goodness of fit
# H₀: data follows expected distribution
observed = [45, 35, 20]
expected = [100/3, 100/3, 100/3]  # Expected if uniform

chi2, p_value = stats.chisquare(observed, expected)
print(f"\\nGoodness of fit: χ²={chi2:.3f}, p={p_value:.4f}")
\`\`\`

### Correlation Tests

\`\`\`python
# Pearson correlation (linear relationship, normal data)
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y = [2.1, 4.2, 5.8, 8.1, 10.2, 12.1, 13.9, 16.0, 18.1, 20.0]

r, p_value = stats.pearsonr(x, y)
print(f"Pearson correlation: r={r:.3f}, p={p_value:.4f}")

# Spearman correlation (monotonic relationship, ordinal data)
rho, p_value = stats.spearmanr(x, y)
print(f"Spearman correlation: ρ={rho:.3f}, p={p_value:.4f}")

# Kendall's tau (another rank correlation)
tau, p_value = stats.kendalltau(x, y)
print(f"Kendall's tau: τ={tau:.3f}, p={p_value:.4f}")
\`\`\`

### Effect Size

\`\`\`python
# P-value tells you IF there's an effect
# Effect size tells you HOW BIG the effect is

# Cohen's d for t-tests
def cohens_d(group1, group2):
    n1, n2 = len(group1), len(group2)
    var1, var2 = np.var(group1, ddof=1), np.var(group2, ddof=1)
    pooled_std = np.sqrt(((n1-1)*var1 + (n2-1)*var2) / (n1+n2-2))
    return (np.mean(group1) - np.mean(group2)) / pooled_std

d = cohens_d(group_a, group_b)
print(f"Cohen's d: {d:.3f}")
# Interpretation:
# |d| < 0.2: small effect
# |d| 0.2-0.8: medium effect
# |d| > 0.8: large effect

# Effect size for ANOVA (eta-squared)
def eta_squared(groups):
    all_data = np.concatenate(groups)
    grand_mean = np.mean(all_data)
    
    ss_between = sum(len(g) * (np.mean(g) - grand_mean)**2 for g in groups)
    ss_total = np.sum((all_data - grand_mean)**2)
    
    return ss_between / ss_total

eta2 = eta_squared([group_1, group_2, group_3])
print(f"Eta-squared: {eta2:.3f}")
\`\`\`

<warning>
⚠️ Statistical significance ≠ practical significance! A tiny effect can be statistically significant with large sample sizes. Always report effect sizes!
</warning>

Hypothesis testing helps you make confident, data-driven decisions! 🎲
### 🎯 Practice Exercise

**Exercise: Hypothesis Testing Practice**

\`\`\`python
import numpy as np
from scipy import stats

# Scenario: A/B test for a website button color
np.random.seed(42)

# Group A (blue button): 1000 visitors, conversion rate ~5%
group_a = np.random.binomial(1, 0.05, 1000)

# Group B (green button): 1000 visitors, conversion rate ~6.5%
group_b = np.random.binomial(1, 0.065, 1000)

print(f"Group A conversion: {group_a.mean()*100:.1f}%")
print(f"Group B conversion: {group_b.mean()*100:.1f}%")

# Challenge 1: Two-sample t-test
t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"\nt-test: t={t_stat:.3f}, p={p_value:.4f}")
print(f"Significant at 0.05? {'Yes' if p_value < 0.05 else 'No'}")

# Challenge 2: Chi-square test for proportions
from scipy.stats import chi2_contingency
table = [[group_a.sum(), len(group_a) - group_a.sum()],
         [group_b.sum(), len(group_b) - group_b.sum()]]
chi2, p_chi, dof, expected = chi2_contingency(table)
print(f"\nChi-square: χ²={chi2:.3f}, p={p_chi:.4f}")

# Challenge 3: Calculate effect size (Cohen's h)
import math
p1, p2 = group_a.mean(), group_b.mean()
h = 2 * (math.asin(math.sqrt(p2)) - math.asin(math.sqrt(p1)))
print(f"\nEffect size (Cohen's h): {h:.3f}")
print(f"Effect: {'Small' if abs(h) < 0.3 else 'Medium' if abs(h) < 0.5 else 'Large'}")
\`\`\`

Try changing the sample sizes and conversion rates to see how they affect statistical significance!

          `
        }
      ]
    },
    {
      id: 8,
      title: "Real-World Data Project",
      description: "Complete end-to-end analysis",
      lessons: [
        {
          id: "8-1",
          title: "Project: Sales Data Analysis",
          duration: "20 min",
          content: `
## Complete Data Science Project 📊

Let's put everything together with a real-world sales data analysis project!

### Project Overview

\`\`\`
Business Problem:
- Analyze retail sales data to identify:
  1. Sales trends and seasonality
  2. Best-performing products and categories
  3. Customer segments
  4. Actionable recommendations

Dataset: 
- 2 years of sales transactions
- Customer demographics
- Product information
\`\`\`

### Step 1: Data Loading and Initial Exploration

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime

# Load data
df = pd.read_csv('sales_data.csv')

# First look
print("Dataset Shape:", df.shape)
print("\\nColumn Types:")
print(df.dtypes)
print("\\nFirst few rows:")
print(df.head())

# Missing values
print("\\nMissing Values:")
print(df.isnull().sum())

# Basic statistics
print("\\nNumerical Summary:")
print(df.describe())
\`\`\`

### Step 2: Data Cleaning

\`\`\`python
# Convert date columns
df['order_date'] = pd.to_datetime(df['order_date'])
df['ship_date'] = pd.to_datetime(df['ship_date'])

# Handle missing values
df['region'] = df['region'].fillna('Unknown')
df['discount'] = df['discount'].fillna(0)

# Remove duplicates
print(f"Duplicates: {df.duplicated().sum()}")
df = df.drop_duplicates()

# Create derived features
df['year'] = df['order_date'].dt.year
df['month'] = df['order_date'].dt.month
df['quarter'] = df['order_date'].dt.quarter
df['day_of_week'] = df['order_date'].dt.day_name()
df['profit_margin'] = df['profit'] / df['sales']
df['days_to_ship'] = (df['ship_date'] - df['order_date']).dt.days

# Check for outliers
for col in ['sales', 'profit', 'quantity']:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    outliers = df[(df[col] < Q1 - 1.5*IQR) | (df[col] > Q3 + 1.5*IQR)]
    print(f"{col}: {len(outliers)} outliers ({len(outliers)/len(df)*100:.1f}%)")

print("\\nData cleaned! Shape:", df.shape)
\`\`\`

### Step 3: Exploratory Data Analysis

\`\`\`python
# Sales Overview
total_sales = df['sales'].sum()
total_profit = df['profit'].sum()
avg_order = df['sales'].mean()

print(f"Total Sales: $\{total_sales:,.2f}")
print(f"Total Profit: $\{total_profit:,.2f}")
print(f"Average Order: $\{avg_order:.2f}")
print(f"Profit Margin: {total_profit/total_sales*100:.1f}%")

# Sales over time
monthly_sales = df.groupby(['year', 'month']).agg({
    'sales': 'sum',
    'profit': 'sum',
    'order_id': 'nunique'
}).reset_index()

fig, axes = plt.subplots(2, 1, figsize=(14, 10))

# Sales trend
monthly_sales['date'] = pd.to_datetime(monthly_sales[['year', 'month']].assign(day=1))
axes[0].plot(monthly_sales['date'], monthly_sales['sales'], marker='o')
axes[0].set_title('Monthly Sales Trend', fontsize=14)
axes[0].set_ylabel('Sales ($)')
axes[0].tick_params(axis='x', rotation=45)

# Order count trend
axes[1].bar(monthly_sales['date'], monthly_sales['order_id'], width=20)
axes[1].set_title('Monthly Order Count', fontsize=14)
axes[1].set_ylabel('Number of Orders')
axes[1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()

# Category analysis
category_stats = df.groupby('category').agg({
    'sales': 'sum',
    'profit': 'sum',
    'order_id': 'nunique',
    'quantity': 'sum'
}).round(2)
category_stats['profit_margin'] = (category_stats['profit'] / category_stats['sales'] * 100).round(1)
category_stats = category_stats.sort_values('sales', ascending=False)
print("\\nCategory Performance:")
print(category_stats)

# Visualize categories
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

category_stats['sales'].plot(kind='bar', ax=axes[0], color='steelblue')
axes[0].set_title('Sales by Category')
axes[0].set_ylabel('Sales ($)')
axes[0].tick_params(axis='x', rotation=45)

category_stats['profit_margin'].plot(kind='bar', ax=axes[1], color='coral')
axes[1].set_title('Profit Margin by Category')
axes[1].set_ylabel('Profit Margin (%)')
axes[1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.show()
\`\`\`

<tip>
💡 Always start with high-level metrics before diving into details. Executives want the summary first!
</tip>

### Step 4: Deep Dive Analysis

\`\`\`python
# Regional analysis
region_stats = df.groupby('region').agg({
    'sales': 'sum',
    'profit': 'sum',
    'customer_id': 'nunique'
}).round(2)
region_stats.columns = ['Total Sales', 'Total Profit', 'Unique Customers']
region_stats['Avg per Customer'] = (region_stats['Total Sales'] / region_stats['Unique Customers']).round(2)
print("\\nRegional Performance:")
print(region_stats.sort_values('Total Sales', ascending=False))

# Customer segmentation (RFM)
today = df['order_date'].max()
rfm = df.groupby('customer_id').agg({
    'order_date': lambda x: (today - x.max()).days,
    'order_id': 'nunique',
    'sales': 'sum'
}).rename(columns={
    'order_date': 'recency',
    'order_id': 'frequency',
    'sales': 'monetary'
})

# Quartile-based scoring
for col in ['recency', 'frequency', 'monetary']:
    if col == 'recency':
        rfm[f'{col}_score'] = pd.qcut(rfm[col], 4, labels=[4, 3, 2, 1])
    else:
        rfm[f'{col}_score'] = pd.qcut(rfm[col].rank(method='first'), 4, labels=[1, 2, 3, 4])

rfm['rfm_score'] = rfm['recency_score'].astype(int) + rfm['frequency_score'].astype(int) + rfm['monetary_score'].astype(int)

# Segment customers
def segment(row):
    if row['rfm_score'] >= 10:
        return 'Champions'
    elif row['rfm_score'] >= 7:
        return 'Loyal'
    elif row['rfm_score'] >= 4:
        return 'At Risk'
    else:
        return 'Lost'

rfm['segment'] = rfm.apply(segment, axis=1)

print("\\nCustomer Segments:")
print(rfm['segment'].value_counts())

# Visualize segments
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

rfm['segment'].value_counts().plot(kind='pie', autopct='%1.1f%%', ax=axes[0])
axes[0].set_title('Customer Segment Distribution')

segment_monetary = rfm.groupby('segment')['monetary'].mean()
segment_monetary.plot(kind='bar', ax=axes[1], color='steelblue')
axes[1].set_title('Average Spending by Segment')
axes[1].set_ylabel('Avg Monetary Value ($)')

plt.tight_layout()
plt.show()
\`\`\`

### Step 5: Key Findings and Recommendations

\`\`\`python
# Create summary report
findings = """
=== SALES DATA ANALYSIS REPORT ===

1. OVERALL PERFORMANCE
   - Total Revenue: $\{:,.0f}
   - Total Profit: $\{:,.0f}
   - Overall Profit Margin: {:.1f}%
   - Average Order Value: $\{:.2f}

2. TOP PERFORMERS
   - Best Category: {} ($\{:,.0f})
   - Most Profitable Region: {}
   - Peak Month: {} {}

3. CUSTOMER INSIGHTS
   - Total Customers: {:,}
   - Champions (best customers): {:.1f}%
   - At Risk customers: {:.1f}%

4. RECOMMENDATIONS
   a) Focus marketing on {} category - highest profit margin
   b) Target At Risk customers with re-engagement campaigns
   c) Optimize shipping - {} region has longest delivery times
   d) Prepare for Q{} - historically highest sales quarter
"""

# Fill in the findings
print(findings.format(
    total_sales,
    total_profit,
    total_profit/total_sales*100,
    avg_order,
    category_stats.index[0],
    category_stats['sales'].iloc[0],
    region_stats['Total Profit'].idxmax(),
    monthly_sales.loc[monthly_sales['sales'].idxmax(), 'month'],
    monthly_sales.loc[monthly_sales['sales'].idxmax(), 'year'],
    df['customer_id'].nunique(),
    (rfm['segment'] == 'Champions').sum() / len(rfm) * 100,
    (rfm['segment'] == 'At Risk').sum() / len(rfm) * 100,
    category_stats['profit_margin'].idxmax(),
    df.groupby('region')['days_to_ship'].mean().idxmax(),
    monthly_sales.groupby(monthly_sales['date'].dt.quarter)['sales'].sum().idxmax()
))
\`\`\`

<warning>
⚠️ Always tie your analysis back to business value! Data insights are only useful if they lead to actionable decisions.
</warning>

Congratulations! You've completed a full data science project! 🎉

### What You've Learned

\`\`\`
✅ NumPy for numerical computing
✅ Pandas for data manipulation
✅ Matplotlib & Seaborn for visualization
✅ Data cleaning techniques
✅ Exploratory Data Analysis
✅ Statistical analysis
✅ Customer segmentation
✅ Building data-driven recommendations
\`\`\`

Keep practicing with new datasets and problems! 🚀
### 🎯 Practice Exercise

**Exercise: Your Own Data Science Project**

Apply everything you've learned! Follow these steps:

1. **Find a dataset** — Try [kaggle.com/datasets](https://kaggle.com/datasets)
2. **Define 3 questions** you want to answer
3. **Load and explore** the data with Pandas
4. **Clean** any messy data (missing values, outliers)
5. **Visualize** key patterns with Matplotlib/Seaborn
6. **Analyze** with statistics
7. **Present** your findings

\`\`\`python
# Project template
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Step 1: Load your data
# df = pd.read_csv('your_dataset.csv')

# Step 2: Initial exploration
# print(df.shape, df.dtypes, df.describe())

# Step 3: Clean data
# Handle missing values, outliers, type conversions

# Step 4: EDA and visualization
# Create at least 5 different charts

# Step 5: Statistical analysis
# Test at least one hypothesis

# Step 6: Write your conclusions
# What did you find? What actions do you recommend?
\`\`\`

Share your project on GitHub or Kaggle to build your portfolio!

          `
        }
      ]
    }
  ]
};

export default courseData;
