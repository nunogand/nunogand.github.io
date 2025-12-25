---
layout: page
title: Números do site
categories: [Webdesign]
tags: [HTML, Webdesign, código]
img: header_webdesign.jpg
description: "Página de estatística do site"
---
<style>
body {
    line-height: 1.66667;
}
table {
    border-bottom: 1px solid #ededed;
    font-size: 16px;
    line-height: 1.5;
    margin: 0 0 24px;
    text-align: left;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
td, th {
    border-top: 1px solid #ededed;
    padding: 8px 10px;
}
p { color: #adb7bd; font-family: 'Lucida Sans', Arial, sans-serif; font-size: 16px; line-height: 26px; text-indent: 30px; margin: 0; }

a { color: #fe921f; text-decoration: underline; }

.date { background: #fe921f; color: #ffffff; display: inline-block; font-family: 'Lato', sans-serif; font-size: 12px; font-weight: bold; line-height: 12px; letter-spacing: 1px; margin: 0 0 30px; padding: 10px 15px 8px; text-transform: uppercase; }	
</style>

{% assign totalWords = 0 %}
{% assign dateOb = '' %}
{% for post in site.posts %}
 {% assign postWords = post.content | number_of_words %}
 {% assign totalWords = totalWords | plus:  postWords %}
 {% assign pd = post.date | date: "%Y-%m-%d" %}
  {% unless forloop.first %}
 {% assign dateOb = dateOb | append: "," %}
  {% endunless %}
 {% assign dateOb = dateOb | append: pd %}
{% endfor %}
{% assign avgWords = totalWords | divided_by: site.posts.size %}

<div id="stats"  >
	<table>
		<tr>
			<td width="30%">Número de Artigos:</td>
			<td width="70%">{{site.posts.size | number}}</td>
		</tr>
		<tr>
		<td>Primeiro artigo:</td>
		<td>
		    <a href="{{site.posts.last.url}}">{{site.posts.last.title}}</a> publicado em {{site.posts.last.date | date: "%Y-%m-%d"}}
		</td>
		</tr>
		<tr>
		<td>Artigo mais recente:</td>
		<td>
    		<a href="{{site.posts.first.url}}">{{site.posts.first.title}}</a> publicado em {{site.posts.first.date | date: "%Y-%m-%d"}}
		</td>
		</tr>
		<tr>
		<td>Número total de palavras:</td>
		<td>{{ totalWords | number }}</td>
		</tr>
		<tr>
		<td>Número médio de palavras por artigo:</td>
		<td>{{avgWords | number}}</td>
		</tr>
		<tr>
		<td>Número de categorias:</td>
		<td>{{ site.categories.size }}</td>
		</tr>
		<tr>
		<td>Número de tags:</td>
		<td>{{ site.tags.size }}</td>
		</tr>
	</table>
<br>
    <h3>Artigos por ano</h3>

{% assign counter = 0 %}
{% for post in site.posts %}
  {% assign thisyear = post.date | date: " %Y" %}
  {% assign prevyear = post.previous.date | date: " %Y" %}
  {% assign counter = counter | plus: 1 %}
  {% if thisyear != prevyear %}
    <li>{{ thisyear }} ({{ counter }})</li>
    {% assign counter = 0 %}
  {% endif %}
{% endfor %}

  
<br><p>
    <h3>Artigos por categoria</h3>


<ul class="c-tag__list">
    {% for category in site.categories %}
			{% assign cat = category[0] %}
			{% unless forloop.first %}{% endunless %}

<li><a href="" class="c-tag">{{ cat }} <span>({{site.categories[cat].size}})</span></a></li>

		{% endfor %}
    
</ul>
<br>
<p>

<h3>Artigos por <a href="/tags/index.html">Tags</a></h3>
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tag_words = site_tags | split:',' | sort %}
<ul class="c-tag__list">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tag_words[item] | strip_newlines }}{% endcapture %}
    <li><a href="/tags/index#{{ this_word | cgi_escape }}" class="c-tag">{{ this_word }} <span>({{ site.tags[this_word].size }})</span></a></li>
  {% endunless %}{% endfor %}
  </ul>
</div>

<p style="text-align:right">
Running <a href="https://jekyllrb.com">Jekyll</a> 4.3.3
</p>
