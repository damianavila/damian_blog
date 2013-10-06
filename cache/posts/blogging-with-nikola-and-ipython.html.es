
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>NOTE</strong>: Obviously, this post was written in the IPython notebook and was rendered by Nikola (helped by nbconvert).</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>INGREDIENTS</strong>:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li><a href="https://github.com/ralsina/nikola">Nikola</a></li>
</ul>
<p><strong>NOTE: The theme was tested with Nikola version <a href="https://github.com/ralsina/nikola/tags">5.1</a></strong></p>
<ul>
<li><a href="https://github.com/ipython/ipython">IPython</a></li>
<li><a href="https://github.com/damianavila/site-ipython-theme-for-Nikola.git">site-ipython</a> theme for Nikola</li>
<li><a href="https://github.com/damianavila/compile_ipynb-for-Nikola.git">compile_ipynb</a> for Nikola</li>
</ul>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<!-- TEASER_END -->

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>STEPS</strong>:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Install Nikola and IPython (probably you have IPython installed if you are reading this post).</li>
<li>Install the <a href="https://github.com/damianavila/site-ipython-theme-for-Nikola.git">site-ipython theme</a> in your Nikola instalation. You can see some the documentation about how to do it <a href="http://nikola.ralsina.com.ar/handbook.html">here</a>.</li>
</ul>
<p>NOTE: Another way to do it is copying the site-ipython theme inside the nikola/data/themes folder BEFORE installing Nikola.</p>
<p><strong>NOTE2: The recommended way to do it would be copying the site-ipython theme inside your_site after initialization of your_site. See below.</strong></p>
<ul>
<li>Initialize your_site:</li>
</ul>
<p><code>nikola init your_site</code></p>
<p>you can ask for</p>
<p><code>nikola --help</code></p>
<p>for other available options.</p>
<ul>
<li>Create a plugins folder inside your_site</li>
<li>Copy the compile_ipynb plugin (compile_ipynb.plugin file and the compile_ipynb folder, which are is located inside the extra-plugins folder in the Nikola master) in your_site/plugins/ folder.</li>
<li>Then, download the custom nbconvert and nbformat from <a href="https://github.com/damianavila/compile_ipynb-for-Nikola.git">here</a> and put them inside your_site/plugins/compile_ipynb/ folder.</li>
<li>Finally, you have to put:</li>
</ul>
<pre><code>post_pages = (
    (&quot;posts/*.ipynb&quot;, &quot;posts&quot;, &quot;post.tmpl&quot;, True),
    (&quot;stories/*.ipynb&quot;, &quot;stories&quot;, &quot;story.tmpl&quot;, False),
)</code></pre>
<p>and</p>
<pre><code>THEME = &#39;site-ipython&#39;</code></pre>
<p>in your conf.py file of your_site (you can modified the other pieces inside conf.py according to your needs).</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h3 id="NOTE:-This-setup-is-done-only-once-time-a-life...-hehe">NOTE: This setup is done only once time a life... hehe<a class="anchor-link" href="#NOTE:-This-setup-is-done-only-once-time-a-life...-hehe">&#182;</a></h3>
</div>

<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>USE</strong>:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>First create a new post:</li>
</ul>
<p><code>nikola new_post -f ipynb</code></p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>NOTE</strong>: <strong>IGNORE</strong> the -2 option in nikola new_page (it is no sense with the current implementation).</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>You will be asked for a title (you can also add the title and tags in the previous call).</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Then, two files will be created by Nikola in the /posts folder of your_site: a meta file containing title, slug, time, tags (you can modified them with any text processor) and a <strong>naive</strong> ipynb file with the corresponding title.</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>You can init the <code>ipython notebook</code> inside this folder and modified the <em>&quot;post&quot;</em> notebook as you wish (do not forget to save the changes inside your notebook).</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Finally, just:</li>
</ul>
<p><code>nikola build</code></p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>and deploy the output folder containing your_site... to see it locally:</p>
<p><code>nikola serve</code></p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>That's it all, my friend!</strong></p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>If you have any doubt, just tell me: <a href="https://twitter.com/damian_avila">@damianavila</a></p>
<p>Cheers,</p>
<p>Damián</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>PS: And now some cells to show you this is areal notebook...</p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">pwd</span>
</pre></div>

<i class="icon-hand-left icon-large" style="float:right; margin-top:8px; margin-right:10px"> Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt output_prompt">
    Out[1]:</div>
<div class="box-flex1 output_subarea output_pyout">


<pre>
u&apos;/home/damian/Desarrollos/To_PR/SITIOS/Damian_blog_nikola/posts&apos;
</pre>

</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[2]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">pylab</span> <span class="n">inline</span>
</pre></div>

<i class="icon-hand-left icon-large" style="float:right; margin-top:8px; margin-right:10px"> Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>

Welcome to pylab, a matplotlib-based Python environment [backend: module://IPython.zmq.pylab.backend_inline].
For more information, type &apos;help(pylab)&apos;.

</pre>
</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[3]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">x</span> <span class="o">=</span> <span class="n">linspace</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">3</span><span class="o">*</span><span class="n">pi</span><span class="p">,</span> <span class="mi">500</span><span class="p">)</span>
<span class="n">plot</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">sin</span><span class="p">(</span><span class="n">x</span><span class="o">**</span><span class="mi">2</span><span class="p">))</span>
<span class="n">title</span><span class="p">(</span><span class="s">&#39;A simple chirp&#39;</span><span class="p">);</span>
</pre></div>

<i class="icon-hand-left icon-large" style="float:right; margin-top:8px; margin-right:10px"> Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_display_data">


<img src="data:image/png;base64,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
RU5ErkJggg==
">

</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[4]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">x</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">y</span> <span class="o">=</span> <span class="mi">4</span>
<span class="n">z</span> <span class="o">=</span> <span class="n">y</span><span class="o">/</span><span class="p">(</span><span class="mi">1</span><span class="o">-</span><span class="n">x</span><span class="p">)</span>
</pre></div>

<i class="icon-hand-left icon-large" style="float:right; margin-top:8px; margin-right:10px"> Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_pyerr">
<pre>
<span class="ansired">---------------------------------------------------------------------------</span>
<span class="ansired">ZeroDivisionError</span>                         Traceback (most recent call last)
<span class="ansigreen">&lt;ipython-input-4-dc39888fd1d2&gt;</span> in <span class="ansicyan">&lt;module&gt;</span><span class="ansiblue">()</span>
<span class="ansigreen">      1</span> x <span class="ansiyellow">=</span> <span class="ansicyan">1</span><span class="ansiyellow"></span>
<span class="ansigreen">      2</span> y <span class="ansiyellow">=</span> <span class="ansicyan">4</span><span class="ansiyellow"></span>
<span class="ansigreen">----&gt; 3</span><span class="ansiyellow"> </span>z <span class="ansiyellow">=</span> y<span class="ansiyellow">/</span><span class="ansiyellow">(</span><span class="ansicyan">1</span><span class="ansiyellow">-</span>x<span class="ansiyellow">)</span><span class="ansiyellow"></span>

<span class="ansired">ZeroDivisionError</span>: integer division or modulo by zero</pre>
</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>Courtesy of MathJax, you can include mathematical expressions both inline: <span class="math">\(e^{i\pi} + 1 = 0\)</span> and displayed:</p>
<p><span class="math">\[e^x=\sum_{i=0}^\infty \frac{1}{i!}x^i\]</span></p>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[5]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="kn">from</span> <span class="nn">IPython.display</span> <span class="kn">import</span> <span class="n">Image</span>
<span class="n">Image</span><span class="p">(</span><span class="n">url</span><span class="o">=</span><span class="s">&#39;http://python.org/images/python-logo.gif&#39;</span><span class="p">)</span>
</pre></div>

<i class="icon-hand-left icon-large" style="float:right; margin-top:8px; margin-right:10px"> Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt output_prompt">
    Out[5]:</div>
<div class="box-flex1 output_subarea output_pyout">

<div class="output_html rendered_html">
<img src="http://python.org/images/python-logo.gif" />
</div>

</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[6]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="kn">from</span> <span class="nn">IPython.display</span> <span class="kn">import</span> <span class="n">YouTubeVideo</span>
<span class="c"># a talk about IPython at Sage Days at U. Washington, Seattle.</span>
<span class="c"># Video credit: William Stein.</span>
<span class="n">YouTubeVideo</span><span class="p">(</span><span class="s">&#39;1j_HxD4iLn8&#39;</span><span class="p">)</span>
</pre></div>

<i class="icon-hand-left icon-large" style="float:right; margin-top:8px; margin-right:10px"> Click me!</i>
</div>
</div>

<div class="output_hidden">
<div class="vbox output_wrapper">
<div class="output vbox">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt output_prompt">
    Out[6]:</div>
<div class="box-flex1 output_subarea output_pyout">

<div class="output_html rendered_html">

            <iframe
                width="400"
                height="300"
                src="http://www.youtube.com/embed/1j_HxD4iLn8"
                frameborder="0"
                allowfullscreen
            ></iframe>
        
</div>

</div>
</div>

</div>
</div>

</div>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>OK, enough... see you soon!</p>
</div>