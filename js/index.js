const parallax = document.querySelector('.parallax');
const headerTitle = document.querySelector('.headerTitle');
const avatar = document.querySelector('.avatar');
const headerText = document.querySelector('.headerText');
const sectionAboutMe = document.querySelector('.aboutme');

window.addEventListener('scroll', function () {
  //Section bem vindo
  let scroolPosition = window.pageYOffset;
  parallax.style.transform = 'translateY('+scroolPosition*.7+'px)';

  //Section aboutme
  if ( scroolPosition < 690 && sectionAboutMe.offsetWidth > 750 ) {
    avatar.style.transform = 'translateY('+scroolPosition*-.1+'%)';
    headerText.style.transform = 'translateY('+scroolPosition*-.1+'%)';
    headerTitle.style.transform = 'translateY('+scroolPosition*.2+'%)';
  }

  //Section links

})