/** 
 * Scrolling to top before unloading page
*/
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  $(document).ready(function(){
    let initTable = {}, menuClicked = false;
    let targetScroll, timer;
    let menuItems = $(".menu a:not(#navicon)");
    let hashItems = menuItems.map(function(){
      return $(this).attr("href");
    });
  
  

    let portfolioTable = {
      curRow : 2,
      curCol : 3
    }
    let portfolioTemplate = $('#portfolio-item-template').html();
    const portfolioItems = [
      {
        "link-view": "https://github.com/trangthupham02051998/Grade-Student.git",
        "alt-image": "portfolio image",
        "path-image": "./Assets/image1.png",
        "title": "Project Grade Student",
        "tags" : ["Java"]
      },
      {
        "link-view": "https://github.com/trangthupham02051998/Human-Resources.git",
        "alt-image": "portfolio image",
        "path-image": "./Assets/Screenshot-286-1.png",
        "title": "Project Human Resources",
        "tags" : ["Java"]
      },
      
    ];
  
    // Handle clicking toggle menu icon
    $("#navicon").click(function(){
      $("#mynav").toggleClass("responsive");
    });
  
    // Open link all links in a new tab, except links with '#' in the beginning
    $("a:not([href^='#'])").attr("target", "_blank");
  
    // Handle clicking navigation menu item except toggle menu icon
    $(".menu a:not(#navicon)").click(function(){
      menuClicked = true;
      activateMenu(this);
      $("#mynav").removeClass("responsive");
    });
  
    // Activate clicked menu item
    function activateMenu(menuItem) {
      $(menuItem).parent().children().removeClass("active");
      $(menuItem).addClass("active");
    }
  
    // Smooth scrolling
    $("a[href*='#']:not([href='#'])").click(function () {
      targetScroll = $(this).attr("href");
      $('html,body').stop().animate({
        scrollTop: $(targetScroll).offset().top - 32 // First element's marginTop = 32px
      }, 1000);
      event.preventDefault();
    });
  
    // Handle Scroll Windows
    // Update menu while scrolling
    $(window).scroll(function() {
      if (timer) {
        window.clearTimeout(timer);
      }
      timer = window.setTimeout(handleScrollEvent, 100);
    });
  
    // Function handles Scrolling Event
    function handleScrollEvent() {
      if (!menuClicked) {
        for(let i = 0; i < hashItems.length; i++) {
          let item = $(hashItems[i]);
          if (isInViewPort(item)) {
            if (!item.hasClass("active")) {
              // Scale at first time
              initSection(hashItems[i], 0);
              activateMenu($('.menu a[href="' + hashItems[i] + '"]'));
            }
            break;
          } 
        }
      } else {
        initSection(targetScroll, 0);
        menuClicked = false;
      }
    }
  
    // Check whether element is in viewport
    function isInViewPort(element){
      let elementTop = $(element).offset().top;
      let elementBottom = elementTop + $(element).outerHeight();
      let viewPortTop = $(window).scrollTop();
      let viewPortBottom = viewPortTop + $(window).height();
      return elementBottom > viewPortTop + $("#mynav").height() + 10 && elementTop < viewPortBottom;
    }
  
    // Init section 
    function initSection(section, time) {
      if(initTable[section] == undefined) {
        if(section == '#about') {
          setTimeout(function(){ 
            $("#about-me").addClass("to-primary-color");
          }, time);
        } 
        else if(section == '#skills') {
          let timeout = time;
          for(let key in skillset) {
            setTimeout(function(){
              $(".progress-bar." + key).css("width", skillset[key]);
            }, timeout);
            timeout += 50;  
          }
        } 
        initTable[section] = 1;
      }
    }
  
    function nextPortfolioItem() {
      if(portfolioTable.curCol == 3) {
        portfolioTable.curCol = 1;
        portfolioTable.curRow++;
      } else {
        portfolioTable.curCol++;
      }
    }
  
    // Handle "See more" click
    $("#see-more").click(function(){
      if (portfolioItems.length > 0) {
        while(true) {
          nextPortfolioItem();
  
          // Render item
          let curItemId = "col-" + portfolioTable.curRow + portfolioTable.curCol;
          portfolioItems[0]["col-id"] = curItemId;
          Mustache.parse(portfolioTemplate);
          let rendered = Mustache.render(portfolioTemplate, portfolioItems[0]);
  
          if(portfolioTable.curCol == 1) {
            $('<div class="gr-row" id="row-' + portfolioTable.curRow +'"></div>').insertAfter('#row-' + (portfolioTable.curRow - 1));
          }
          $('#row-' + portfolioTable.curRow).append(rendered);
  
          // Render tags
          let tags = portfolioItems[0].tags;
          for(let i = 0; i < tags.length; i++) {
            $('#' + curItemId).append('<span class="portfolio-tag">' + tags[i] + '</span>');
          }
  
          portfolioItems.shift();
          if(portfolioItems.length == 0) {
            $("#see-more-wrapper").css("display", "none");
            break;
          } 
          else if (portfolioTable.curCol == 3) break;
        }
      }
    });
  });
// Skills
jQuery(document).ready(function(){
  
  jQuery('.progress-bar').each(function() {
    jQuery(this).find('.progress-content').animate({
      width:jQuery(this).attr('data-percentage')
    },2000);
    
    jQuery(this).find('.progress-number-mark').animate(
      {left:jQuery(this).attr('data-percentage')},
      {
       duration: 2000,
       step: function(now, fx) {
         var data = Math.round(now);
         jQuery(this).find('.percent').html(data + '%');
       }
    });  
  });
});
function demoFromHTML() {
  var pdf = new jsPDF('p', 'pt', 'letter');
  // source can be HTML-formatted string, or a reference
  // to an actual DOM element from which the text will be scraped.
  source = $('#content')[0];

  // we support special element handlers. Register them with jQuery-style 
  // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
  // There is no support for any other type of selectors 
  // (class, of compound) at this time.
  specialElementHandlers = {
      // element with id of "bypass" - jQuery style selector
      '#bypassme': function(element, renderer) {
          // true = "handled elsewhere, bypass text extraction"
          return true
      }
  };
  margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
  };
  // all coords and widths are in jsPDF instance's declared units
  // 'inches' in this case
  pdf.fromHTML(
      source, // HTML string or DOM elem ref.
      margins.left, // x coord
      margins.top, { // y coord
          'width': margins.width, // max width of content on PDF
          'elementHandlers': specialElementHandlers
      },

      function(dispose) {
          // dispose: object with X, Y of the last line add to the PDF 
          //          this allow the insertion of new lines after html
          pdf.save('Test.pdf');
      }, margins
  );
}