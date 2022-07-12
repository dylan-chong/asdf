import{_ as c,r as o,o as t,c as i,a as s,b as a,w as r,d as l,e as n}from"./app.1489567e.js";const d={},F=l(`<h1 id="\u6587\u6863-\u7F51\u7AD9" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863-\u7F51\u7AD9" aria-hidden="true">#</a> \u6587\u6863 &amp; \u7F51\u7AD9</h1><p>\u6587\u6863 &amp; \u7F51\u7AD9\u8D21\u732E\u6307\u5357\u3002</p><h2 id="\u521D\u59CB\u5316\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u8BBE\u7F6E" aria-hidden="true">#</a> \u521D\u59CB\u5316\u8BBE\u7F6E</h2><p>\u5728 Github \u4E0A fork <code>asdf</code> \u5E76\u4E14/\u6216\u8005\u4F7F\u7528 Git \u514B\u9686\u9ED8\u8BA4\u5206\u652F\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># \u514B\u9686\u4F60 fork \u7684 asdf</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/</span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;">GITHUB_USER</span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;">/asdf.git</span></span>
<span class="line"><span style="color:#88846F;"># \u6216\u8005\u76F4\u63A5\u514B\u9686 asdf</span></span>
<span class="line"><span style="color:#F8F8F2;">git clone https://github.com/asdf-vm/asdf.git</span></span>
<span class="line"></span></code></pre></div><p>\u6587\u6863\u7F51\u7AD9\u5F00\u53D1\u6240\u9700\u7684\u5DE5\u5177\u90FD\u5728\u6587\u4EF6 <code>docs/.tool-versions</code> \u4E2D\u4F7F\u7528 <code>asdf</code> \u8FDB\u884C\u7BA1\u7406\u3002\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6DFB\u52A0\u63D2\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u5DE5\u5177\u7248\u672C\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install</span></span>
<span class="line"></span></code></pre></div>`,9),u={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},h=n("Node.js"),v=n("\uFF1A\u57FA\u4E8E Chrome \u7684 V8 \u5F15\u64CE\u7684 JavaScript \u8FD0\u884C\u73AF\u5883\u3002"),y=l(`<p>\u6839\u636E <code>docs/package.json</code> \u6587\u4EF6\u5B89\u88C5 Node.js \u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm install</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1" aria-hidden="true">#</a> \u5F00\u53D1</h2>`,3),b={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},_=n("Vuepress (v2)"),m=n(" \u662F\u6211\u4EEC\u7528\u6765\u6784\u5EFA asdf \u6587\u6863\u7F51\u7AD9\u7684\u9759\u6001\u7AD9\u70B9\u751F\u6210\u5668\uFF08SSG\uFF09\u3002\u5B83\u88AB\u9009\u4E2D\u6765\u53D6\u4EE3 "),g={href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},f=n("Docsify.js"),q=n("\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5E0C\u671B\u5728\u7528\u6237\u6CA1\u6709\u53EF\u7528\u6216\u672A\u542F\u7528 JavaScript \u65F6\u652F\u6301\u4EC5\u4F9D\u9760 HTML\u3002Docsify \u65E0\u6CD5\u505A\u5230\u8FD9\u4E00\u70B9\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u4E24\u8005\u7279\u6027\u96C6\u5408\u5927\u81F4\u76F8\u540C\uFF0C\u91CD\u70B9\u662F Vuepress \u53EF\u4EE5\u7528\u6700\u5C11\u7684\u914D\u7F6E\u7F16\u5199 Markdown \u6587\u4EF6\u3002"),k=l(`<p><code>package.json</code> \u5305\u542B\u4E86\u5F00\u53D1\u6240\u9700\u7684\u811A\u672C\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;scripts&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;dev&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;vuepress dev .&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;build&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;vuepress build .&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;format&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;npx -y prettier --write &#39;{.vuepress/{config,navbar,sidebar}.js,./**/*.md}&#39;&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  },</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#66D9EF;font-style:italic;">&quot;devDependencies&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;@vuepress/plugin-active-header-links&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.48&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;@vuepress/plugin-search&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.48&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;@vuepress/plugin-shiki&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.48&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    </span><span style="color:#66D9EF;font-style:italic;">&quot;vuepress&quot;</span><span style="color:#F8F8F2;">: </span><span style="color:#CFCFC2;">&quot;^2.0.0-beta.48&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run dev</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u63D0\u4EA4\u4E4B\u524D\u683C\u5F0F\u5316\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">npm run format</span></span>
<span class="line"></span></code></pre></div><h2 id="\u62C9\u53D6\u8BF7\u6C42\u3001\u53D1\u5E03\u4EE5\u53CA\u7EA6\u5B9A\u5F0F\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u8BF7\u6C42\u3001\u53D1\u5E03\u4EE5\u53CA\u7EA6\u5B9A\u5F0F\u63D0\u4EA4" aria-hidden="true">#</a> \u62C9\u53D6\u8BF7\u6C42\u3001\u53D1\u5E03\u4EE5\u53CA\u7EA6\u5B9A\u5F0F\u63D0\u4EA4</h2>`,7),E=s("code",null,"asdf",-1),C=n(" \u6B63\u5728\u4F7F\u7528\u4F9D\u8D56 PR \u6807\u9898\u4E2D\u7684\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u7684\u81EA\u52A8\u5316\u53D1\u5E03\u6D41\u6C34\u7EBF\u3002\u5177\u4F53\u7684\u6587\u6863\u53EF\u4EE5\u67E5\u770B "),x=n("\u6838\u5FC3\u8D21\u732E\u6307\u5357"),D=n("."),j=s("p",null,[n("\u5F53\u4E3A\u6587\u6863\u66F4\u6539\u521B\u5EFA PR \u8BF7\u6C42\u65F6\uFF0C\u8BF7\u786E\u4FDD PR \u6807\u9898\u4F7F\u7528\u4E86\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u7C7B\u578B "),s("code",null,"docs"),n(" \u4EE5\u53CA "),s("code",null,"docs: <description>"),n(" \u7684\u683C\u5F0F\u3002")],-1),B=s("h2",{id:"vuepress",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),n(" Vuepress")],-1),R=s("p",null,"\u7F51\u7AD9\u7684\u914D\u7F6E\u5305\u542B\u5728\u51E0\u4E2A JavaScript \u6587\u4EF6\u4E2D\uFF0C\u5176\u4E2D JS \u5BF9\u8C61\u7528\u4E8E\u8868\u793A\u914D\u7F6E\u3002\u5B83\u4EEC\u662F\uFF1A",-1),A=s("code",null,"docs/.vuepress/config.js",-1),V=n("\uFF1A\u7F51\u7AD9\u7684\u6839\u914D\u7F6E\u6587\u4EF6\u3002\u8BF7\u67E5\u770B "),S={href:"https://v2.vuepress.vuejs.org/zh/guide/configuration.html",target:"_blank",rel:"noopener noreferrer"},z=n("Vuepress \u6587\u6863"),L=n(" \u4E86\u89E3\u66F4\u591A\u8BE6\u60C5\u3002"),N=s("p",null,[n("\u4E3A\u4E86\u7B80\u5316\u6839\u914D\u7F6E\u6587\u4EF6\uFF0C\u66F4\u5927\u7684 JS \u5BF9\u8C61\u8868\u793A "),s("em",null,"\u5BFC\u822A\u680F\u548C\u4FA7\u8FB9\u680F"),n(" \u914D\u7F6E\u5DF2\u7ECF\u88AB\u63D0\u53D6\u5E76\u6309\u7167\u8BED\u8A00\u7C7B\u578B\u5206\u9694\u5F00\u6765\u3002\u8BF7\u53C2\u8003\u4EE5\u4E0B\u6587\u4EF6\uFF1A")],-1),w=s("ul",null,[s("li",null,[s("code",null,"docs/.vuepress/navbar.js")]),s("li",null,[s("code",null,"docs/.vuepress/sidebar.js")])],-1),M=n("\u8FD9\u4E9B\u914D\u7F6E\u7684\u5B98\u65B9\u6587\u6863\u4F4D\u4E8E "),J={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html",target:"_blank",rel:"noopener noreferrer"},G=n("\u9ED8\u8BA4\u4E3B\u9898\u53C2\u8003"),I=n("\u3002"),P=l(`<h2 id="i18n-\u56FD\u9645\u5316" tabindex="-1"><a class="header-anchor" href="#i18n-\u56FD\u9645\u5316" aria-hidden="true">#</a> I18n \u56FD\u9645\u5316</h2><p>Vuepress \u6709\u4E00\u6D41\u7684\u56FD\u9645\u5316\u652F\u6301\u3002\u6839\u914D\u7F6E\u6587\u4EF6 <code>docs/.vuepress/config.js</code> \u5B9A\u4E49\u4E86\u652F\u6301\u7684\u8BED\u8A00\u7C7B\u578B\u53CA\u5176 URL\u3001\u5728\u9009\u62E9\u4E0B\u62C9\u83DC\u5355\u4E2D\u7684\u6807\u9898\u4EE5\u53CA\u5BFC\u822A\u680F/\u4FA7\u8FB9\u680F\u914D\u7F6E\u5F15\u7528\u3002</p><p>\u5BFC\u822A\u680F/\u4FA7\u8FB9\u680F\u914D\u7F6E\u5728\u4E0A\u8FF0\u914D\u7F6E\u6587\u4EF6\u4E2D\u6355\u83B7\uFF0C\u6309\u8BED\u8A00\u7C7B\u578B\u5206\u9694\u5F00\u5E76\u5355\u72EC\u5BFC\u51FA\u3002</p><p>\u6BCF\u79CD\u8BED\u8A00\u7684 markdown \u5185\u5BB9\u5FC5\u987B\u4F4D\u4E8E\u4E0E\u6839\u914D\u7F6E\u6587\u4EF6\u4E2D <code>locale</code> \u952E\u540C\u540D\u7684\u76EE\u5F55\u4F4D\u7F6E\u3002\u4E5F\u5C31\u662F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">{</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span><span style="color:#F92672;">...</span></span>
<span class="line"><span style="color:#F8F8F2;">  themeConfig: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    locales: {</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;English (US)&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.en,</span></span>
<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.en</span></span>
<span class="line"><span style="color:#F8F8F2;">      },</span></span>
<span class="line"><span style="color:#F8F8F2;">      </span><span style="color:#E6DB74;">&quot;/pt-BR/&quot;</span><span style="color:#F8F8F2;">: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        selectLanguageName: </span><span style="color:#E6DB74;">&quot;Brazilian Portuguese&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        sidebar: sidebar.pt_br,</span></span>
<span class="line"><span style="color:#F8F8F2;">        navbar: navbar.pt_br</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">  }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/pt-BR/</code> \u5C06\u8981\u6C42 markdown \u6587\u4EF6\u7684\u540C\u4E00\u96C6\u5408\u4F4D\u4E8E <code>docs/pt-BR/</code> \u76EE\u5F55\u4E0B\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">docs</span></span>
<span class="line"><span style="color:#F8F8F2;">\u251C\u2500 README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">\u251C\u2500 foo.md</span></span>
<span class="line"><span style="color:#F8F8F2;">\u251C\u2500 nested</span></span>
<span class="line"><span style="color:#F8F8F2;">\u2502  \u2514\u2500 README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">\u2514\u2500 pt-BR</span></span>
<span class="line"><span style="color:#F8F8F2;">   \u251C\u2500 README.md</span></span>
<span class="line"><span style="color:#F8F8F2;">   \u251C\u2500 foo.md</span></span>
<span class="line"><span style="color:#F8F8F2;">   \u2514\u2500 nested</span></span>
<span class="line"><span style="color:#F8F8F2;">      \u2514\u2500 README.md</span></span>
<span class="line"></span></code></pre></div>`,7),U=n("\u8BF7\u67E5\u770B "),T={href:"https://v2.vuepress.vuejs.org/zh/guide/i18n.html#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},H=n("Vuepress i18n \u56FD\u9645\u5316\u5B98\u65B9\u6587\u6863"),K=n(" \u4E86\u89E3\u66F4\u591A\u8BE6\u60C5\u3002");function O(Q,W){const e=o("ExternalLinkIcon"),p=o("RouterLink");return t(),i("div",null,[F,s("ul",null,[s("li",null,[s("a",u,[h,a(e)]),v])]),y,s("p",null,[s("a",b,[_,a(e)]),m,s("a",g,[f,a(e)]),q]),k,s("p",null,[E,C,a(p,{to:"/zh-hans/contribute/core.html"},{default:r(()=>[x]),_:1}),D]),j,B,R,s("ul",null,[s("li",null,[A,V,s("a",S,[z,a(e)]),L])]),N,w,s("p",null,[M,s("a",J,[G,a(e)]),I]),P,s("p",null,[U,s("a",T,[H,a(e)]),K])])}var Y=c(d,[["render",O],["__file","documentation.html.vue"]]);export{Y as default};
