<!DOCTYPE html>
<html>

<head>
  <title> Responsive navbar</title>
  <link rel="stylesheet" href="responsive.css">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" type='text/css' href="{{asset('css/header.css')}}"/>

  <script src="http://code.jquery.com/jquery-3.2.1.js"></script>
 
</head>

<body>
  <nav class="nav">
    <h1>logo</h1>
    <a class="toggle-nav" href="/"><i class="fa fa-bars"></i></a>
    <div class="nav-mobile">
      <ul>
        <li><a href="/"> Home</a></li>

        <li><a href="/about"> About</a></li>
        <li><a href="/contact"> Contact</a></li>
        <li><a href="/service"> Service</a></li>
      </ul>
    </div>
  </nav>
  <script>
    $(document).ready(function() {
      $('.nav .toggle-nav').click(function(e) {
        $('.nav .nav-mobile').slideToggle(250);
        e.preventDefault();

      })

    })
  </script>
</body>

</html>