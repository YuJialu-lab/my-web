/*mouse over pallax*/

/*

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.04}% ${50 - (_mouseY - _h) * 0.04}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();


*/




/*  Animated Progress Bars  */
jQuery(document).ready(function () {
    jQuery('.skills li').each(function () {
        jQuery(this).appear(function() {
          jQuery(this).animate({opacity:1,left:"0px"},800);
          var b = jQuery(this).find(".progress-bar").attr("data-width");
          jQuery(this).find(".progress-bar").animate({
            width: b + "%"
          }, 1300, "linear");
        }); 
    });   

});


jQuery(document).ready(function(){
  jQuery('.skillbar').each(function(){
    jQuery(this).appear(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width:jQuery(this).attr('data-percent')
      },1000);
    });
  });
});

/* jQuery.appear */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);



/* Text Effect*/
class Loop {
  constructor() {
    this._idRAF = -1;
    this._count = 0;
    this._listeners = [];
    this._binds = {};
    this._binds.update = this._update.bind(this);
  }
  _update() {
    let listener = null;
    let i = this._count;
    while (--i >= 0) {
      listener = this._listeners[i];
      if (listener) {
        listener.apply(this, null);
      }
    }
    this._idRAF = requestAnimationFrame(this._binds.update);
  }
  start() { this._update(); }
  stop() {
    cancelAnimationFrame(this._idRAF);
  }
  add(listener) {
    const idx = this._listeners.indexOf(listener);
    if (idx >= 0) {
      return;
    }
    this._listeners.push(listener);
    this._count++;
  }
  remove(listener) {
    const idx = this._listeners.indexOf(listener);
    if (idx < 0) {
      return;
    }
    this._listeners.splice(idx, 1);
    this._count--;
  }
}
const loop = new Loop();
loop.start()




/* text effect*/
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);



/*navigation*/

window.onload = function (e) {


    /* Sticky Go Back */

    var goBack = document.querySelector('.go-back'),
        workDetail = document.querySelector('.work-detail');

    window.addEventListener('scroll', fixedGoBack);

    function fixedGoBack() {
        var body = document.querySelector('body');

        window.addEventListener('scroll', fixedGoBack)
        if (window.pageYOffset >= 190) {

            goBack ? goBack.classList.add('fixed') : "";

        } else {
            goBack ? goBack.classList.add('not-fixed') : "";

            setTimeout(() => {
                goBack ? goBack.classList.remove('fixed') : "";
                goBack ? goBack.classList.remove('not-fixed') : "";
            }, 200);
        }


        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            goBack ? goBack.classList.remove('fixed') : "";
            window.removeEventListener('scroll', fixedGoBack)
        } else {
            window.addEventListener('scroll', fixedGoBack)
        }
    }

    if (workDetail) {
        fixedGoBack();
    }


    /* Open Menu bar */

    var iconMenu = document.querySelector('.iconmenu'),
        iconOpen = document.querySelector('.iconopen'),
        navBar = document.querySelector('.nav');

    iconMenu.addEventListener('click', openNav);

    function openNav() {

        if (iconOpen.classList.contains('close')) {
            iconOpen.classList.remove('close');
        } else {
            iconOpen.classList.add('close');
        }

        if (navBar.classList.contains('navshow')) {
            navBar.classList.remove('navshow');
        } else {
            navBar.classList.add('navshow');
        }


    };
    /* end Open Menu bar */


    /* Back to top */
    var toTop = document.getElementById("scrollme");

    toTop.addEventListener("click", function () {
        scrollToTop(600);
    });

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                } else clearInterval(scrollInterval);
            }, 15);
    }
    /* end Back to top */


    ///////// Animate Modules //////////
    var module = document.querySelectorAll('.section'),
        workImg = document.querySelectorAll('.work'),
        timelineItem = document.querySelectorAll('.timeline-item');


    const anime = (element, animation) => {
        if (element.offsetParent != null) {
            element.classList.add(animation)
        }
    }

    const isInViewport = (element) => {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.bottom >= 0 &&
            bounding.right >= 0 &&
            bounding.top <= document.documentElement.clientHeight &&
            bounding.left <= document.documentElement.clientWidth
        )
    };
    const isModuleVisbibleAnimation = (element, animation) => {
        if (isInViewport(element)) {
            if (window.innerWidth >= 800) {
                anime(element, animation);
            }
        }
    };
    // for viewport
    const animeContainers = (container, animation) => {

        container.forEach(item => {
            isModuleVisbibleAnimation(item, animation);
            if (item.children) {
                [...item.children].forEach(element => {
                    isModuleVisbibleAnimation(element, animation);
                })
            }
        })
    }

    // for scroll
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 800) {
            animeContainers(module, "anime");
            animeContainers(workImg, "animeWork");
            animeContainers(timelineItem, "animeTimeline");
        }
    })
    // to load the animations
    animeContainers(module, "anime");
    animeContainers(workImg, "animeWork");
    animeContainers(timelineItem, "animeTimeline");

    //open Modal

    const btnVideo = document.querySelector('.btnVideo'),
        modalVideo = document.querySelector('.modal'),
        iconCloseVideo = document.querySelector('.modal__icon'),
        body = document.querySelector('body');

    btnVideo.addEventListener("click", openVideo);

    iconCloseVideo.addEventListener("click", closeVideo);


    function openVideo() {
        setTimeout(() => {
            modalVideo.classList.add('open');

        }, 300);

        body.style.overflow = "hidden";
    }

    function closeVideo() {
        modalVideo.classList.remove('open');
        body.style.overflow = "visible";
    };
    document.querySelector('.modal').style.height = window.innerHeight + "px";


};

/*navigation*/