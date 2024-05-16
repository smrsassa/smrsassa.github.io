---
layout: default
type: suma
title: Conteudo
---

{% include html-suma.html %}

{% include js-suma.html %}

<script>
	getTitleParam();

  const data = apiSuma(
    "suma_tconteudo?id_artigo=eq."+ getParam("id"),
    false
  );
</script>
