---
layout: default
type: suma
title: Artigo
---

{% include html-suma.html %}

{% include js-suma.html %}

<script>
	getTitleParam();

  const data = apiSuma(
    "suma_tartigos?id_questao=eq."+ getParam("id"),
    "conteudo"
  );
</script>
