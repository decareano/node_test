module Debug
	def who_am_I?
		"#{self.class.name} (#{self.object_id}): #{self.to_s}"
	end
end

class Phonograph 
	include Debug
end

class EightTrack
	include Debug
end

ph = Phonograph.new("west end blues")
et = EightTrack.new("surreal pillow")

ph.who_am_I?
et.who_am_I?