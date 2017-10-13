module ApplicationHelper
	def submenu(menu)
		submenu = Refinery::Page.by_slug(menu).first
		if submenu
			submenu.children
		end
	end
	def link(gallery)
		title = gallery.title
		"/teachers/" + title.mb_chars.gsub(' ', '-').downcase
	end
	private
	def youtube
		Yt.configuration.api_key = "AIzaSyBr0MGXduK1ajNRAxrGGdc2nMIscGq2yY0"
		Yt::Channel.new id: 'UCzXID9F2yvtdOE-CgrSXAgA'
	end
	def iframe(video)
		video.embed_html.gsub!("src=\"//","src=\"http\://").html_safe
	end
end
