//Script for photo sliders on the projects page

var sliderObjects = [];
createSliderObjects();

function plusDivs(obj, n) {
  var photosDiv = $(obj) //so that the button can be matched to the parent of the images
    .parents()
    .eq(2)
    .children()[0];

  var matchedDiv;

  $.each(sliderObjects, function(i, item) {
    if ($(photosDiv).attr("id") == $(item).attr("id")) {
      matchedDiv = item;
      return false;
    }
  });
  matchedDiv.slideIndex = matchedDiv.slideIndex + n;
  showDivs(matchedDiv, matchedDiv.slideIndex);
}

// function plusDivs(obj, n) {
//   var parentDiv = $(obj).parent();
//   var matchedDiv;
//   $.each(sliderObjects, function(i, item) {
//     if ($(parentDiv[0]).attr("id") == $(item).attr("id")) {
//       matchedDiv = item;
//       return false;
//     }
//   });

//   matchedDiv.slideIndex = matchedDiv.slideIndex + n;
//   showDivs(matchedDiv, matchedDiv.slideIndex);
// }

function createSliderObjects() {
  var sliderDivs = $(".slider");
  $.each(sliderDivs, function(i, item) {
    var obj = {};
    obj.id = $(item).attr("id");
    obj.divContent = item;
    obj.slideIndex = 1;
    obj.slideContents = $(item).find(".mySlides");
    showDivs(obj, 1);
    sliderObjects.push(obj);
  });
}

function showDivs(divObject, n) {
  debugger;
  var i;
  if (n > divObject.slideContents.length) {
    divObject.slideIndex = 1;
  }

  if (n < 1) {
    divObject.slideIndex = divObject.slideContents.length;
  }

  for (i = 0; i < divObject.slideContents.length; i++) {
    divObject.slideContents[i].style.display = "none";
  }

  divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
}
