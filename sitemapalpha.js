<script type="text/javascript">
/*sitemap alphabetis by haq*/
var startIndex = 1;
var maxResults = 150;
var allResults = [];
function sendQuery12()
{
   var scpt = document.createElement("script");
   scpt.src = "https://infommda.blogspot.com/feeds/posts/summary?alt=json&callback=processPostList12&start-index=" + startIndex + "&max-results=" + maxResults;
   document.body.appendChild(scpt);
}

function printArrayResults(root)
{  
   //Sort Alphebetically
   allResults.sort(function(a, b){
        var a_string = a.children[0].textContent ;
        var b_string = b.children[0].textContent ;

 if(a_string < b_string) return -1;
 if(a_string > b_string) return 1;
 return 0;
   })

   var elmt = document.getElementById("postList12");
    for (index = 0; index < allResults.length; index++) {
         elmt.appendChild(allResults[index]);
    }
}

function processPostList12(root)
{    
  var elmt = document.getElementById("postList12");
   if (!elmt)
      return;

   var feed = root.feed;

   if (feed.entry.length > 0)
   {
      for (var i = 0; i < feed.entry.length; i++)
      {
         var entry = feed.entry[i];
         var title = entry.title.$t;
         var date = entry.published.$t
   
         for (var j = 0; j < entry.link.length; j++)
         {
            if (entry.link[j].rel == "alternate")
            {
               var url = entry.link[j].href;
               if (url && url.length > 0 && title && title.length > 0)
               {
                  var liE = document.createElement("li");
                  var a1E = document.createElement("a");
                  a1E.href = url;
                  a1E.textContent = title + " (" + date.substr(0,10) + ")";
                  liE.appendChild(a1E);
                  //elmt.appendChild(liE);
                  allResults.push(liE);
               }
               break;
            }
         }
      }
      if (feed.entry.length >= maxResults)
      {
         startIndex += maxResults;
         sendQuery12();
      } else {
         printArrayResults();
      }
   }
}
sendQuery12();
</script>
