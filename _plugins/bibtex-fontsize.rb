# BibTeX filter for jekyll-scholar: LaTeX font-size switches in bibliography fields.
#
# The bibliography is shared with the LaTeX CV, where notes use e.g.
#   {\small 25\% acceptance rate}
# This filter turns such groups into <small>…</small> and drops any remaining
# bare size command, so they do not appear as raw LaTeX on the site.
# Enable it with `fontsize` in `scholar.bibtex_filters` (before `latex`).
require 'jekyll/scholar'

module Jekyll
  class Scholar
    class Fontsize < BibTeX::Filter
      SMALLER = 'tiny|scriptsize|footnotesize|small'.freeze
      OTHER = 'normalsize|large|Large|LARGE|huge|Huge'.freeze

      def apply(value)
        value.to_s
             .gsub(/\{\\(?:#{SMALLER})\b\s*([^{}]*)\}/) { "<small>#{Regexp.last_match(1)}</small>" }
             .gsub(/\\(?:#{SMALLER}|#{OTHER})\b\s*/, '')
      end
    end
  end
end
