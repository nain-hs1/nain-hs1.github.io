/*! 

CUSTOM JAVASCRIPT CODE --- Himanshu Singh - PROJECT: FANTASY WORLD by Himanshu Singh
  _   _  _                                _            
 | | | |(_) _ __ ___    __ _  _ __   ___ | |__   _   _ 
 | |_| || || '_ ` _ \  / _` || '_ \ / __|| '_ \ | | | |
 |  _  || || | | | | || (_| || | | |\__ \| | | || |_| |
 |_| |_||_||_| |_| |_| \__,_||_| |_||___/|_| |_| \__,_|

 */

;( function( window ) {

	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function DotNav( el, options ) {
		this.nav = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	DotNav.prototype.options = {};

	DotNav.prototype._init = function() {

		var hop = this.nav.parentNode.className.indexOf( 'hsdotsnav-hop' ) !== -1;

		var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;

		dots.forEach( function( dot, idx ) {
			dot.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				if( idx !== current ) {
					dots[ current ].className = '';

					// special case
					if( hop && idx < current ) {
						dot.className += ' current-from-right';
					}

					setTimeout( function() {
						dot.className += ' current';
						current = idx;
						if( typeof self.options.callback === 'function' ) {
							self.options.callback( current );
						}
					}, 25 );						
				}
			} );
		} );
	}
	window.DotNav = DotNav;
    
    var Vb = a.hsNAV
      , Wb = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Wb),
        b && a.NAV === r && (a.hsNAV = Vb),
        r
    }
    ,
    b || (a.hsNAV = a.$ = r),
    r
});

(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByTagName('a');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    
    if(i >= 0 && i < a.length) {
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      });
    }
  });
})();
console.clear();
