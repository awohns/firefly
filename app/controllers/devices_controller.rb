class DevicesController < ApplicationController

	def new
	end 

	def create
		@device = Device.new(device_params)

		@device.save
		redirect_to @device
	end

	private
		def device_params
			params.require(:device).permit(:usage, :serialnumber, :donationdate, :hospital)
		end

end
