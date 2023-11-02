import { writable } from 'svelte/store'

const createAudioStore = () => {
	/**@type {import("svelte/store").Writable<HTMLAudioElement|undefined>} */
	const { subscribe, set } = writable()
	/**
	 * @param {string} src
	 */
	const setAudio = (src) => {
		const audio = new Audio(src)
		audio.addEventListener('canplay', () => {
			set(audio)
		})
	}

	return {
		subscribe,
		setAudio,
		set
	}
}

export const audioStore = createAudioStore()
