// <![CDATA[
jQuery(document).ready(function() {  
      jQuery("#video a.fb").each(function()
           { 
               jQuery(this).fancybox({
                 'titleShow'     : false,
                 'overlayOpacity': '0.8',
                 'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                 'type'          : 'swf',
                 'swf'          : {'wmode':'transparent','allowfullscreen':'true'}
               });  
           });

         jQuery("#view a").fancybox();
         jQuery(".thumb-grid a").fancybox();

    });
// ]]>