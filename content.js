	$(document).ready(function(){
		var img =
			 	document.createElement("img");
 
				img.src = "midlife_crisis1.jpg";
				var src = document.getElementById("ig1");
			// , 
			// {
			// 	document.createElement("img");
 
			// 	img.src = "midlife_crisis1.jpg";
			// 	var src = document.getElementById("ig1");
 
			// 	src.appendChild(img);

			// }
			
		var quoteSource=[
		{
			quote: "Don’t stress. Do your best. Forget the rest.",
			name:"Anonymous"
	    },
	    {
	    	quote:"I’m not telling you it’s going to be easy- I'm telling you it’s going to be worth it.",
	    	name:"Art Williams"
	    },
	    {
	    	quote:"Foster collaboration, not competition.",
	    	name:"Anonymous"
	    },
	    {
	    	quote:"Inclusion is not a matter of political correctness. It is the key to growth.",
	    	name:"Jesse Jackson, Politicial and Civil Rights Activist"
	    },
	    {
	    	quote:"When we listen and celebrate what is both common and different, we become a wiser, more inclusive, and better organization.",
	    	name:"Pat Wadors, Head of HR at LinkedIn"
	    },
	    {
	    	quote:"The point isn’t to get people to accept that they have biases, but to get them to see [for themselves] that those biases have negative consequences for others.",
	    	name:"Theresa McHenry, HR Director at Microsoft UK"
	    },
	    {
	    	quote:"You are trapped by nothing more than a poor attitude",
	    	name:"Sid Mittra, To Bee or Not to Bee: Winning Against All Odds"
	    },
	    {
	    	quote:"Imagine what our story would look like if, rather than succumbing to the insistent voices of family or culture, we determined that our vocation was to be a better human.",
	    	name:"James Hollis, Ph.D."
	    },
	    {
	    	quote:"You don’t have to live your life the way other people expect you to.",
	    	name:"Chris Guillebeau"
	    }	    
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			src.appendChild(img);
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready