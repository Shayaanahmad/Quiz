<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Quiz Website</title>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	
	<main class="main">
		<header class="header">
			
			<a href="#" class="logo">Quiz</a>
			
			<nav class="navbar">
				<a href="#" class="active">Home</a>
				<a href="#">Create Quiz</a>
			</nav>
			
		</header>
		<div class="container">
		
		<section class="quiz-section">
			
			<div class="quiz-box">
				<h1>Quiz</h1>
				<div class="quiz-header">
					<span>Quiz Website Tutorials</span>
					<span class="header-score">Score: 0 / 5</span>
				 </div>
				 
				 
				 <h2 class="question-text">What does HTML stand for?</h2>
				 <div class="option-list">
				 	<div class="option">
				 		<span>A. Hyper Type Multi Language</span>
				 	</div>
				 	<div class="option">
				 		<span>B. Hyper Text Multiple Language</span>
				 	</div>
				 	<div class="option">
				 		<span>C. Hyper Text Markup Language</span>
				 	</div>
				 	<div class="option">
				 		<span>D. Home Text Multi Language</span>
				 	</div>
				 </div>
				 
				 <div class="quiz-footer">
				 <span class="question-total">1 of 5 Questions</span>
				 <button class="next-btn">Next</button>
				 </div>
			</div>
		
		</section>
		<section class="home">
			<div class="home-content">
				<h1> Quiz Website</h1>
				<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
			 			</p>
			 	<button class="start-btn">Start Quiz</button>		
			</div>
		
		</section>
		</div>
	</main>
	
	<div class="popup-info">
		<h2>Quiz Guide</h2>
		<span class="info">1. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</span>
		<span class="info">2. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</span>
		<span class="info">3. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</span>
		<span class="info">4. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</span>
		<span class="info">5. Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print</span>
		
		<div class="btn-group">
			<button class="info-btn exit-btn">Exit Quiz</button>
			<a href="#" class="info-btn continue-btn">Continue</a> 
		</div>
	
	</div>
	
	<script src="script.js"></script>

</body>

</html>
