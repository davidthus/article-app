<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ article } = data);
</script>

<form action="?/updateArticle" method="POST">
	<h3>Editing: {article.title}</h3>
	<label for="title">
		Title
		<input type="text" id="title" name="title" value={article.title} />
	</label>
	<label for="title">
		Content
		<textarea id="content" name="content" rows={5} value={article.content} />
	</label>
	<button type="submit">Update Article</button>
</form>
