webpackJsonp([0x8e9c20880b6a],{342:function(n,s){n.exports={data:{markdownRemark:{html:'<h1>Pattern</h1>\n<p>재사용성을 높이기 위한 패턴으로, 데이터를 관리하는 <code class="language-text">Container Components</code>와 렌더링을 담당하는 <code class="language-text">Prensentation Components</code>로 분리하여 개발하는 패턴입니다. 매우 단순하지만, 유용한 패턴이라는군요.</p>\n<!-- more -->\n<h2>Presentational Components</h2>\n<blockquote>\n<p>Container Components 로 부터 전달받은 데이터를 바탕으로 렌더링을 수행합니다.</p>\n</blockquote>\n<p>TodoList.jsx</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function-variable function">TodoList</span> <span class="token operator">=</span> props <span class="token operator">=></span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>lists<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>list <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>list<span class="token punctuation">.</span>title<span class="token punctuation">}</span> <span class="token operator">-</span> <span class="token punctuation">{</span>list<span class="token punctuation">.</span>isComplete<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">Presentational Component</code>는 Container로 부터 전달받은 props 를 바탕으로 렌더링만을 담당합니다.</p>\n<h2>Container Components</h2>\n<blockquote>\n<p>Container Components는 데이터를 가져와서(fetching) 해당 하위 구성요소를 렌더링합니다.</p>\n</blockquote>\n<p>Todo.jsx</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token keyword">import</span> TodoList <span class="token keyword">from</span> <span class="token string">\'./TodoList\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    list<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'./api\'</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>json <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> list<span class="token punctuation">:</span> json<span class="token punctuation">.</span>list <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TodoList</span>\n        <span class="token attr-name">list</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><code class="language-text">Container Component</code>(이하 Container)는 데이터를 fetch 하여 state에 할당하고, Presentational Component에 전달합니다. Container Component를 포함할 수 있으며, 다수 Component를 포함할 수 있습니다.</p>\n<p>데이터와 렌더링 영역을 분리함으로써 component의 재사용성을 높이고, 보다 복잡하지 않게 구성이 가능합니다.</p>',frontmatter:{date:"April 10, 2018",path:"/2018-04-10-01",title:"Presentational & Container Component",featuredImage:{childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACKElEQVQoz53Qy2sTQRwH8OSUF9s8TLLZZzaPfWXzfocmTSJVqDdBqgdrtaGi4NGrR6/qxYP1ZKsWFA+pFUG0YsCLUP+hwH79bQxNVVDw8OE7M8x8ZxjX+Mvx9ODz8fSQ8nDyH+jcu8n36fjo2/TV+8nUtb19G9dvjXBpc4T1qzewvrFFRnNb/3T52ggXr2zg7r37ePPhK1wqG7WT6aDtDTE2wzC2z++3PV6f7fX5aByw/YGA7fuLAJ1xu912d7hq0wttl5hRIKVFaIaOYrkCw8ojq+lQdQOcICKe4MFyvxNOOHtC4QiG5y/gxcEnuOSUTIU89JwBK1+k0jLK1Soq1RqSSgoxNoE4ic2wM9E4icUp47MLmWAQg3NrPwslRYKocMjoKsxiGTqVGpS5UoXmJVo3kTUtpDUDGSOHNM05WUFclMES5zKGWTpVSC+UMwKS6RQEswTBqkIsNSkr4GkuFuoQ8zVIhRp4zQKX1sBndHCOVBZcMoXgmeiiUMkqSGkiVENDrlJHvt5EsdmhbCFfa8KqNlBstKEVKpBVHbySAeegIidF1USY5Rd/yAosEmIUkiJDNwyYpkl/mUfOsqCqKnhBgChJ4HmeCAhHIliiPwuGQjOhcBgejwfdwSpeOoVOc6vbR7s3RLs7WOgNaH2A5vLKXB+t5f5svUN7T6ycRaPTw+bNO/TCj3A9fvYaD57skr15nraHhzu/+nPPLh7tPMfT/TH23x7hB+xTk2yJyB9PAAAAAElFTkSuQmCC",aspectRatio:1.8699186991869918,src:"/static/cover-e457ca5bc06f694197070ab58be95d48-7a72d.png",srcSet:"/static/cover-e457ca5bc06f694197070ab58be95d48-8baea.png 158w,\n/static/cover-e457ca5bc06f694197070ab58be95d48-69705.png 315w,\n/static/cover-e457ca5bc06f694197070ab58be95d48-7a72d.png 630w,\n/static/cover-e457ca5bc06f694197070ab58be95d48-514af.png 945w,\n/static/cover-e457ca5bc06f694197070ab58be95d48-6eb3d.png 1260w,\n/static/cover-e457ca5bc06f694197070ab58be95d48-ab8b3.png 1380w",sizes:"(max-width: 630px) 100vw, 630px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---2018-04-10-01-2abfbb0b876aa3426164.js.map