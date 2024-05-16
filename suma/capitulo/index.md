---
layout: default
type: suma
title: Capitulo
---

{% include html-suma.html %}

{% include js-suma.html %}

<script>
	getTitleParam();

  const data = apiSuma(
    "suma_tcapitulo?id_parte=eq."+ getParam("id"),
    "questao",
  );
</script>
