import React from "react";
import ReactPlayer from "react-player";

const YoutubePlayer = ({ url }: any) => {
	return (
		<div className="h-[500px] w-full">
			<ReactPlayer
				width={"100%"}
				height={"100%"}
				config={{
					youtube: {
						playerVars: {
							autoplay: 1,
							controls: 0,
							showinfo: 0,
							loop: 1,
							mute: 1,
						},
					},
				}}
				muted={true}
				url={url}
			/>
		</div>
	);
};

export default YoutubePlayer;
