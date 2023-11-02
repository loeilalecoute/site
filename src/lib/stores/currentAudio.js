import { base } from '$app/paths'
import { writable } from 'svelte/store'

const defineAudioData = () => {
	/**@type {import('svelte/store').Writable<{src:string,title:string,date:string,emission?:string}>} */
	const { subscribe, set } = writable({
		src: '',
		title: '',
		date: '',
		emission: ''
	})
	return { subscribe, set }
}

const _audioData = defineAudioData()

const defineIsLoading = () => {
	const { subscribe, set } = writable(false)
	return { subscribe, set }
}

const _isLoading = defineIsLoading()

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
	 *
	 * @param {string} src
	 * @param {string} title
	 * @param {string} date
	 * @param {string} [emission]
	 */
	const loadAudio = (src, title, date, emission) => {
		const audio = new Audio(base + src)
		_isLoading.set(true)
		_audioData.set({ src, title, date, emission })
		audio.addEventListener('canplay', () => {
			update((prev) => {
				prev?.pause()
				return audio
			})
			_audioTime.load(audio.duration)
			audio.play()
			_isLoading.set(false)
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
export const isLoading = { subscribe: _isLoading.subscribe }
export const audioData = { subscribe: _audioData.subscribe }
