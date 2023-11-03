import { base } from '$app/paths'
import { writable } from 'svelte/store'

const defineVolumeStore = () => {
	const { subscribe, update } = writable({
		current: 0.5,
		last: 0.5
	})

	/**
	 * @param {number} v
	 */
	const setVolume = (v) => {
		update(({ current, last }) => {
			if (current > 0) return { current: v, last: current }
			return { current: v, last }
		})
	}
	return { subscribe, setVolume }
}

const _volume = defineVolumeStore()

const defineAudioData = () => {
	/**@type {import('svelte/store').Writable<{src:string,title:string,date:string,infos?:string}>} */
	const { subscribe, set } = writable({
		src: '',
		title: '',
		date: '',
		infos: ''
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
	 * @param {string} [infos]
	 */
	const loadAudio = (src, title, date, infos) => {
		const audio = new Audio()
		console.log(audio)
		_isLoading.set(true)
		_audioData.set({ src, title, date, infos })

		audio.addEventListener('canplay', () => {
			let volume = 0.5
			update((prev) => {
				if (prev) {
					volume = prev.volume
					prev.pause()
				}
				return audio
			})
			_audioTime.load(audio.duration)
			audio.volume = volume
			audio.play()
			_isLoading.set(false)
		})
		audio.addEventListener('pause', _isPlaying.pause)
		audio.addEventListener('play', _isPlaying.play)
		audio.addEventListener('volumechange', () => {
			_volume.setVolume(audio.volume)
		})

		audio.addEventListener('timeupdate', () => {
			_audioTime.updateCurrentTime(audio.currentTime)
		})
		audio.src = base + src
		audio.load()
	}

	return { loadAudio, subscribe, set }
}

export const audioStore = defineAudioStore()

export const isPlaying = { subscribe: _isPlaying.subscribe }

export const audioTime = { subscribe: _audioTime.subscribe }
export const isLoading = { subscribe: _isLoading.subscribe }
export const audioData = { subscribe: _audioData.subscribe }
export const volume = { subscribe: _volume.subscribe }
