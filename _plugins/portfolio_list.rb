require 'liquid'

# Percent encoding for URI conforming to RFC 3986.
# Ref: http://tools.ietf.org/html/rfc3986#page-12
BASE_DIR = 'images/portfolio'
module PortfolioList
  def portfolio_image_list( name )
    list = Array.new
    dir = Dir.new( File.join(BASE_DIR, name) )
    dir.each do | d |
      list << "'/#{BASE_DIR}/#{name}/#{d}'" unless d =~ /^\./
    end
    list.sort.join( ',' )
  end
end

Liquid::Template.register_filter(PortfolioList)
