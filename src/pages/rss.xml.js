import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'Ben Patton - Blog',
		description: 'Sharing my thoughts on software development and other topics',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./content/blog/*.{md,mdx}')),
		stylesheet: './rss/styles.xsl',
		customData: `<language>en-us</language>`
	});
}
