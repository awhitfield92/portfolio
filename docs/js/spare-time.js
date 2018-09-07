jQuery(document).ready(function( $ ) {

  // Full Page Scroll
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3'],
    navigation: {
          'textColor': '#f2f2f2',
          'bulletsColor': '#ccc',
          'position': 'right',
          'tooltips': ['2D', '3D', 'Handcraft', 'Page 4']
      }
  });

});
