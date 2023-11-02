import { writable } from 'svelte/store'

const defineIsPlaying = () => {
	const { subscribe, set } = writable(false)
	const pause = () => {
		set(false)
	}
	const play = () => {
		set(true)
	}
	return { pause, play, subscribe }
}

const _isPlaying = defineIsPlaying()

const defineAudioTime = () => {
	const { subscribe, set, update } = writable({ currentTime: 0, duration: 0 })
	/**
	 * @param {number} duration
	 */
	const load = (duration) => {
		set({
			currentTime: 0,
			duration
		})
	}

	/**
	 * @param {number} currentTime
	 */
	const updateCurrentTime = (currentTime) => {
		update((v) => ({ currentTime, duration: v.duration }))
	}

	return { subscribe, load, updateCurrentTime }
}

const _audioTime = defineAudioTime()

const defineAudioStore = () => {
	/**@type {import("svelte/store").Writable<HTMLAudioElement|undefined>} */
	const { update, subscribe, set } = writable(undefined)
	/**
	 * @param {string} src
	 */
	const loadAudio = (src) => {
		const audio = new Audio(src)
		audio.addEventListener('canplay', () => {
			update((prev) => {
				prev?.pause()
				return audio
			})
			_audioTime.load(audio.duration)
			audio.play()
		})
		audio.addEventListener('pause', () => {
			_isPlaying.pause()
		})
		audio.addEventListener('play', () => _isPlaying.play())

		audio.addEventListener('timeupdate', () => {
			_audioTime.updateCurrentTime(audio.currentTime)
		})
	}

	return { loadAudio, subscribe, set }
}

export const audioStore = defineAudioStore()

export const isPlaying = { subscribe: _isPlaying.subscribe }

export const audioTime = { subscribe: _audioTime.subscribe }
