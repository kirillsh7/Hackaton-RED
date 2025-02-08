import { Module } from '../core/module'
import { random } from '../utils'
import { videos } from '../videos'
export class VideoPlayModule extends Module {
	trigger() {
		const video = document.createElement('video')
		video.width = 640
		video.height = 360
		video.controls = true
		video.style.display = 'none'

		function loadAndPlayRandomVideo() {
			const randomIndex = random(0, videos.length - 1)
			const randomVideo = videos[randomIndex]
			video.src = randomVideo
			video.load()
			video.style.display = 'block'
			video.play()
		}

		if (video.paused) {
			loadAndPlayRandomVideo()
		}

		document.body.appendChild(video)
	}
}
