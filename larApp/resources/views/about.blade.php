 <!-- Video Source -->
 <!-- https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880/ -->

 <head>





     <title>Responsive Menu</title>

     <meta name="viewport" content="width=device-width, initial-scale=1">

     <link rel="stylesheet" type="text/css" href="css/style.css">

     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

 </head>
 <body>
@include('navmenu')
<div>
    <h1>About Page</h1><p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum et eligendi expedita perspiciatis temporibus hic, sed deserunt consequatur reprehenderit saepe nesciunt amet, quisquam quidem doloribus! Facere doloremque hic corrupti fugit!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda deleniti accusantium perspiciatis corrupti ad quo illum similique eaque, amet ex molestias maiores officiis magnam sunt minima nam! Quia, praesentium qui!
    Lorem ipsum
</p></div>
  
<nav>

    <!-- <ul>

        <li><a href="#">Home 1</a></li>

        <li><a href="#">Home 2</a></li>

        <li><a href="#">Home 3</a></li>

        <li><a href="#">Home 4</a></li>

        <li><a href="#">Home 5</a></li>

    </ul> -->

</nav>

<script type="text/javascript">

$(function() {

    var pull = $('#mobile-menu');

    menu = $('nav ul');

    menuHeight = menu.height();

    $(pull).on('click', function(e) {

        e.preventDefault();

        menu.slideToggle();

    });

    $(window).resize(function() {

        var w = $(window).width();

        if (w > 320 && menu.is(':hidden')) {

            menu.removeAttr('style');

        }

    });

});

</script>

</body>