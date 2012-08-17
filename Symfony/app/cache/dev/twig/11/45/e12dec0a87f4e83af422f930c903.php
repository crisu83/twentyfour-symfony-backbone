<?php

/* TwentyfourAppBundle:Default:index.html.twig */
class __TwigTemplate_1145e12dec0a87f4e83af422f930c903 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = $this->env->loadTemplate("TwentyfourAppBundle::layout.html.twig");

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "TwentyfourAppBundle::layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_title($context, array $blocks = array())
    {
        echo "Twentyfour";
    }

    // line 5
    public function block_content($context, array $blocks = array())
    {
        // line 6
        echo "<div class=\"hero-unit\">
    <h1>Twentyfour</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum elementum luctus. Nulla vel bibendum elit. Suspendisse quis dui at ligula tristique luctus. Ut eget purus ante, ut vulputate leo. Duis ut nisi enim. Integer enim justo, imperdiet eu sagittis ut, tempus vel lectus.</p>
</div>

<h2>Welcome!</h2>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt mollis tincidunt. Nunc placerat, nibh vitae pulvinar imperdiet, est augue blandit nisl, eu auctor lectus elit at nisl. Curabitur pharetra porttitor ligula placerat malesuada. Sed vitae tellus diam, ut accumsan dui. In risus dui, gravida a vulputate nec, consectetur non metus. Aliquam eget eros lorem, vel dictum sapien. In hac habitasse platea dictumst. Praesent turpis lacus, porttitor molestie aliquet sit amet, mattis vel lectus. Praesent elementum sapien quis metus aliquam vitae blandit purus feugiat. Sed placerat nisi id nisl scelerisque egestas eleifend magna accumsan. Integer faucibus, elit id rutrum malesuada, nibh dolor commodo mauris, at pulvinar risus arcu quis lectus. Maecenas ut ante ut diam tempus euismod.</p>
";
    }

    public function getTemplateName()
    {
        return "TwentyfourAppBundle:Default:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  36 => 6,  33 => 5,  27 => 3,);
    }
}
