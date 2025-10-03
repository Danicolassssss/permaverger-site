import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
	{
		slug: "demarrer-un-verger",
		title: "Démarrer un verger en permaculture",
		description:
			"Étapes clés : analyse du site, design, choix des essences, implantation.",
	},
	{
		slug: "paillis-et-brf",
		title: "Paillis et BRF : nourrir le sol",
		description:
			"Comment installer et entretenir un couvert permanent efficace.",
	},
	{
		slug: "gestion-de-leau",
		title: "Gestion de l’eau au verger",
		description: "Swales, micro-barrages et implantation pour capter l’eau.",
	},
];

export default function BlogPage() {
	return (
		<main className="mx-auto max-w-6xl p-6">
			<div className="mb-8">
				<h1 className="text-3xl font-bold">Blog</h1>
				<p className="mt-3 text-muted-foreground">
					Articles et retours d’expérience autour des vergers en permaculture.
				</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{posts.map((p) => (
					<Card key={p.slug}>
						<CardHeader>
							<CardTitle>
								<Link
									href={`/blog/${p.slug}`}
									className="hover:text-green-700"
								>
									{p.title}
								</Link>
							</CardTitle>
							<CardDescription>{p.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<Link
								href={`/blog/${p.slug}`}
								className="text-sm font-medium text-green-700 hover:underline"
							>
								Lire →
							</Link>
						</CardContent>
					</Card>
				))}
			</div>
		</main>
	);
}
