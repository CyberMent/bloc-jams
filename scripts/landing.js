           var revealPoint = function (p) {
               for (var i = 0; i < p.length; i++) {
                   p[i].style.opacity = 1;
                   p[i].style.transform = "scaleX(1) translateY(0)";
                   p[i].style.msTransform = "scaleX(1) translateY(0)";
                   p[i].style.WebkitTransform = "scaleX(1) translateY(0)";
               }
           };
           var thePoints = document.getElementsByClassName('point');