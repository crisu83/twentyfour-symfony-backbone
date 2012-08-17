<?php

/* TwentyfourAppBundle::layout.html.twig */
class __TwigTemplate_1ace89c27e10b2a775879eab8fe4806a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'content' => array($this, 'block_content'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\" />
    <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
    <link rel=\"icon\" sizes=\"16x16\" href=\"";
        // line 6
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    ";
        // line 7
        if (isset($context['assetic']['debug']) && $context['assetic']['debug']) {
            // asset "1b4808f_0"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_1b4808f_0") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/1b4808f_styles_1.css");
            // line 8
            echo "        <link type=\"text/css\" rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\" media=\"screen\" />
    ";
        } else {
            // asset "1b4808f"
            $context["asset_url"] = isset($context['assetic']['use_controller']) && $context['assetic']['use_controller'] ? $this->env->getExtension('routing')->getPath("_assetic_1b4808f") : $this->env->getExtension('assets')->getAssetUrl("_controller/css/1b4808f.css");
            echo "        <link type=\"text/css\" rel=\"stylesheet\" href=\"";
            echo twig_escape_filter($this->env, $this->getContext($context, "asset_url"), "html", null, true);
            echo "\" media=\"screen\" />
    ";
        }
        unset($context["asset_url"]);
        // line 10
        echo "    <script type=\"text/javascript\" data-main=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("js/main"), "html", null, true);
        echo "\" src=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("js/lib/require/require.js"), "html", null, true);
        echo "\"></script>
</head>
<body>
<div class=\"navbar navbar-fixed-top\">
    <div class=\"navbar-inner\">
        <div class=\"container\">
            <a class=\"brand\" href=\"#\">Twentyfour</a>
            <ul class=\"nav\">
                <li class=\"active\"><a href=\"#\">Home</a></li>
                <li><a href=\"#\">Link 1</a></li>
                <li><a href=\"#\">Link 2</a></li>
                <li><a href=\"#\">Link 3</a></li>
            </ul>
            <ul class=\"nav pull-right\">
                <li><a href=\"";
        // line 24
        echo twig_escape_filter($this->env, $this->env->getExtension('routing')->getPath("_login"), "html", null, true);
        echo "\">Login</a></li>
            </ul>
        </div>
    </div>
</div>
<div class=\"container\">
    ";
        // line 30
        $context['_parent'] = (array) $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute($this->getAttribute($this->getContext($context, "app"), "session"), "flashbag"), "get", array(0 => "notice"), "method"));
        foreach ($context['_seq'] as $context["_key"] => $context["flashMessage"]) {
            // line 31
            echo "        <div class=\"alert alert-warning\">
            <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times;</a>
            <strong>Notice</strong> ";
            // line 33
            echo twig_escape_filter($this->env, $this->getContext($context, "flashMessage"), "html", null, true);
            echo "
        </div>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['flashMessage'], $context['_parent'], $context['loop']);
        $context = array_merge($_parent, array_intersect_key($context, $_parent));
        // line 36
        echo "
    <div class=\"content\">
        ";
        // line 38
        $this->displayBlock('content', $context, $blocks);
        // line 40
        echo "    </div>

    ";
        // line 42
        if (array_key_exists("code", $context)) {
            // line 43
            echo "        <h2>Code behind this page</h2>
        <div class=\"content\">";
            // line 44
            echo $this->getContext($context, "code");
            echo "</div>
    ";
        }
        // line 46
        echo "
</div>
</body>
</html>
";
    }

    // line 5
    public function block_title($context, array $blocks = array())
    {
        echo "Demo Bundle";
    }

    // line 38
    public function block_content($context, array $blocks = array())
    {
        // line 39
        echo "        ";
    }

    public function getTemplateName()
    {
        return "TwentyfourAppBundle::layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  134 => 39,  131 => 38,  125 => 5,  117 => 46,  112 => 44,  109 => 43,  107 => 42,  103 => 40,  101 => 38,  97 => 36,  88 => 33,  84 => 31,  80 => 30,  71 => 24,  51 => 10,  37 => 8,  29 => 6,  25 => 5,  19 => 1,  36 => 6,  33 => 7,  27 => 3,);
    }
}
