Portfolio files for a Jekyll site
---------------------------------

Includes javascript and plugin for generating galleries with Jekyll.

Requires: [JQuery HashChange](http://benalman.com/projects/jquery-hashchange-plugin/)

For example usage check out the portfolio/example.html gallery.

    ---
    layout: default
    title: Example Gallery
    ---
    
    <script type="text/javascript">
    var current_image_viewed = 0;
    var portfolio_images = new Array();
    // Call the plugin and get the diretory listing for javascript
    var images_array = [ {{ 'directory_with_images' | portfolio_image_list }} ];
    
    // Some lovely javascript to generate content on the page
    {% include portfolio_magic.js %}
    </script>
    
    <!-- The actual html portfolio content -->
    {% include portfolio_content.html %}
