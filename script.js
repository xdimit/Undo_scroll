'use strict'

/*---------------mouse whell----------------*/

// document.body.onmousewheel = function (e) {
//     this.style.overflow = 'hidden';
// };

/*___________________________________________*/

/*--------------key and cod -----------------*/

/*-----этот можно отменить на клавишах ------*/

// document.documentElement.addEventListener( 'keydown', cancelScrollKeys);

// function cancelScrollKeys(e) {

// 	if (e.code == 'Space' ||
// 		e.key == 'Home' ||
// 		e.key == 'End' ||
// 		e.key == 'ArrowUp' ||
// 		 e.key == 'ArrowDown' ||
// 		 e.key == 'PageUp' ||
// 		 e.key == 'PageDown' ) {

//         e.preventDefault();
//     }
// };

/*_____________________________________________*/


/*------------самый надежный метод -----------*/
document.body.style.overflow = 'hidden';
/*____________________________________________*/