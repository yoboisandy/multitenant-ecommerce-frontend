import React from "react";

const YoutubePlayer = ({ url }: any) => {
	return (
		<div className="h-[500px]">
			<iframe
				className="w-full h-full"
				title="Youtube Player"
				src={`${url}?autoplay=1&loop=1&controls=0&mute=1`}
			></iframe>
		</div>
	);
};

export default YoutubePlayer;
