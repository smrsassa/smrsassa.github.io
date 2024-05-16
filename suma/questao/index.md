---
layout: default
type: suma
title: Questão
---

{% include html-suma.html %}

{% include js-suma.html %}

<script>
	getTitleParam();

  const data = apiSuma(
    "suma_tquestao?id_capitulo=eq."+ getParam("id"),
    "artigo"
  );
</script>
