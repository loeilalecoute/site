<script>
	import Link from './Link.svelte'
	import Title from '$lib/components/Title.svelte'
	import FooterSpace from '$lib/components/FooterSpace.svelte'
</script>

<div class="container mx-auto px-4">
	<Title text="Ressources" />
	<div class="mt-8 items-start justify-center gap-8 space-y-16 px-4 lg:flex lg:space-y-0">
		<ul class="grow">
			<Link href="/ressources/fiche-1-prise-de-son.pdf">Fiche n°1 : Prise de son</Link>
			<Link href="/ressources/fiche-2-montage-et-mixage.pdf">Fiche n°2 : Montage et mixage</Link>
			<Link href="/ressources/fiche-3-jeux-sonores.pdf">Fiche n°3 : Jeux sonores</Link>
			<Link href="/ressources/fiche-4-micro-trottoir.pdf">Fiche n°4 : Micro-trottoir</Link>
			<Link href="/ressources/fiche-5-interview.pdf">Fiche n°5 : Interview</Link>
			<Link href="/ressources/fiche-6-lecture.pdf">Fiche n°6 : Lecture</Link>
			<Link href="/ressources/fiche-7-papier-chroniques.pdf">Fiche n°7 : Papiers et chroniques</Link
			>
			<Link href="/ressources/fiche-8-reportages.pdf">Fiche n°8 : Reportage</Link>
			<Link href="/ressources/fiche-9-carte-postale-sonore.pdf"
				>Fiche n°9 : Carte postale sonore</Link
			>
			<Link href="/ressources/fiche-10-fiction-sonore.pdf">Fiche n°10 : Fiction sonore</Link>
			<Link href="/ressources/fiche-liens-sur-la-radio-et-le-son.pdf"
				>Fiche liens sur la radio et le son</Link
			>
			<Link href="/ressources/fiche-liens.pdf">Fiche liens</Link>
			<Link href="/ressources/manuel-de-lintervenant.pdf">Manuel de l'intervenant</Link>
			<Link href="/ressources/presentation-mallette-pedagogique.pdf"
				>Présentation de la mallette pédagogique</Link
			>
		</ul>
		<div class="sticky top-16 basis-96 rounded border border-dashed bg-gray-800 px-4 py-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1.5em"
				height="1.5em"
				viewBox="0 0 32 32"
				class="float-left mr-1"
				><path
					fill="currentColor"
					d="M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"
				/><path
					fill="currentColor"
					d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
				/></svg
			>
			Ressources à télécharger en Licence Creative Commons conçues et rédigées par l'association. Conception
			graphique de la mallette pédagogique :
			<a
				href="https://lessoeurschevalme.ultra-book.com/"
				rel="external"
				class="font-bold transition-colors hover:text-yellow focus-visible:text-yellow"
				>les Soeurs Chevalme</a
			>
		</div>
	</div>
</div>
<FooterSpace />
