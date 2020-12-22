---
layout: post
title: Stats
categories: [Webdesign]
tags: [HTML, Webdesign, código]
img: header_webdesign.jpg
description: "Página de estatística do site"
---
<style>
[v-cloak] {display: none}
body {
    line-height: 1.66667;
}
h1 { color: #ffffff; font-family: 'Lato', sans-serif; font-size: 54px; font-weight: 300; line-height: 58px; margin: 0 0 58px; }
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


a:hover { color: #ffffff }


.date { background: #fe921f; color: #ffffff; display: inline-block; font-family: 'Lato', sans-serif; font-size: 12px; font-weight: bold; line-height: 12px; letter-spacing: 1px; margin: 0 0 30px; padding: 10px 15px 8px; text-transform: uppercase; }	
</style>

{% raw %}
<div id="app" v-cloak="">
	<table>
		<tr>
			<td width="30%">Total Posts:</td>
			<td width="70%">{{totalPosts}}</td>
		</tr>
		<tr>
		<td>First Post:</td>
		<td>
		<a :href="firstPost.url">{{firstPost.title}}</a> published {{firstPost.age}} on {{firstPost.date}}
		</td>
		</tr>
		<tr>
		<td>Last Post:</td>
		<td>
		<a :href="lastPost.url">{{lastPost.title}}</a> published {{lastPost.age}} on {{lastPost.date}}
		</td>
		</tr>
		<tr>
		<td>Total Words Written:</td>
		<td>{{totalWords}}</td>
		</tr>
		<tr>
		<td>Average Words per Post:</td>
		<td>{{avgWords}}</td>
		</tr>
	</table>

    <h3>Posts Per Year</h3>
    <table>
        <tr>
            <td>Year</td>
            <td>Number of Posts</td>
        </tr>
        <tr v-for="year in sortedYears">
            <td>{{year}}</td>
            <td>{{years[year]}}</td>
        </tr>
    </table>

    <h3>Posts Per Category</h3>
    <table>
        <tr>
            <td>Category</td>
            <td>Number of Posts</td>
        </tr>
        <tr v-for="cat in sortedCats">
            <td>{{cat.name}}</td>
            <td>{{cat.size}}</td>
        </tr>
    </table>

    <h3>Posts Per Tag</h3>
    <table>
        <tr>
            <td>Tag</td>
            <td>Number of Posts</td>
        </tr>
        <tr v-for="tag in sortedTags">
            <td>{{tag.name}}</td>
            <td>{{tag.size}}</td>
        </tr>
    </table>

</div>
{% endraw %}

<script src="https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
new Vue({
	el:'#app',
	data:{
		totalPosts:0,
		firstPost:{
			title:"",
			date:"",
			url:""
		},
		lastPost:{
			title:"",
			date:"",
			url:""
		},
		totalWords:0,
		avgWords:0,
        years:{},
        cats:[], 
        tags:[]
	},
	created:function() {
		fetch('/stats.json')
		.then(res => res.json())
		.then(res => {
			console.log(res);
			this.totalPosts = res.totalPosts;
			
			this.firstPost = {
				title:res.firstPost.title,
				date:res.firstPost.published,
				url:res.firstPost.url,
				age:moment(res.firstPost.published).fromNow()
			};

			this.lastPost = {
				title:res.lastPost.title,
				date:res.lastPost.published,
				url:res.lastPost.url,
				age:moment(res.lastPost.published).fromNow()
			};

			this.totalWords = res.totalWords;
			this.avgWords = res.averageWordsPerPost;

            let dates = res.dates.split(',');
            // process res.dates on the client site
            dates.forEach(d => {
                let year = new Date(d).getFullYear();
                if(!this.years[year]) Vue.set(this.years,year,0);
                Vue.set(this.years,year, this.years[year]+1);
            });

            this.cats = res.postsPerCategory;
            this.tags = res.postsPerTag;

		}).catch(e => {
            console.error(e);
        });
	},
    computed:{
        sortedCats:function() {
            return this.cats.sort((a,b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            });
        },
        sortedTags:function() {
            return this.tags.sort((a,b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            });
        },
        sortedYears:function() {
            return Object.keys(this.years).sort();
        }
    }
});
</script>
