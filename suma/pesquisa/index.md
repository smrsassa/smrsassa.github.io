---
layout: default
type: suma
title: Conteudo
---
<h1 class="dynamic-title">Pesquisa</h1>

<div class="row">
  <div class="col-md-12">
    <form action="/suma/pesquisa" method="GET">
      <input 
        id="pesquisa" name="pesquisa" 
        class="form-control" type="text" 
        placeholder="Pesquise um artigo!"
        style="background: initial; border: 3px solid #4a4a4a; color: #cccccc;"
      >
    </form>
  </div>
</div>

<div class="flex-grow-1 px-xl-1">
	<div class="row" id="post-list">
	</div>
</div>

{% include js-suma.html %}

<script>
  const data = apiSuma(
    "suma_tartigos?titulo=ilike.%25"+ getParam("pesquisa") +"%25",
    "conteudo"
  );
</script>

