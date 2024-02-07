//write here js code
function result()
{
	var score=0;
	if(document.getElementById('ans1').checked)
		{	
			score++;
		}
	if(document.getElementById('ans2').checked)
		{	
			score++;
		}
	if(document.getElementById('ans3').checked)
		{	
			score++;
		}
	if(document.getElementById('ans3').checked)
		{	
			score++;
		}
	if(document.getElementById('ans4').checked)
		{	
			score++;
		}
	if(document.getElementById('ans5').checked)
		{	
			score++;
		}	
	if(document.getElementById('ans6').checked)
		{	
			score++;
		}
	if(document.getElementById('ans7').checked)
		{	
			score++;
		}
	if(document.getElementById('ans8').checked)
		{	
			score++;
		}
	if(document.getElementById('ans9').checked)
		{	
			score++;
		}
	if(document.getElementById('ans10').checked)
		{	
			score++;
		}
	if(document.getElementById('ans11').checked)
		{	
			score++;
		}
 alert("Your score is:"+score);
 // to print on browser
 // document.write("Your score is:"+score);
}
function myFunction()
{
	location.replace("Online_Test_checker.html")
}