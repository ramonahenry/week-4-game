//Crystal Game 

  var targetNumber = Math.floor((Math.random() * 102) + 19);

  $("#number-to-guess").text(targetNumber);

  
  
  

  var counter = 0;
  var wins = 0;
  var losses = 0;
  
  //add score counter to the total-score div

  $("#total-score").text(counter);

  
  
  // Display and assign number to Crystals
  for (var i = 0; i < 4; i++) {
   
    //An array of image links
    var imglinkArray = ["http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZF-tHUjE_1y_rlsU8c55byi8jpiF4Kqm57CVjzPBLiflzYuVK",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRehXbVFFl7vjta--SU8dnzXuEfFw6BNyVSSbkg3zdjStP6Qp",
      "http://www.johnbetts-fineminerals.com/jhbnyc/mineralmuseum/48432det.jpg"
    ];
    

    // create an image tag for each image
    var imageCrystal = $("<img>");
    console.log(imageCrystal);

    //Each crystal will be given the class ".crystal-image" with an appended //value of i
    // example:  the class will be "crystal-image0" if i = 0
    imageCrystal.addClass("crystal-image" + i +  " " + "crystal-click");
    
    console.log(imageCrystal);
    console.log(i)

    // Each imageCrystal will be given a src link using the image array
    
    imageCrystal.attr("src", imglinkArray[i]);


    console.log(imageCrystal);

    // Add Attributes
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue",  Math.floor((Math.random() * 12) + 1));
    console.log(imageCrystal);

    // Adds each image to the page
    $("#crystals").append(imageCrystal);
  }

  // on click the image will add to the score for the crystal click class
 
  $(".crystal-click").on("click", function() {
    
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //add the Crystal's value to the counter
    
    counter += crystalValue;
    $("#total-score").text(counter);




    //The counter will display an alert with the increments of the score
    //alert("New score: " + counter);

    if (counter === targetNumber) {

      alert("You win!");
      wins++;
       $("#wins").text(wins);
        //call this function to reset the counters/random
         roundReset(); 
         console.log(targetNumber);

    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++
      $("#losses").text(losses);
      //call this function to reset the counters/random
       roundReset();
       console.log(targetNumber);
    }
  //reset the counters and random number
  function roundReset(){


    targetNumber = Math.floor((Math.random() * 102) + 19);
    $("#number-to-guess").text(targetNumber);
    counter = 0;
    $("#total-score").text(counter);

  }


  });
