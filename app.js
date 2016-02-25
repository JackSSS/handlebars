  // Structure how I want the data to dynamically be
  // placed by defining the keys in between {{}}
  var myInfo = "<p>My name is {{name}} and I live in {{city}}, {{state}}. Rodney Dangerfield was one of my favorite comedians.</p>";
 
  // Generate a JS function that will create the output
  var template = Handlebars.compile(myInfo);
 
  // template receives the key / value pairs and puts
  // them in place
  var data = template({name: "Jack", street: "123 Main St", city: "Seattle", state: "WA"});
 
  // Update the div with the completed output
  document.getElementById('jackData').innerHTML += data;

  var quoteInfo = document.getElementById("quote-template").innerHTML;
 
  var template = Handlebars.compile(quoteInfo);
 
  // 4b. You can create your own helper functions
  // This returns a link when text and url are passed in
  // escapeExpression() escapes the passed string so it is
  // safe to use in content. Helpers should use this method
  // when returning content to avoid code injection
  Handlebars.registerHelper("makeLink", function(text, url){
    text = Handlebars.Utils.escapeExpression(text);
    url = Handlebars.Utils.escapeExpression(url);
 
    var theLink = '<a href="' + url + '">' + text + '</a>';
 
    // SafeString prevents the string from being escaped
    return new Handlebars.SafeString(theLink);
  });
 
  // 5b. You can also pass options that can be used by all
  // helpers in the template
  Handlebars.registerHelper("sayNo", function(options){
    switch(options.data.lang){
      case "spanish":
        return "Me sale ningun respecto";
        break;
      case "french":
        return "Je recois aucun respect";
        break;
      default:
        return "I get no respect";
    }
  });
 
  // 2b. Passing the array data
  var quoteData = template({
    name: "Rodney Dangerfield",
    quotes: [
      {quote: "I remember the time I was kidnapped and they sent a piece of my finger to my father. He said he wanted more proof."},
      {quote: "When I was a kid my parents moved a lot, but I always found them."},
      {quote: "I could tell that my parents hated me. My bath toys were a toaster and a radio."},
      {quote: "My wife and I were happy for twenty years. Then we met."}
    ],
    // 3b. Passing tags to the triple stash
    rodneyBio: "<i>Rodney Dangerfield (formerly Jacob Cohen) was born on November 22, 1921, in Babylon, New York. He started performing stand-up comedy in his teens as 'Jack Roy', but finding that comedy didn't pay the bills, he spent the 1950s working as a salesman. Re-entering show business in the early 1960s as 'Rodney Dangerfield', he got a little more respect. He opened Dangerfield's comedy club in the 1970s and starred in a series of hit comedy films in the 1980s including Caddyshack. Dangerfield died in 2004.</i>"
  }
  // 5c. Say hello in passed language
  , {data: {
    lang: "french"
  }
  });
 
  document.getElementById('quoteData').innerHTML += quoteData;
