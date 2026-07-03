import { a as site, i as projects } from "./site-Ds5-h1oK.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property._id-aHyhErG8.js
var $$splitComponentImporter = () => import("./property._id-BZjhzKzD.mjs");
var Route = createFileRoute("/property/$id")({
	loader: ({ params }) => {
		const project = projects.find((p) => p.id === params.id);
		if (!project) throw notFound();
		return { project };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ loaderData }) => ({
		meta: [
			{ title: loaderData ? `${loaderData.project.name} — ${site.name}` : "Property" },
			{
				name: "description",
				content: loaderData?.project.description ?? "Luxury residence"
			},
			{
				property: "og:title",
				content: loaderData?.project.name ?? ""
			},
			{
				property: "og:image",
				content: loaderData?.project.image ?? ""
			}
		],
		links: [{
			rel: "canonical",
			href: loaderData ? `/property/${loaderData.project.id}` : "/"
		}]
	})
});
//#endregion
export { Route as t };
