<script>
	import Link from './Link.svelte'
	import Title from '$lib/components/Title.svelte'
</script>

<div class="container mx-auto px-4">
	<Title text="Ressources" />
	<ul class="mt-8 px-4">
		<Link href="/ressources/fiche-1-prise-de-son.pdf">Fiche n°1 : Prise de son</Link>
		<Link href="/ressources/fiche-2-montage-et-mixage.pdf">Fiche n°2 : Montage et mixage</Link>
		<Link href="/ressources/fiche-3-jeux-sonores.pdf">Fiche n°3 : Jeux sonores</Link>
		<Link href="/ressources/fiche-4-micro-trottoir.pdf">Fiche n°4 : Micro-trottoir</Link>
		<Link href="/ressources/fiche-5-interview.pdf">Fiche n°5 : Interview</Link>
		<Link href="/ressources/fiche-6-lecture.pdf">Fiche n°6 : Lecture</Link>
		<Link href="/ressources/fiche-7-papier-chroniques.pdf">Fiche n°7 : Papiers et chroniques</Link>
		<Link href="/ressources/fiche-8-reportages.pdf">Fiche n°8 : Reportage</Link>
		<Link href="/ressources/fiche-9-carte-postale-sonore.pdf">Fiche n°9 : Carte postale sonore</Link
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
</div>
